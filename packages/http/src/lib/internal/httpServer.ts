import { Function1, pipe, returns } from "@reactive-js/core/lib/functions";
import { ObservableLike } from "@reactive-js/core/lib/observable";
import { isNone, isSome, none, Option } from "@reactive-js/core/lib/option";
import { fromObject, reduce } from "@reactive-js/core/lib/readonlyArray";
import {
  CacheDirective,
  HttpContentEncoding,
  MediaType,
  EntityTag,
  HttpDateTime,
} from "../http";
import {
  getHeaderValue,
  HttpStandardHeader,
  HttpExtensionHeader,
  HttpHeaders,
} from "./httpHeaders";
import { URILike } from "./httpMessage";
import { MediaRange } from "./httpPreferences";
import { HttpMethod, HttpRequest, createHttpRequest } from "./httpRequest";
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

// Prefix tree
type Router<TReq, TResp> = {
  readonly name: string;
  readonly handler?: HttpServer<HttpRoutedRequest<TReq>, HttpResponse<TResp>>;
  readonly children: { [segment: string]: Router<TReq, TResp> };
};

type Segment = {
  readonly name: string;
  child?: Segment;
};

const createSegments = (path: string): Segment => {
  const root: Segment = { name: "" };

  let acc = root;
  for (const name of path.split("/")) {
    const child: Segment = { name };
    acc.child = child;
    acc = child;
  }

  return root;
};

const serializeSegments = (segment: Segment): string => {
  let result = segment.name;
  while (isSome(segment.child)) {
    segment = segment.child;
    result += `/${segment.name}`;
  }
  return result;
};

const emptyRouter: Router<unknown, unknown> = {
  name: "",
  children: {},
};

const addHandler = <TReq, TResp>(
  router: Router<TReq, TResp>,
  { name, child }: Segment,
  handler: HttpServer<HttpRoutedRequest<TReq>, HttpResponse<TResp>>,
): Router<TReq, TResp> => {
  if (isNone(child)) {
    return {
      name,
      handler,
      children: router.children,
    };
  } else {
    const childName = child.name.startsWith(":") ? ":" : child.name;
    const childRouter =
      router.children[childName] ?? (emptyRouter as Router<TReq, TResp>);
    const newChildRouter = addHandler(childRouter, child, handler);

    return {
      name,
      handler: router.handler,
      children: {
        ...router.children,
        [childName]: newChildRouter,
      },
    };
  }
};

const findHandler = <TReq, TResp>(
  router: Router<TReq, TResp>,
  segment: Segment,
  params: { [param: string]: string },
): Option<[
  HttpServer<HttpRoutedRequest<TReq>, HttpResponse<TResp>>,
  { [param: string]: string },
]> => {
  const { child } = segment;
  const { handler } = router;
  if (isNone(child) && isSome(handler)) {
    return [handler, params];
  }
  if (isNone(child)) {
    return none;
  }

  const nameRouter = router.children[child.name];
  const nameRouterResult = isSome(nameRouter)
    ? findHandler(nameRouter, child, params)
    : none;
  if (isSome(nameRouterResult)) {
    return nameRouterResult;
  }

  const paramRouter = router.children[":"];
  const paramRouterResult = isSome(paramRouter)
    ? findHandler(paramRouter, child, {
        ...params,
        [paramRouter.name]: child.name,
      })
    : none;
  if (isSome(paramRouterResult)) {
    return paramRouterResult;
  }

  const globRouter = router.children["*"];
  const globRouterHandler = globRouter?.handler;
  if (isSome(globRouterHandler)) {
    const newParams = {
      ...params,
      ["*"]: serializeSegments(child),
    };

    return [globRouterHandler, newParams];
  }

  return none;
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
    reduce(
      (acc: Router<TReq, TResp>, [path, handler]) =>
        addHandler(acc, createSegments(path), handler),
      returns(emptyRouter),
    ),
  );

  return (request: HttpRequest<TReq>) => {
    const segments = createSegments(request.uri.pathname);
    const result = findHandler(router, segments, {});

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
  httpVersionMinor = 1,
  isTransportSecure,
  uri,
  ...rest
}: {
  body: T;
  cacheControl?: readonly (string | CacheDirective)[];
  contentInfo?: {
    contentEncodings?: readonly HttpContentEncoding[];
    contentLength?: number;
    contentType: MediaType | string;
  };
  expectContinue?: boolean;
  headers?: HttpHeaders;
  httpVersionMajor?: number;
  httpVersionMinor?: number;
  method: HttpMethod;
  isTransportSecure: boolean;
  path?: string;
  preconditions?: {
    ifMatch?: readonly (string | EntityTag)[] | "*";
    ifModifiedSince?: string | HttpDateTime | Date;
    ifNoneMatch?: readonly (string | EntityTag)[] | "*";
    ifUnmodifiedSince?: string | HttpDateTime | Date;
    ifRange?: string | EntityTag | HttpDateTime | Date;
  };
  preferences?: {
    acceptedCharsets?: readonly string[];
    acceptedEncodings?: readonly HttpContentEncoding[];
    acceptedLanguages?: readonly string[];
    acceptedMediaRanges?: readonly (string | MediaRange)[];
  };
  uri?: string | URILike;
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
    httpVersionMinor,
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
