import { createServer } from "./httpServer";
import { pipe } from "@reactive-js/pipe";
import {
  ofValue,
  onNotify,
  map,
} from "@reactive-js/observable";
import { getHostScheduler } from "./scheduler";
import { createBufferContentBody, encode } from "./httpContentBody";
import { HttpContentEncoding } from "./http";

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
    scheduler: getHostScheduler(),
    port: 8080,
  },
);

connect();
