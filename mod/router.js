'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var readonlyArray = require('./readonlyArray.js');

const _empty = {
    name: "",
    children: {},
};
const empty = () => _empty;
const _add = (router, [name, child], value) => {
    var _a;
    if (option.isNone(child)) {
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
const add = (router, path, value) => _add(router, createPath(path), value);
const serializePath = (path) => {
    let [result, child] = path;
    while (option.isSome(child)) {
        const [childName] = child;
        result += `/${childName}`;
        [, child] = child;
    }
    return result;
};
const _find = (router, path, params) => {
    const [, child] = path;
    const { value } = router;
    if (option.isNone(child) && option.isSome(value)) {
        return [value, params];
    }
    if (option.isNone(child)) {
        return option.none;
    }
    const [childName] = child;
    const nameRouter = router.children[childName];
    const nameRouterResult = option.isSome(nameRouter)
        ? _find(nameRouter, child, params)
        : option.none;
    if (option.isSome(nameRouterResult)) {
        return nameRouterResult;
    }
    const paramRouter = router.children[":"];
    const paramRouterResult = option.isSome(paramRouter)
        ? _find(paramRouter, child, {
            ...params,
            [paramRouter.name.substring(1)]: childName,
        })
        : option.none;
    if (option.isSome(paramRouterResult)) {
        return paramRouterResult;
    }
    const globRouter = router.children["*"];
    const globRouterHandler = globRouter === null || globRouter === void 0 ? void 0 : globRouter.value;
    if (option.isSome(globRouterHandler)) {
        const newParams = {
            ...params,
            [globRouter.name.substring(1)]: serializePath(child),
        };
        return [globRouterHandler, newParams];
    }
    return option.none;
};
const createPath = (path) => {
    const root = ["", option.none];
    let acc = root;
    for (const name of path.split("/")) {
        const child = [name, option.none];
        acc[1] = child;
        acc = child;
    }
    return root;
};
const find = (router, path) => _find(router, createPath(path), {});
const createRouter = (routeMap) => functions.pipe(routeMap, readonlyArray.fromObject(), readonlyArray.reduce((acc, [path, f]) => add(acc, path, f), empty));

exports.createRouter = createRouter;
exports.find = find;
