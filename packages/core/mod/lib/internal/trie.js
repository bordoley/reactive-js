import { isNone, isSome, none } from "../option.js";
const _empty = {
    name: "",
    children: {},
};
export const empty = () => _empty;
const _add = (trie, [name, child], value) => {
    var _a;
    if (isNone(child)) {
        return {
            name,
            value,
            children: trie.children,
        };
    }
    else {
        const [childName] = child;
        const computedChildName = childName.startsWith(":")
            ? ":"
            : childName.startsWith("*")
                ? "*"
                : childName;
        const childTrie = (_a = trie.children[computedChildName]) !== null && _a !== void 0 ? _a : empty();
        const newChildTrie = _add(childTrie, child, value);
        return {
            name,
            value: trie.value,
            children: {
                ...trie.children,
                [computedChildName]: newChildTrie,
            },
        };
    }
};
export const add = (trie, path, value) => _add(trie, createPath(path), value);
const serializePath = (path) => {
    let [result, child] = path;
    while (isSome(child)) {
        const [childName] = child;
        result += `/${childName}`;
        [, child] = child;
    }
    return result;
};
const _find = (trie, path, params) => {
    const [, child] = path;
    const { value } = trie;
    if (isNone(child) && isSome(value)) {
        return [value, params];
    }
    if (isNone(child)) {
        return none;
    }
    const [childName] = child;
    const nameRouter = trie.children[childName];
    const nameRouterResult = isSome(nameRouter)
        ? _find(nameRouter, child, params)
        : none;
    if (isSome(nameRouterResult)) {
        return nameRouterResult;
    }
    const paramRouter = trie.children[":"];
    const paramRouterResult = isSome(paramRouter)
        ? _find(paramRouter, child, {
            ...params,
            [paramRouter.name.substring(1)]: childName,
        })
        : none;
    if (isSome(paramRouterResult)) {
        return paramRouterResult;
    }
    const globRouter = trie.children["*"];
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
export const find = (trie, path) => _find(trie, createPath(path), {});
