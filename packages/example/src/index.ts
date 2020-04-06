import {
  HttpMethod,
  createHttpRequest,
  createHttpResponse,
} from "@reactive-js/http";
import {
  HttpClientRequestStatusType,
  createBufferContentBody,
  createHttpServer,
  sendHttpRequest,
  decodeHttpRequest,
  encodeHttpResponse,
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

const chunk = Buffer.from(
  "aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnoooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz",
);

const connect = createHttpServer(
  req => pipe(
    ofValue(req),
    map(decodeHttpRequest),
    mapTo(
      createHttpResponse(200, {
        content: createBufferContentBody(chunk, "text/plain"),
      }),
    ),
    map(encodeHttpResponse(req)),
  ),
  {
    domain: "localhost",
    scheduler,
    port: 8080,
  },
);

connect();

pipe(
  createHttpRequest(HttpMethod.POST, "http://localhost:8080/index.html", {
    content: createBufferContentBody(chunk, "text/plain"),
  }),
  sendHttpRequest(),
  onNotify(status => {
    console.log("onNotify: " + status.type);
    if (status.type === HttpClientRequestStatusType.ResponseReady) {
      const { response } = status;
      response.dispose();
    }
  }),
  subscribe(scheduler),
);
