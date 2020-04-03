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
  map(x => fromArray([x, x, x, x])),
  exhaust(),
  onNotify(console.log),
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
  {
    method: HttpMethod.POST,
    url: "http://localhost:8080/index.html",
    content: createBufferContentBody(chunk, "text/plain"),
    acceptedEncodings: [],
    headers: {},
  },
  sendHttpRequest,
  handleHttpClientReponseRedirect(0),
  onNotify(resp => {
    console.log(resp.statusCode);
    console.log(resp.location);
    resp.dispose();
  }),
  subscribe(scheduler),
);
