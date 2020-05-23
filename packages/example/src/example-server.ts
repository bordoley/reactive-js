import fs from "fs";
import { createServer as createHttp1Server } from "http";
import { createSecureServer as createHttp2Server } from "http2";
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
} from "@reactive-js/core/experimental/http";
import {
  createHttpRequestListener,
  createContentEncodingDecompressTransforms,
  createContentEncodingCompressTransforms,
} from "@reactive-js/core/experimental/node";
import { createRouter, find } from "@reactive-js/core/experimental/router";
import {
  pipe,
  returns,
  increment,
  compose,
} from "@reactive-js/core/functions";
import {
  encodeUtf8,
  fromObservable,
  map as mapFlowable,
  IOSourceLike,
  fromValue as ioSourceFromValue,
} from "@reactive-js/core/io";
import { readFileIOSource, bindNodeCallback } from "@reactive-js/core/node";
import {
  map,
  fromValue,
  generate,
  ObservableLike,
  catchError,
  throws,
  await_,
} from "@reactive-js/core/observable";
import { isSome } from "@reactive-js/core/option";
import {
  createHostScheduler,
  toPriorityScheduler,
  toSchedulerWithPriority,
} from "@reactive-js/core/scheduler";
import db from "mime-db";
import mime from "mime-types";
import { ReadonlyObjectMap } from "@reactive-js/core/readonlyObjectMap";

const scheduler = pipe(
  createHostScheduler(),
  toPriorityScheduler,
  toSchedulerWithPriority(1),
);

const PrintParams = (
  _: HttpRequest<IOSourceLike<Uint8Array>>,
  params: ReadonlyObjectMap<string>,
): ObservableLike<HttpResponse<IOSourceLike<Uint8Array>>> =>
  pipe(
    createHttpResponse({
      statusCode: HttpStatusCode.OK,
      contentInfo: {
        contentType: "application/json",
      },
      body: JSON.stringify(params),
    }),
    encodeHttpResponseWithUtf8,
    toIOSourceHttpResponse,
    fromValue(),
  );

const EventStream = (
  _req: HttpRequest<IOSourceLike<Uint8Array>>,
  _params: ReadonlyObjectMap<string>,
): ObservableLike<HttpResponse<IOSourceLike<Uint8Array>>> =>
  pipe(
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

const FileServer = (
  _req: HttpRequest<IOSourceLike<Uint8Array>>,
  params: ReadonlyObjectMap<string>,
): ObservableLike<HttpResponse<IOSourceLike<Uint8Array>>> => {
  const path = params["path"] || "";
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
        : createHttpResponse({
            statusCode: HttpStatusCode.NotFound,
            contentInfo: {
              contentType: "text/plain",
            },
            body: pipe(params, JSON.stringify, encodeUtf8, ioSourceFromValue),
          }),
    ),
  );
};

const Throws = (
  _req: HttpRequest<IOSourceLike<Uint8Array>>,
  _params: ReadonlyObjectMap<string>,
): ObservableLike<HttpResponse<IOSourceLike<Uint8Array>>> =>
  pipe(() => new Error("internal error"), throws());

const NotFound = (
  req: HttpRequest<IOSourceLike<Uint8Array>>,
  _params: ReadonlyObjectMap<string>,
): ObservableLike<HttpResponse<IOSourceLike<Uint8Array>>> =>
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

const router = createRouter({
  "/events": EventStream,
  "/files/*path": FileServer,
  "/users/:username/friends/:friendName": PrintParams,
  "/users/:username/friends/:friendName/*tail": PrintParams,
  "/throws": Throws,
});

const Router = (
  request: HttpRequest<IOSourceLike<Uint8Array>>,
): ObservableLike<HttpResponse<IOSourceLike<Uint8Array>>> => {
  const [handler, params] = find(router, request.uri.pathname) ?? [
    NotFound,
    {},
  ];
  return handler(request, params);
};

const listener = createHttpRequestListener(
  req =>
    pipe(
      req,
      disallowProtocolAndHostForwarding(),
      decodeHttpRequestContent(createContentEncodingDecompressTransforms()),
      fromValue(),
      await_(Router),
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
