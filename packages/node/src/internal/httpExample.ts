import { createServer, decodeServerRequest, encodeServerResponse } from "./httpServer";
import { pipe } from "@reactive-js/pipe";
import { ofValue, onNotify, map, subscribe } from "@reactive-js/observable";
import { getHostScheduler } from "./scheduler";
import { createBufferContentBody } from "./httpContentBody";
import { HttpMethod } from "./http";
import { handleRedirects, send } from "./httpClient";
import { createPriorityScheduler, toSchedulerWithPriority } from "@reactive-js/scheduler";

const scheduler = pipe(
  getHostScheduler(),
  createPriorityScheduler,
  toSchedulerWithPriority(1),
);

const chunk = Buffer.from(
  "aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnoooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz",
);
const connect = createServer(
  req => pipe(
    req,
    decodeServerRequest,
    ofValue,
    onNotify(req => console.log(req.url)),
    map(_ => ({
      statusCode: 200,
      content: createBufferContentBody(chunk, "text/plain"),
    })),
    map(encodeServerResponse(req)),
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
    headers: {},
  },
  send,
  handleRedirects(0),
  onNotify(resp => {
    console.log(resp.statusCode);
    console.log(resp.location);
    resp.dispose();
  }),
  subscribe(scheduler),
);
