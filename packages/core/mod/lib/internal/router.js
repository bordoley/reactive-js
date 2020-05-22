import { pipe } from "../functions.js";
import { isNone, isSome, none } from "../option.js";
import { fromObject, reduce } from "../readonlyArray.js";
const _empty = {
    name: "",
    children: {},
};
export const empty = () => _empty;
const _add = (router, [name, child], value) => {
    var _a;
    if (isNone(child)) {
        return {
            name,
            value,
            children: router.children,
        };
    }
    else {
        const [childName] = child;
        const computedChildName = childName.startsWith(":")
            ? ":"
            : childName.startsWith("*")
                ? "*"
                : childName;
        const childRouter = (_a = router.children[computedChildName]) !== null && _a !== void 0 ? _a : empty();
        const newChildRouter = _add(childRouter, child, value);
        return {
            name,
            value: router.value,
            children: {
                ...router.children,
                [computedChildName]: newChildRouter,
            },
        };
    }
};
export const add = (router, path, value) => _add(router, createPath(path), value);
const serializePath = (path) => {
    let [result, child] = path;
    while (isSome(child)) {
        const [childName] = child;
        result += `/${childName}`;
        [, child] = child;
    }
    return result;
};
const _find = (router, path, params) => {
    const [, child] = path;
    const { value } = router;
    if (isNone(child) && isSome(value)) {
        return [value, params];
    }
    if (isNone(child)) {
        return none;
    }
    const [childName] = child;
    const nameRouter = router.children[childName];
    const nameRouterResult = isSome(nameRouter)
        ? _find(nameRouter, child, params)
        : none;
    if (isSome(nameRouterResult)) {
        return nameRouterResult;
    }
    const paramRouter = router.children[":"];
    const paramRouterResult = isSome(paramRouter)
        ? _find(paramRouter, child, {
            ...params,
            [paramRouter.name.substring(1)]: childName,
        })
        : none;
    if (isSome(paramRouterResult)) {
        return paramRouterResult;
    }
    const globRouter = router.children["*"];
    const globRouterHandler = globRouter === null || globRouter === void 0 ? void 0 : globRouter.value;
    if (isSome(globRouterHandler)) {
        const newParams = {
            ...params,
            [globRouter.name.substring(1)]: serializePath(child),
        };
        return [globRouterHandler, newParams];
    }
    return none;
};
const createPath = (path) => {
    const root = ["", none];
    let acc = root;
    for (const name of path.split("/")) {
        const child = [name, none];
        acc[1] = child;
        acc = child;
    }
    return root;
};
export const find = (router, path) => _find(router, createPath(path), {});
export const createRouter = (routeMap) => pipe(routeMap, fromObject(), reduce((acc, [path, f]) => add(acc, path, f), empty));
