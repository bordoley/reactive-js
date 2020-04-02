import { createServer } from "./httpServer";
import { pipe } from "@reactive-js/pipe";
import { ofValue, onNotify, map, subscribe } from "@reactive-js/observable";
import { getHostScheduler } from "./scheduler";
import { createBufferContentBody, encode } from "./httpContentBody";
import { HttpContentEncoding, HttpMethod } from "./http";
import { handleRedirects, send } from "./httpClient";

const scheduler = getHostScheduler();

const chunk = Buffer.from(
  "aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnoooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz",
);
const connect = createServer(
  req =>
    pipe(
      ofValue(req),
      onNotify(req => console.log(req.url)),
      map(_ => ({
        statusCode: 200,
        content: pipe(
          createBufferContentBody(chunk, "text/plain"),
          encode(HttpContentEncoding.GZip),
        ),
      })),
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
