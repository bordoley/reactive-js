import * as MulticastObservable from "../MulticastObservable.js";
import * as Observable from "../Observable.js";
import {
  __bindMethod,
  __do,
  __observe,
  __stream,
} from "../Observable/effects.js";
import * as Scheduler from "../Scheduler.js";
import * as Streamable from "../Streamable.js";
import {
  describe,
  expectArrayEquals,
  testAsync,
  testModule,
} from "../__internal__/testing.js";
import { pipe } from "../functions.js";
import { QueueableLike_enqueue } from "../types.js";
import HigherOrderObservableModuleTests from "./fixtures/HigherOrderObservableModuleTests.js";

testModule(
  "MulticastObservable",
  HigherOrderObservableModuleTests<MulticastObservable.Type>(
    MulticastObservable,
    () => Observable.share(Scheduler.createHostScheduler),
  ),

  describe(
    "compute",
    testAsync("__stream", async () => {
      const result = await pipe(
        MulticastObservable.compute(() => {
          const stream = __stream(Streamable.identity<number>());
          const push = __bindMethod(stream, QueueableLike_enqueue);

          const result = __observe(stream) ?? 0;
          __do(push, result + 1);

          return result;
        }),
        Observable.takeFirst({ count: 10 }),
        Observable.buffer(),
        Observable.lastAsync<readonly number[]>(),
      );

      pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }),
  ),
);

((_: MulticastObservable.Signature) => {})(MulticastObservable);
