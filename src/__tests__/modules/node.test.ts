import { Readable, Writable } from "stream";
import Container from "../../containers/Container";
import ReadonlyArray from "../../containers/ReadonlyArray";
import { newInstance, pipe, returns } from "../../functions";
import {
  createReadableSource,
  createWritableSink,
  gunzip,
  gzip,
} from "../../integrations/node";
import { ObservableLike } from "../../rx";
import Observable from "../../rx/Observable";
import RunnableObservable from "../../rx/RunnableObservable";
import Scheduler from "../../scheduling/Scheduler";
import { FlowMode, FlowMode_pause } from "../../streaming";
import Flowable from "../../streaming/Flowable";
import Stream from "../../streaming/Stream";
import Streamable from "../../streaming/Streamable";
import Disposable from "../../util/Disposable";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  testAsync,
  testModule,
} from "../testing";

testModule(
  "node",
  describe(
    "createWritableIOSink",
    testAsync("sinking to writable", async () => {
      const scheduler = Scheduler.createHostScheduler();

      try {
        const encoder = newInstance(TextEncoder);
        let data = "";
        const writable = newInstance(Writable, {
          autoDestroy: true,
          highWaterMark: 4,

          write(chunk, _encoding, callback) {
            data += chunk;
            callback();
          },
        });

        const src = pipe(
          [encoder.encode("abc"), encoder.encode("defg")],
          ReadonlyArray.toRunnableObservable(),
          RunnableObservable.toFlowable(),
        );

        const dest = pipe(
          createWritableSink(returns(writable)),
          Streamable.stream(scheduler),
          Stream.sourceFrom(src),
        );

        await pipe(
          dest,
          Container.endWith<ObservableLike, FlowMode>(
            RunnableObservable,
            FlowMode_pause,
          ),
          Observable.toPromise(scheduler),
        );

        pipe(writable.destroyed, expectEquals(true));
        pipe(data, expectEquals("abcdefg"));
      } finally {
        pipe(scheduler, Disposable.dispose());
      }
    }),

    testAsync("sinking to writable that throws", async () => {
      const scheduler = Scheduler.createHostScheduler();

      try {
        const encoder = newInstance(TextEncoder);

        const err = newInstance(Error);
        const writable = newInstance(Writable, {
          autoDestroy: true,
          highWaterMark: 4,

          write(_chunk, _encoding, callback) {
            callback(err);
          },
        });

        const src = pipe(
          [encoder.encode("abc"), encoder.encode("defg")],
          ReadonlyArray.toRunnableObservable(),
          RunnableObservable.toFlowable(),
        );

        const dest = pipe(
          createWritableSink(returns(writable)),
          Streamable.stream(scheduler),
          Stream.sourceFrom(src),
        );

        const promise = pipe(
          dest,
          Container.ignoreElements(Observable),
          Container.endWith<ObservableLike, number>(Observable, 0),
          Observable.toPromise(scheduler),
        );
        await expectPromiseToThrow(promise);
        pipe(writable.destroyed, expectEquals(true));
      } finally {
        pipe(scheduler, Disposable.dispose());
      }
    }),
  ),

  describe(
    "createReadableIOSource",
    testAsync("reading from readable", async () => {
      const scheduler = Scheduler.createHostScheduler();

      try {
        function* generate() {
          yield Buffer.from("abc", "utf8");
          yield Buffer.from("defg", "utf8");
        }

        const textDecoder = newInstance(TextDecoder);

        const acc = await pipe(
          createReadableSource(() => pipe(generate(), Readable.from)),
          Flowable.toObservable(),
          Observable.reduce<Uint8Array, string>(
            (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
            returns(""),
          ),
          Observable.takeFirst<string>({ count: 1 }),
          Observable.toPromise(scheduler),
        );
        pipe(acc, expectEquals("abcdefg"));
      } finally {
        pipe(scheduler, Disposable.dispose());
      }
    }),
    testAsync("reading from readable that throws", async () => {
      const scheduler = Scheduler.createHostScheduler();

      try {
        const err = newInstance(Error);

        function* generate() {
          yield Buffer.from("abc", "utf8");
          throw err;
        }

        const textDecoder = newInstance(TextDecoder);
        await pipe(
          createReadableSource(() => pipe(generate(), Readable.from)),
          Flowable.toObservable(),
          Observable.reduce<Uint8Array, string>(
            (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
            returns(""),
          ),
          Container.endWith<ObservableLike, string>(Observable, ""),
          Observable.toPromise(scheduler),
          expectPromiseToThrow,
        );
      } finally {
        pipe(scheduler, Disposable.dispose());
      }
    }),
  ),
  testAsync("transform", async () => {
    const scheduler = Scheduler.createHostScheduler();

    try {
      const encoder = newInstance(TextEncoder);
      const textDecoder = newInstance(TextDecoder);

      const acc = await pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        ReadonlyArray.toRunnableObservable(),
        RunnableObservable.toFlowable(),
        gzip(),
        gunzip(),
        Flowable.toObservable(),
        Observable.reduce<Uint8Array, string>(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
        ),
        Observable.takeFirst<string>({ count: 1 }),
        Observable.toPromise(scheduler),
      );

      pipe(acc, expectEquals("abcdefg"));
    } finally {
      pipe(scheduler, Disposable.dispose());
    }
  }),
);
