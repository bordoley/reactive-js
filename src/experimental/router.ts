import { pipe } from "../functions";
import { isNone, isSome, none, Option } from "../option";
import { fromObject, reduce } from "../readonlyArray";
import { ReadonlyObjectMap } from "../readonlyObjectMap";

export type Router<T> = {
  readonly name: string;
  readonly value?: T;
  readonly children: ReadonlyObjectMap<Router<T>>;
};

type Path = [string, Option<Path>];

const _empty: Router<unknown> = {
  name: "",
  children: {},
};

const empty = <T>(): Router<T> => _empty as Router<T>;

const _add = <T>(
  router: Router<T>,
  [name, child]: Path,
  value: T,
): Router<T> => {
  if (isNone(child)) {
    return {
      name,
      value,
      children: router.children,
    };
  } else {
    const [childName] = child;
    const computedChildName = childName.startsWith(":")
      ? ":"
      : childName.startsWith("*")
      ? "*"
      : childName;

    const childRouter = router.children[computedChildName] ?? empty();
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

const add = <T>(router: Router<T>, path: string, value: T): Router<T> =>
  _add(router, createPath(path), value);

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
  router: Router<T>,
  path: Path,
  params: ReadonlyObjectMap<string>,
): Option<[T, ReadonlyObjectMap<string>]> => {
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
  router: Router<T>,
  path: string,
): Option<[T, ReadonlyObjectMap<string>]> =>
  _find(router, createPath(path), {});

export const createRouter = <T>(routeMap: ReadonlyObjectMap<T>) =>
  pipe(
    routeMap,
    fromObject(),
    reduce<[string, T], Router<T>>(
      (acc, [path, f]) => add(acc, path, f),
      empty,
    ),
  );
