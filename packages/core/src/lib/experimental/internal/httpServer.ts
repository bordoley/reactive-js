import { Function1 } from "../../functions";
import { createRouter, find } from "../../experimental/router";
import { ObservableLike } from "../../observable";
import { isNone, isSome } from "../../option";
import {
  getHeaderValue,
  HttpStandardHeader,
  HttpExtensionHeader,
  HttpHeaders,
} from "./httpHeaders";
import { URILike } from "./httpMessage";
import {
  HttpRequest,
  createHttpRequest,
  HttpRequestOptions,
} from "./httpRequest";
import { HttpResponse } from "./httpResponse";

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
  const router = createRouter(routes);

  return (request: HttpRequest<TReq>) => {
    const [handler, params] = find(router, request.uri.pathname) ?? [notFoundHandler, {}];
    const requestWithParams: HttpRoutedRequest<TReq> = {
      ...request,
      params,
    };
    return handler(requestWithParams);
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
