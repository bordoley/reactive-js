import {
  getHostScheduler,
  createHttpServer,
  decodeHttpRequest,
  createBufferContentBody,
  encodeHttpResponse,
  HttpMethod,
  sendHttpRequest,
  handleHttpClientReponseRedirect,
} from "@reactive-js/node";
import {
  exhaust,
  fromArray,
  generate,
  map,
  onNotify,
  subscribe,
  ofValue,
  scan,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import {
  createPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/scheduler";
import { createHttpRequest } from "@reactive-js/node/dist/types/internal/http";

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
  onNotify(([prev, next]) => console.log(next - prev)),
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
  req =>
    pipe(
      req,
      decodeHttpRequest,
      ofValue,
      onNotify(req => console.log(req.url)),
      map(_ => ({
        statusCode: 200,
        content: createBufferContentBody(chunk, "text/plain"),
      })),
      map(encodeHttpResponse(req.acceptedEncodings)),
    ),
  {
    scheduler,
    port: 8080,
  },
);

connect();

pipe(
  createHttpRequest(HttpMethod.POST, "http://localhost:8080/index.html", {
    content: createBufferContentBody(chunk, "text/plain"),
    acceptedEncodings: [],
    headers: {},
  }),
  sendHttpRequest,
  handleHttpClientReponseRedirect(0),
  onNotify(resp => {
    console.log(resp.statusCode);
    console.log(resp.location);
    resp.dispose();
  }),
  subscribe(scheduler),
);
