import fs from "fs";
import { createServer as createHttp1Server } from "http";
import { createSecureServer as createHttp2Server } from "http2";
import mime from "mime-types";
import {
  HttpMethod,
  createHttpRequest,
  createHttpResponse,
  disallowProtocolAndHostForwarding,
  HttpContent,
  HttpContentRequest,
  HttpContentResponse,
  HttpStatusCode,
  parseMediaTypeOrThrow,
  noCache,
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
  createReadableHttpContent,
} from "@reactive-js/http-node";
import {
  HttpRequestRouterHandler,
  createRouter,
} from "@reactive-js/http-router";
import {
  BufferStreamLike,
  scheduler as nodeScheduler,
  bindNodeCallback,
  encode,
} from "@reactive-js/node";
import {
  map,
  subscribe,
  ofValue,
  ObservableLike,
  onNotify,
  catchError,
  throws,
  compute,
  await_,
} from "@reactive-js/observable";
import { pipe, Operator } from "@reactive-js/pipe";
import {
  createPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/scheduler";
import { isSome, none } from "@reactive-js/option";
import { generateStream, mapStream } from "@reactive-js/async-enumerable";

const scheduler = pipe(
  nodeScheduler,
  createPriorityScheduler,
  toSchedulerWithPriority(1),
);

const routerHandlerPrintParams: HttpRequestRouterHandler<
  HttpContent<BufferStreamLike>,
  HttpContent<BufferStreamLike>
> = req =>
  pipe(
    createHttpResponse(200, {
      content: createStringHttpContent(
        JSON.stringify(req.params),
        "text/plain",
      ),
    }),
    ofValue,
  );

const routerHandlerEventStream: HttpRequestRouterHandler<
  HttpContent<BufferStreamLike>,
  HttpContent<BufferStreamLike>
> = _ =>
  compute(() =>
    createHttpResponse(200, {
      cacheControl: [noCache()],
      content: {
        body: pipe(
          generateStream(
            acc => acc + 1,
            () => 0,
            1000,
          ),
          mapStream(
            data =>
              `id: ${data.toString()}\nevent: test\ndata: ${data.toString()}\n\n`,
          ),
          encode("utf-8"),
        ),
        contentLength: -1,
        contentEncodings: [],
        contentType: parseMediaTypeOrThrow(
          'text/event-stream; charset="utf-8"',
        ),
      },
    }),
  );

const routerHandlerFiles: HttpRequestRouterHandler<
  HttpContent<BufferStreamLike>,
  HttpContent<BufferStreamLike>
> = req => {
  const path = req.params["*"] || "";
  const contentType = parseMediaTypeOrThrow(
    mime.lookup(path) || "application/octet-stream",
  );

  return pipe(
    bindNodeCallback(fs.stat, (r: fs.Stats) => r)(path),
    map(next =>
      next.isFile() && !next.isDirectory()
        ? createHttpResponse(200, {
            content: createReadableHttpContent(
              () => fs.createReadStream(path),
              contentType,
            ),
          })
        : createHttpResponse(404, {
            content: createStringHttpContent(
              req.uri.toString(),
              'text/plain; charset="utf-8"',
            ),
          }),
    ),
  );
};

const routerHandlerThrow: HttpRequestRouterHandler<
  HttpContent<BufferStreamLike>,
  HttpContent<BufferStreamLike>
> = _ => throws(() => new Error("internal error"));

const notFound: Operator<
  HttpContentRequest<BufferStreamLike>,
  ObservableLike<HttpContentResponse<BufferStreamLike>>
> = req =>
  pipe(
    createHttpResponse(404, {
      content: createStringHttpContent(
        req.uri.toString(),
        'text/plain; charset="utf-8"',
      ),
    }),
    ofValue,
  );

const router = createRouter(
  {
    "/events": routerHandlerEventStream,
    "/files/*": routerHandlerFiles,
    "/users/:username/friends/:friendName": routerHandlerPrintParams,
    "/users/:username/friends/:friendName/*": routerHandlerPrintParams,
    "/throws": routerHandlerThrow,
  },
  notFound,
);

const listener = createHttpRequestListener(
  req =>
    pipe(
      ofValue(req),
      map(disallowProtocolAndHostForwarding()),
      map(decodeHttpRequest()),
      onNotify(console.log),
      await_(router),
      map(encodeHttpResponse(req)),
      // FIXME: Special case some exceptions like URILike parsing exceptions that are due to bad user input
      catchError((e: unknown) => {
        const content =
          process.env.NODE_ENV === "production"
            ? none
            : e instanceof Error && isSome(e.stack)
            ? createStringHttpContent(e.stack ?? "", "text/plain")
            : createStringHttpContent(String(e), "text/plain");

        return ofValue(
          createHttpResponse(HttpStatusCode.InternalServerError, {
            content,
          }),
        );
      }),
    ),
  scheduler,
);

createHttp1Server({}, listener).listen(8080);

// For instructions on generating local certs see:
// https://letsencrypt.org/docs/certificates-for-localhost/
createHttp2Server(
  {
    //allowHTTP1: true,
    key: fs.readFileSync("localhost.key"),
    cert: fs.readFileSync("localhost.crt"),
  },
  listener,
).listen(8081);

const httpClient = creatHttpClient();

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
    preferences: {
      acceptedCharsets: [],
      acceptedEncodings: [],
      acceptedLanguages: [],
      acceptedMediaRanges: [
        parseMediaTypeOrThrow("application/json"),
        parseMediaTypeOrThrow("text/html"),
      ],
    },
  }),
  httpClient.send.bind(httpClient),
  createDefaultHttpResponseHandler(httpClient, 10),
  onNotify(status => {
    console.log("status: " + status.type);
    if (status.type === HttpClientRequestStatusType.ResponseReady) {
      const { response } = status;
      response.dispose();
    }
  }),
  subscribe(scheduler),
);
