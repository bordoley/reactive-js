import { createServer as createNodeHttpServer } from "http";
import {
  HttpMethod,
  HttpRequestLike,
  HttpResponseLike,
  createHttpRequest,
  createHttpResponse,
  disallowProtocolAndHostForwarding,
} from "@reactive-js/http";
import {
  HttpClientRequestStatusType,
  HttpRequestRouterHandler,
  createBufferHttpContent,
  createStringHttpContent,
  createHttpRequestListener,
  creatHttpClient,
  decodeHttpRequest,
  encodeHttpResponse,
  createDefaultHttpResponseHandler,
  createRouter,
} from "@reactive-js/http-node";
import {
  getHostScheduler,
  ReadableEvent,
  ReadableMode,
} from "@reactive-js/node";
import {
  exhaust,
  fromArray,
  generate,
  map,
  subscribe,
  ofValue,
  scan,
  mapTo,
  ObservableLike,
  onNotify,
} from "@reactive-js/observable";
import { pipe, compose, OperatorLike } from "@reactive-js/pipe";
import {
  createPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/scheduler";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";

const backgroundScheduler = pipe(
  getHostScheduler(),
  createPriorityScheduler,
  toSchedulerWithPriority(500),
);

pipe(
  generate(
    x => x + 1,
    () => 0,
  ),
  map(x => fromArray([x, x, x, x])),
  exhaust(),
  map(_ => backgroundScheduler.now),
  scan(
    ([_, prev], next) => [prev, next],
    () => [backgroundScheduler.now, backgroundScheduler.now],
  ),
  //onNotify(([prev, next]) => console.log(next - prev)),
  subscribe(backgroundScheduler),
);

const scheduler = pipe(
  getHostScheduler(),
  createPriorityScheduler,
  toSchedulerWithPriority(1),
);

const routerHandlerA: OperatorLike<
  HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  ObservableLike<
    HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
  >
> = compose(
  ofValue,
  mapTo(
    createHttpResponse(200, {
      content: createStringHttpContent("a", "text/plain"),
    }),
  ),
);

const routerHandlerB: HttpRequestRouterHandler<
  AsyncEnumerableLike<ReadableMode, ReadableEvent>,
  AsyncEnumerableLike<ReadableMode, ReadableEvent>
> = req =>
  pipe(
    ofValue(req),
    mapTo(
      createHttpResponse(200, {
        content: createStringHttpContent(
          JSON.stringify(req.params),
          "text/plain",
        ),
      }),
    ),
  );

const routerHandlerGlob: HttpRequestRouterHandler<
  AsyncEnumerableLike<ReadableMode, ReadableEvent>,
  AsyncEnumerableLike<ReadableMode, ReadableEvent>
> = req =>
  pipe(
    ofValue(req),
    mapTo(
      createHttpResponse(200, {
        content: createStringHttpContent(
          JSON.stringify(req.params),
          "text/plain",
        ),
      }),
    ),
  );

const notFound: OperatorLike<
  HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  ObservableLike<
    HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
  >
> = req =>
  pipe(
    ofValue(req),
    mapTo(
      createHttpResponse(404, {
        content: createStringHttpContent(req.uri.toString(), "text/plain"),
      }),
    ),
  );

const router = createRouter(
  {
    "/a": routerHandlerA,
    "/path/glob/b": routerHandlerB,
    "/path/glob/*": routerHandlerGlob,
    "/path/:paramA/a/:paramB": routerHandlerB,
  },
  notFound,
);

const listener = createHttpRequestListener(
  req =>
    pipe(
      req,
      req => (
        console.log(req.uri.toString()),
        console.log(req.headers),
        console.log(),
        req
      ),
      disallowProtocolAndHostForwarding(),
      req => (
        console.log(req.uri.toString()),
        console.log(req.headers),
        console.log(),
        req
      ),
      decodeHttpRequest(),
      router,
      map(encodeHttpResponse(req)),
    ),
  scheduler,
);

createNodeHttpServer({}, listener).listen(8080);

const sendHttpRequest = creatHttpClient();

const chunk = Buffer.from(
  "aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnoooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz",
);

pipe(
  createHttpRequest(HttpMethod.POST, "http://localhost:8080/index.html", {
    content: createBufferHttpContent(chunk, "text/plain"),
    headers: {
      "x-forwarded-host": "www.google.com",
      "x-forwarded-proto": "https",
    },
  }),
  sendHttpRequest,
  createDefaultHttpResponseHandler(sendHttpRequest, 10),
  onNotify(status => {
    console.log("status: " + status.type);
    if (status.type === HttpClientRequestStatusType.ResponseReady) {
      const { response } = status;
      response.dispose();
    } 
  }),
  subscribe(scheduler),
);
