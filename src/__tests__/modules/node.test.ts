import { Readable, Writable } from "stream";
import { endWith, ignoreElements } from "../../containers/Container";
import { toObservable } from "../../containers/ReadonlyArray";
import { newInstance, pipe, returns } from "../../functions";
import {
  createReadableSource,
  createWritableSink,
  gunzip,
  gzip,
} from "../../integrations/node";
import { ObservableLike } from "../../rx";
import {
  concat,
  fromArray,
  keep,
  reduce,
  takeFirst,
  toFlowable,
  toPromise,
} from "../../rx/Observable";
import { createHostScheduler } from "../../scheduling/Scheduler";
import { FlowMode } from "../../streaming";
import { toObservable as flowableToObservable } from "../../streaming/Flowable";
import { sourceFrom } from "../../streaming/Stream";
import { stream } from "../../streaming/Streamable";
import { dispose } from "../../util/Disposable";
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
      const scheduler = createHostScheduler();

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
          toObservable(),
          toFlowable(),
        );

        const dest = pipe(
          createWritableSink(returns(writable)),
          stream(scheduler),
          sourceFrom(src),
        );

        await pipe(
          dest,
          endWith<ObservableLike, FlowMode>(
            {
              fromArray,
              concat,
            },
            "pause",
          ),
          toPromise(scheduler),
        );

        pipe(writable.destroyed, expectEquals(true));
        pipe(data, expectEquals("abcdefg"));
      } finally {
        pipe(scheduler, dispose());
      }
    }),

    testAsync("sinking to writable that throws", async () => {
      const scheduler = createHostScheduler();

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
          toObservable(),
          toFlowable(),
        );

        const dest = pipe(
          createWritableSink(returns(writable)),
          stream(scheduler),
          sourceFrom(src),
        );

        const promise = pipe(
          dest,
          ignoreElements({ keep }),
          endWith<ObservableLike, number>(
            {
              fromArray,
              concat,
            },
            0,
          ),
          toPromise(scheduler),
        );
        await expectPromiseToThrow(promise);
        pipe(writable.destroyed, expectEquals(true));
      } finally {
        pipe(scheduler, dispose());
      }
    }),
  ),

  describe(
    "createReadableIOSource",
    testAsync("reading from readable", async () => {
      const scheduler = createHostScheduler();

      try {
        function* generate() {
          yield Buffer.from("abc", "utf8");
          yield Buffer.from("defg", "utf8");
        }

        const textDecoder = newInstance(TextDecoder);

        const acc = await pipe(
          createReadableSource(() => pipe(generate(), Readable.from)),
          flowableToObservable(),
          reduce<Uint8Array, string>(
            (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
            returns(""),
          ),
          takeFirst<string>({ count: 1 }),
          toPromise(scheduler),
        );
        pipe(acc, expectEquals("abcdefg"));
      } finally {
        pipe(scheduler, dispose());
      }
    }),
    testAsync("reading from readable that throws", async () => {
      const scheduler = createHostScheduler();

      try {
        const err = newInstance(Error);

        function* generate() {
          yield Buffer.from("abc", "utf8");
          throw err;
        }

        const textDecoder = newInstance(TextDecoder);
        await pipe(
          createReadableSource(() => pipe(generate(), Readable.from)),
          flowableToObservable(),
          reduce<Uint8Array, string>(
            (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
            returns(""),
          ),
          endWith<ObservableLike, string>(
            {
              fromArray,
              concat,
            },
            "",
          ),
          toPromise(scheduler),
          expectPromiseToThrow,
        );
      } finally {
        pipe(scheduler, dispose());
      }
    }),
  ),
  testAsync("transform", async () => {
    const scheduler = createHostScheduler();

    try {
      const encoder = newInstance(TextEncoder);
      const textDecoder = newInstance(TextDecoder);

      const acc = await pipe(
        [encoder.encode("abc"), encoder.encode("defg")],
        toObservable(),
        toFlowable(),
        gzip(),
        gunzip(),
        flowableToObservable(),
        reduce<Uint8Array, string>(
          (acc: string, next: Uint8Array) => acc + textDecoder.decode(next),
          returns(""),
        ),
        takeFirst<string>({ count: 1 }),
        toPromise(scheduler),
      );

      pipe(acc, expectEquals("abcdefg"));
    } finally {
      pipe(scheduler, dispose());
    }
  }),
);
