import { createRouter, find } from "../../../../core/mod/lib/experimental/router.js";
import { isNone, isSome } from "../../../../core/mod/lib/option.js";
import { getHeaderValue, } from "./httpHeaders.js";
import { createHttpRequest, } from "./httpRequest.js";
export const createRoutingHttpServer = (routes, notFoundHandler) => {
    const router = createRouter(routes);
    return (request) => {
        const result = find(router, request.uri.pathname);
        if (isSome(result)) {
            const [handler, params] = result;
            const requestWithParams = {
                ...request,
                params,
            };
            return handler(requestWithParams);
        }
        else {
            return notFoundHandler(request);
        }
    };
};
const parseURIFromHeaders = (protocol, path, httpVersionMajor, headers) => {
    const forwardedProtocol = getHeaderValue(headers, "X-Forwarded-Proto");
    const uriProtocol = isSome(forwardedProtocol)
        ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
        : protocol;
    const forwardedHost = getHeaderValue(headers, "X-Forwarded-Host");
    const http2Authority = headers[":authority"];
    const http1Host = getHeaderValue(headers, "Host");
    const unfilteredHost = isSome(forwardedHost)
        ? forwardedHost
        : isSome(http2Authority) && httpVersionMajor >= 2
            ? http2Authority
            : isSome(http1Host)
                ? http1Host
                : "";
    const host = unfilteredHost.split(/\s*,\s*/, 1)[0];
    return new URL(`${uriProtocol}://${host}${path !== null && path !== void 0 ? path : ""}`);
};
export const createHttpServerRequest = ({ path, headers = {}, httpVersionMajor = 1, isTransportSecure, uri, ...rest }) => {
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
    return createHttpRequest(options);
};
export const disallowProtocolAndHostForwarding = () => request => {
    const { httpVersionMajor, headers: oldHeaders, isTransportSecure, uri: oldUri, } = request;
    const { "x-forwarded-proto": xForwardedProto, "x-forwarded-host": xForwardedHost, ...headers } = oldHeaders;
    const protocol = isTransportSecure ? "https" : "http";
    if (isNone(xForwardedProto) && isNone(xForwardedHost)) {
        return request;
    }
    else {
        const path = oldUri.pathname;
        const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);
        return {
            ...request,
            uri,
            headers,
        };
    }
};
