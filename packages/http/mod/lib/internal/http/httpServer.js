import { pipe, returns } from "../../../../../core/mod/lib/functions.js";
import { isNone, isSome, none } from "../../../../../core/mod/lib/option.js";
import { fromObject, reduce } from "../../../../../core/mod/lib/readonlyArray.js";
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
