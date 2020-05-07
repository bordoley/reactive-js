import { HttpResponse, HttpRequest } from "./interfaces.ts";
import { ObservableLike } from "../../../../core/lib/observable.ts";
import { isNone, isSome, none, Option } from "../../../../core/lib/option.ts";
import { Operator } from "../../../../core/lib/functions.ts";

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
  notFoundHandler: Operator<
    HttpRequest<TReq>,
    ObservableLike<HttpResponse<TResp>>
  >,
): HttpServer<HttpRequest<TReq>, HttpResponse<TResp>> => {
  const router = Object.entries(routes).reduce(
    (acc, [path, handler]) => addHandler(acc, createSegments(path), handler),
    emptyRouter as Router<TReq, TResp>,
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
