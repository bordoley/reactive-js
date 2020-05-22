import { isNone, isSome, none, Option } from "../option.ts";

export type Trie<T> = {
  readonly name: string;
  readonly value?: T;
  readonly children: { [segment: string]: Trie<T> };
};

export type Path = [string, Option<Path>];

const _empty: Trie<unknown> = {
  name: "",
  children: {},
};

export const empty = <T>(): Trie<T> => _empty as Trie<T>;

const _add = <T>(
  trie: Trie<T>,
  [name, child]: Path,
  value: T,
): Trie<T> => {
  if (isNone(child)) {
    return {
      name,
      value,
      children: trie.children,
    };
  } else {
    const [childName] = child;
    const computedChildName = 
      childName.startsWith(":") 
        ? ":" 
        : childName.startsWith("*")
        ? "*"
        : childName;

    const childTrie =
      trie.children[computedChildName] ?? empty();
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

export const add = <T>(
  trie: Trie<T>,
  path: string,
  value: T,
): Trie<T> => _add(trie, createPath(path), value);

const serializePath = (path: Path): string => {
  let [result, child] = path;
  while (isSome(child)) {
    const [childName] = child;
    result += `/${childName}`;
    [, child] = child;
  }
  return result;
};

const _find = <T>(
  trie: Trie<T>,
  path: Path,
  params: { readonly [param: string]: string },
): Option<[T, { [param: string]: string }]> => {
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
  const globRouterHandler = globRouter?.value;
  if (isSome(globRouterHandler)) {
    const newParams = {
      ...params,
      [globRouter.name.substring(1)]: serializePath(child),
    };

    return [globRouterHandler, newParams];
  }

  return none;
};

const createPath = (path: string): Path => {
  const root: Path = ["", none];

  let acc = root;
  for (const name of path.split("/")) {
    const child: Path = [name, none];
    acc[1] = child;
    acc = child;
  }

  return root;
};

export const find = <T>(
  trie: Trie<T>,
  path: string,
): Option<[T, { [param: string]: string }]> =>
  _find(trie,  createPath(path), {});