import { pipe, returns } from "../../../../core/mod/lib/functions.js";
import { isNone, isSome, none } from "../../../../core/mod/lib/option.js";
import { fromObject, reduce } from "../../../../core/mod/lib/readonlyArray.js";
import { getHeaderValue, } from "./httpHeaders.js";
import { createHttpRequest } from "./httpRequest.js";
const createSegments = (path) => {
    const root = { name: "" };
    let acc = root;
    for (const name of path.split("/")) {
        const child = { name };
        acc.child = child;
        acc = child;
    }
    return root;
};
const serializeSegments = (segment) => {
    let result = segment.name;
    while (isSome(segment.child)) {
        segment = segment.child;
        result += `/${segment.name}`;
    }
    return result;
};
const emptyRouter = {
    name: "",
    children: {},
};
const addHandler = (router, { name, child }, handler) => {
    var _a;
    if (isNone(child)) {
        return {
            name,
            handler,
            children: router.children,
        };
    }
    else {
        const childName = child.name.startsWith(":") ? ":" : child.name;
        const childRouter = (_a = router.children[childName]) !== null && _a !== void 0 ? _a : emptyRouter;
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
const findHandler = (router, segment, params) => {
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
    const globRouterHandler = globRouter === null || globRouter === void 0 ? void 0 : globRouter.handler;
    if (isSome(globRouterHandler)) {
        const newParams = {
            ...params,
            ["*"]: serializeSegments(child),
        };
        return [globRouterHandler, newParams];
    }
    return none;
};
export const createRoutingHttpServer = (routes, notFoundHandler) => {
    const router = pipe(routes, fromObject(), reduce((acc, [path, handler]) => addHandler(acc, createSegments(path), handler), returns(emptyRouter)));
    return (request) => {
        const segments = createSegments(request.uri.pathname);
        const result = findHandler(router, segments, {});
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
export const parseHttpServerRequestFromHeaders = ({ method, path, headers, httpVersionMajor, httpVersionMinor, isTransportSecure, body, }) => {
    const protocol = isTransportSecure ? "https" : "http";
    const uri = parseURIFromHeaders(protocol, path, httpVersionMajor, headers);
    const options = {
        body,
        headers,
        isTransportSecure,
        method,
        httpVersionMajor,
        httpVersionMinor,
        uri,
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
