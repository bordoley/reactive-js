import fs from "fs";
import { createServer as createHttp1Server } from "http";
import { createSecureServer as createHttp2Server } from "http2";
import {
  pipe,
  Function1,
  returns,
  increment,
  defer,
  compose,
} from "@reactive-js/core/lib/functions";
import {
  encodeUtf8,
  fromObservable,
  map as mapFlowable,
  IOSourceLike,
} from "@reactive-js/core/lib/io";
import { readFileIOSource, bindNodeCallback } from "@reactive-js/core/lib/node";
import {
  map,
  fromValue,
  generate,
  ObservableLike,
  catchError,
  throws,
  await_,
} from "@reactive-js/core/lib/observable";
import { isSome } from "@reactive-js/core/lib/option";
import {
  createHostScheduler,
  toPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/core/lib/scheduler";
import {
  createHttpResponse,
  createHttpErrorResponse,
  decodeHttpRequestContent,
  HttpResponse,
  HttpStatusCode,
  HttpRequest,
  encodeHttpResponseWithUtf8,
  toIOSourceHttpResponse,
  encodeHttpResponseContent,
  disallowProtocolAndHostForwarding,
  HttpServer,
  createRoutingHttpServer,
  HttpRoutedRequest,
} from "@reactive-js/core/lib/experimental/http";
import {
  createHttpRequestListener,
  createContentEncodingDecompressTransforms,
  createContentEncodingCompressTransforms,
} from "@reactive-js/core/lib/experimental/node";

import db from "mime-db";
import mime from "mime-types";

const scheduler = pipe(
  createHostScheduler(),
  toPriorityScheduler,
  toSchedulerWithPriority(1),
);

const routerHandlerPrintParams: HttpServer<
  HttpRoutedRequest<IOSourceLike<Uint8Array>>,
  HttpResponse<IOSourceLike<Uint8Array>>
> = req =>
  pipe(
    createHttpResponse({
      statusCode: HttpStatusCode.OK,
      contentInfo: {
        contentType: "application/json",
      },
      body: JSON.stringify(req.params),
    }),
    encodeHttpResponseWithUtf8,
    toIOSourceHttpResponse,
    fromValue(),
  );

const routerHandlerEventStream: HttpServer<
  HttpRoutedRequest<IOSourceLike<Uint8Array>>,
  HttpResponse<IOSourceLike<Uint8Array>>
> = defer(
  createHttpResponse({
    statusCode: HttpStatusCode.OK,
    body: pipe(
      generate(increment, returns<number>(0), { delay: 1000 }),
      fromObservable(),
      mapFlowable(
        data =>
          `id: ${data.toString()}\nevent: test\ndata: ${data.toString()}\n\n`,
      ),
      encodeUtf8,
    ),
    cacheControl: ["no-cache"],
    contentInfo: {
      contentType: 'text/event-stream; charset="utf-8"',
    },
  }),
  fromValue(),
);

const routerHandlerFiles: HttpServer<
  HttpRoutedRequest<IOSourceLike<Uint8Array>>,
  HttpResponse<IOSourceLike<Uint8Array>>
> = req => {
  const path = req.params["path"] || "";
  const contentType = mime.lookup(path) || "application/octet-stream";

  return pipe(
    path,
    bindNodeCallback<fs.PathLike, fs.Stats>(fs.stat),
    map(next =>
      next.isFile() && !next.isDirectory()
        ? createHttpResponse({
            statusCode: HttpStatusCode.OK,
            body: readFileIOSource(path),
            contentInfo: {
              contentLength: next.size,
              contentType,
            },
          })
        : pipe(
            createHttpResponse({
              statusCode: HttpStatusCode.NotFound,
              contentInfo: {
                contentType: "text/plain",
              },
              body: JSON.stringify(req.params),
            }),
            encodeHttpResponseWithUtf8,
            toIOSourceHttpResponse,
          ),
    ),
  );
};

const routerHandlerThrow: HttpServer<
  HttpRoutedRequest<IOSourceLike<Uint8Array>>,
  HttpResponse<IOSourceLike<Uint8Array>>
> = defer(() => new Error("internal error"), throws());

const notFound: Function1<
  HttpRequest<IOSourceLike<Uint8Array>>,
  ObservableLike<HttpResponse<IOSourceLike<Uint8Array>>>
> = req =>
  pipe(
    createHttpResponse({
      statusCode: HttpStatusCode.NotFound,
      contentInfo: {
        contentType: "text/plain",
      },
      body: req.uri.toString(),
    }),
    encodeHttpResponseWithUtf8,
    toIOSourceHttpResponse,
    fromValue(),
  );

const router = createRoutingHttpServer(
  {
    "/events": routerHandlerEventStream,
    "/files/*path": routerHandlerFiles,
    "/users/:username/friends/:friendName": routerHandlerPrintParams,
    "/users/:username/friends/:friendName/*tail": routerHandlerPrintParams,
    "/throws": routerHandlerThrow,
  },
  notFound,
);

const listener = createHttpRequestListener(
  req =>
    pipe(
      req,
      disallowProtocolAndHostForwarding(),
      decodeHttpRequestContent(createContentEncodingDecompressTransforms()),
      fromValue(),
      await_(router),
      pipe(
        req,
        encodeHttpResponseContent(
          createContentEncodingCompressTransforms(),
          db,
        ),
        map,
      ),
      catchError(
        compose(
          createHttpErrorResponse,
          resp =>
            createHttpResponse({
              ...resp,
              contentInfo: {
                contentType: "text/plain",
              },
              body:
                process.env.NODE_ENV === "production"
                  ? ""
                  : resp.body instanceof Error && isSome(resp.body.stack)
                  ? resp.body.stack
                  : String(resp.body),
            }),
          encodeHttpResponseWithUtf8,
          toIOSourceHttpResponse,
          fromValue(),
        ),
      ),
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
