import { Function1, pipe } from "../../../../core/mod/lib/functions.ts";
import { ObservableLike } from "../../../../core/mod/lib/observable.ts";
import { isNone, isSome } from "../../../../core/mod/lib/option.ts";
import { fromObject, reduce } from "../../../../core/mod/lib/readonlyArray.ts";
import {
  getHeaderValue,
  HttpStandardHeader,
  HttpExtensionHeader,
  HttpHeaders,
} from "./httpHeaders.ts";
import { URILike } from "./httpMessage.ts";
import {
  HttpRequest,
  createHttpRequest,
  HttpRequestOptions,
} from "./httpRequest.ts";
import { HttpResponse } from "./httpResponse.ts";
import { Trie, add, empty, find } from "../../../../core/mod/lib/internal/trie.ts";

export type HttpServerRequest<T> = HttpRequest<T> & {
  readonly isTransportSecure: boolean;
};

export type HttpServer<
  THttpRequest extends HttpRequest<unknown>,
  THttpResponse extends HttpResponse<unknown>
> = (req: THttpRequest) => ObservableLike<THttpResponse>;

export type HttpRoutedRequest<T> = HttpRequest<T> & {
  readonly params: { readonly [param: string]: string };
};

export const createRoutingHttpServer = <TReq, TResp>(
  routes: {
    [path: string]: HttpServer<HttpRoutedRequest<TReq>, HttpResponse<TResp>>;
  },
  notFoundHandler: Function1<
    HttpRequest<TReq>,
    ObservableLike<HttpResponse<TResp>>
  >,
): HttpServer<HttpRequest<TReq>, HttpResponse<TResp>> => {
  const router = pipe(
    routes,
    fromObject(),
    reduce<
      [string, HttpServer<HttpRoutedRequest<TReq>, HttpResponse<TResp>>],
      Trie<HttpServer<HttpRoutedRequest<TReq>, HttpResponse<TResp>>>
    >((acc, [path, handler]) => add(acc, path, handler), empty),
  );

  return (request: HttpRequest<TReq>) => {
    const result = find(router, request.uri.pathname);

    if (isSome(result)) {
      const [handler, params] = result;
      const requestWithParams: HttpRoutedRequest<TReq> = {
        ...request,
        params,
      };
      return handler(requestWithParams);
    } else {
      return notFoundHandler(request);
    }
  };
};

const parseURIFromHeaders = (
  protocol: "http" | "https",
  path: string,
  httpVersionMajor: number,
  headers: HttpHeaders,
): URILike => {
  const forwardedProtocol = getHeaderValue(
    headers,
    HttpExtensionHeader.XForwardedProto,
  );
  const uriProtocol = isSome(forwardedProtocol)
    ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
    : protocol;
  const forwardedHost = getHeaderValue(
    headers,
    HttpExtensionHeader.XForwardedHost,
  );
  const http2Authority = headers[":authority"];
  const http1Host = getHeaderValue(headers, HttpStandardHeader.Host);
  const unfilteredHost = isSome(forwardedHost)
    ? forwardedHost
    : isSome(http2Authority) && httpVersionMajor >= 2
    ? http2Authority
    : isSome(http1Host)
    ? http1Host
    : "";
  const host = unfilteredHost.split(/\s*,\s*/, 1)[0];
  return new URL(`${uriProtocol}://${host}${path ?? ""}`);
};

export const createHttpServerRequest = <T>({
  path,
  headers = {},
  httpVersionMajor = 1,
  isTransportSecure,
  uri,
  ...rest
}: HttpRequestOptions<T> & {
  path: string;
  isTransportSecure: boolean;
}): HttpServerRequest<T> => {
  const protocol = isTransportSecure ? "https" : "http";
  const parseUri = isSome(uri)
    ? uri
    : isSome(path)
    ? parseURIFromHeaders(protocol, path, httpVersionMajor, headers)
    : (() => {
        throw new Error();
      })();

  const options = {
    ...rest,
    headers,
    httpVersionMajor,
    isTransportSecure,
    uri: parseUri,
  };
  return createHttpRequest(options) as HttpServerRequest<T>;
};

export const disallowProtocolAndHostForwarding = <T>(): Function1<
  HttpServerRequest<T>,
  HttpServerRequest<T>
> => request => {
  const {
    httpVersionMajor,
    headers: oldHeaders,
    isTransportSecure,
    uri: oldUri,
  } = request;
  const {
    "x-forwarded-proto": xForwardedProto,
    "x-forwarded-host": xForwardedHost,
    ...headers
  } = oldHeaders;

  const protocol = isTransportSecure ? "https" : "http";

  if (isNone(xForwardedProto) && isNone(xForwardedHost)) {
    return request;
  } else {
    const path = oldUri.pathname;
    const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);

    return {
      ...request,
      uri,
      headers,
    };
  }
};
