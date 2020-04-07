import { createServer as createNodeHttpServer } from "http";
import {
  HttpMethod,
  createHttpRequest,
  createHttpResponse,
} from "@reactive-js/http";
import {
  HttpClientRequestStatusType,
  createBufferHttpContent,
  createStringHttpContent,
  createHttpRequestListener,
  creatHttpClient,
  decodeHttpRequest,
  encodeHttpResponse,
  createDefaultHttpResponseHandler,
} from "@reactive-js/http-node";
import { getHostScheduler } from "@reactive-js/node";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNotify,
  subscribe,
  ofValue,
  scan,
  mapTo,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import {
  createPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/scheduler";

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
  map(x => fromArray([x, x, x, x], { delay: 1000 })),
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

const listener = createHttpRequestListener(
  req =>
    pipe(
      ofValue(req),
      map(decodeHttpRequest()),
      mapTo(
        createHttpResponse(200, {
          content: createStringHttpContent(req.uri.toString(), "text/plain"),
        }),
      ),
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
