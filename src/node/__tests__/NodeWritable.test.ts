import { Writable, pipeline } from "node:stream";
import zlib from "node:zlib";
import {
  describe,
  expectEquals,
  expectFalse,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as Producer from "../../computations/Producer.js";
import { SourceLike_subscribe } from "../../computations.js";
import { bindMethod, invoke, newInstance, pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as NodeWritable from "../NodeWritable.js";

testModule(
  "NodeWritable",
  describe(
    "toConsumer",
    testAsync("writing to writable", async () => {
      let data = "";

      const writable = newInstance(Writable, {
        autoDestroy: false,
        highWaterMark: 4,

        write(chunk, _encoding, callback) {
          data += chunk;
          callback();
        },
      });

      const consumer = pipe(
        writable,
        NodeWritable.toConsumer({ autoDispose: true }),
      );

      pipe(
        bindMethod(["abc", "defg"], Symbol.iterator),
        Producer.gen,
        Producer.encodeUtf8(),
        invoke(SourceLike_subscribe, consumer),
      );

      await DisposableContainer.toPromise(consumer);

      pipe(
        writable.destroyed,
        expectFalse("expected writable not to be destroyed"),
      );
      pipe(data, expectEquals("abcdefg"));
      writable.destroy();
    }),
    testAsync("writing to writable that throws", async () => {
      const err = newInstance(Error);
      const writable = newInstance(Writable, {
        autoDestroy: true,
        highWaterMark: 4,

        write(_chunk, _encoding, callback) {
          callback(err);
        },
      });

      const consumer = pipe(
        writable,
        NodeWritable.toConsumer({ autoDispose: true }),
      );

      pipe(
        bindMethod(["abc", "defg"], Symbol.iterator),
        Producer.gen,
        Producer.encodeUtf8(),
        invoke(SourceLike_subscribe, consumer),
      );

      await pipe(consumer, DisposableContainer.toPromise, expectPromiseToThrow);

      pipe(writable.destroyed, expectEquals(true));
    }),
    testAsync("writing to writable with pipeline", async () => {
      using scheduler = HostScheduler.create();
      let data = "";
      const writable = newInstance(Writable, {
        autoDestroy: true,
        highWaterMark: 4,

        write(chunk, _encoding, callback) {
          data += chunk;
          callback();
        },
      });

      const compressionPipeline = pipeline(
        zlib.createGzip(),
        zlib.createGunzip(),
        writable,
        Disposable.toErrorHandler(scheduler),
      );

      const consumer = pipe(
        compressionPipeline,
        NodeWritable.toConsumer({ autoDispose: true }),
      );

      pipe(
        bindMethod(["abc", "defg"], Symbol.iterator),
        Producer.gen,
        Producer.encodeUtf8(),
        invoke(SourceLike_subscribe, consumer),
      );

      await DisposableContainer.toPromise(consumer);

      pipe(writable.destroyed, expectEquals(true));
      pipe(data, expectEquals("abcdefg"));
    }),
  ),
);
