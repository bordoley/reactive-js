import { HttpRequestLike, HttpResponseLike } from "@reactive-js/http";
import { ObservableLike } from "@reactive-js/observable";
import { OperatorLike } from "@reactive-js/pipe";

export interface HttpRoutedRequestLike<T> extends HttpRequestLike<T> {
  readonly params: { readonly [param: string]: string };
}

export type HttpRequestRouterHandler<TReq, TResp> = OperatorLike<
  HttpRoutedRequestLike<TReq>,
  ObservableLike<HttpResponseLike<TResp>>
>;

// Prefix tree
type Router<TReq, TResp> = {
  readonly name: string;
  readonly handler?: HttpRequestRouterHandler<TReq, TResp>;
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
  while (segment.child !== undefined) {
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
  handler: HttpRequestRouterHandler<TReq, TResp>,
): Router<TReq, TResp> => {
  if (child === undefined) {
    return {
      name,
      handler,
      children: router.children,
    };
  } else {
    const childName = child.name.startsWith(":") ? ":" : child.name;
    const childRouter =
      router.children[childName] || (emptyRouter as Router<TReq, TResp>);
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
):
  | [HttpRequestRouterHandler<TReq, TResp>, { [param: string]: string }]
  | undefined => {
  const { child } = segment;
  const { handler } = router;
  if (child === undefined && handler !== undefined) {
    return [handler, params];
  }
  if (child === undefined) {
    return undefined;
  }

  const nameRouter = router.children[child.name];
  const nameRouterResult =
    nameRouter !== undefined
      ? findHandler(nameRouter, child, params)
      : undefined;
  if (nameRouterResult !== undefined) {
    return nameRouterResult;
  }

  const paramRouter = router.children[":"];
  const paramRouterResult =
    paramRouter !== undefined
      ? findHandler(paramRouter, child, {
          ...params,
          [paramRouter.name]: child.name,
        })
      : undefined;
  if (paramRouterResult !== undefined) {
    return paramRouterResult;
  }

  const globRouter = router.children["*"];
  const globRouterHandler = globRouter?.handler;
  if (globRouterHandler !== undefined) {
    const newParams = {
      ...params,
      ["*"]: serializeSegments(child),
    };

    return [globRouterHandler, newParams];
  }

  return undefined;
};

export const createRouter = <TReq, TResp>(
  routes: { [path: string]: HttpRequestRouterHandler<TReq, TResp> },
  notFoundHandler: OperatorLike<
    HttpRequestLike<TReq>,
    ObservableLike<HttpResponseLike<TResp>>
  >,
): OperatorLike<
  HttpRequestLike<TReq>,
  ObservableLike<HttpResponseLike<TResp>>
> => {
  const router = Object.entries(routes).reduce(
    (acc, [path, handler]) => addHandler(acc, createSegments(path), handler),
    emptyRouter as Router<TReq, TResp>,
  );

  return (request: HttpRequestLike<TReq>) => {
    const segments = createSegments(request.uri.pathname);
    const result = findHandler(router, segments, {});

    if (result !== undefined) {
      const [handler, params] = result;
      const requestWithParams: HttpRoutedRequestLike<TReq> = {
        ...request,
        params,
      };
      return handler(requestWithParams);
    } else {
      return notFoundHandler(request);
    }
  };
};
