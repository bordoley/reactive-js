import { Readable } from "node:stream";
import {
  describe,
  expectEquals,
  expectPromiseToThrow,
  expectTrue,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as Iterable from "../../computations/Iterable.js";
import * as Observable from "../../computations/Observable.js";
import { ProducerLike_consume } from "../../computations.js";
import {
  Optional,
  invoke,
  newInstance,
  pipe,
  pipeAsync,
  returns,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Queue from "../../utils/Queue.js";
import {
  DisposableLike_isDisposed,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../utils.js";
import * as NodeReadable from "../NodeReadable.js";

testModule(
  "NodeReadable",
  describe(
    "toEventSource",
    testAsync("reading from readable", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      using scheduler = HostScheduler.create();

      const readable = Readable.from(generate(), {
        autoDestroy: false,
      });

      const src = pipe(
        readable,
        NodeReadable.toEventSource,
        Disposable.addTo(scheduler),
      );

      src[PauseableLike_resume]();
      src[PauseableLike_pause]();
      src[PauseableLike_resume]();

      await pipeAsync(
        src,
        Observable.fromEventSource(),
        Observable.decodeWithCharset(),
        Observable.scan((acc: string, next: string) => acc + next, returns("")),
        Observable.lastAsync<string>({ scheduler }),
        expectEquals<Optional<string>>("abcdefg"),
      );

      pipe(readable.destroyed, expectTrue("expected readable to be destroyed"));
    }),
    testAsync("reading from readable factory", async () => {
      function* generate() {
        yield Buffer.from("abc", "utf8");
        yield Buffer.from("defg", "utf8");
      }

      using scheduler = HostScheduler.create();

      const src = pipe(
        Readable.from(generate()),
        NodeReadable.toEventSource,
        Disposable.addTo(scheduler),
      );

      const queue = Queue.createDropOldestWithoutBackpressure<string>(1, {
        autoDispose: true,
      });
      pipe(
        src,
        Observable.fromEventSource(),
        Observable.decodeWithCharset(),
        Observable.scan((acc: string, next: string) => acc + next, returns("")),
        Observable.toProducer(scheduler),
        invoke(ProducerLike_consume, queue),
      );
      src[PauseableLike_resume]();

      await DisposableContainer.toPromise(queue);

      pipe(queue, Iterable.first(), expectEquals<Optional<string>>("abcdefg"));
      pipe(
        src[DisposableLike_isDisposed],
        expectTrue("expected flowed to be disposed"),
      );
    }),
    testAsync("reading from readable that throws", async () => {
      const err = newInstance(Error);

      function* generate() {
        yield Buffer.from("abc", "utf8");
        throw err;
      }

      using scheduler = HostScheduler.create();

      const src = pipe(
        generate(),
        Readable.from,
        NodeReadable.toEventSource,
        Disposable.addTo(scheduler),
      );

      src[PauseableLike_resume]();

      await pipe(
        src,
        Observable.fromEventSource(),
        Observable.lastAsync({ scheduler }),
        expectPromiseToThrow,
      );
    }),
  ),
);
