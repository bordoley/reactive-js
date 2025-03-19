import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectIsNone,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Publisher from "../../computations/Publisher.js";
import { SourceLike_subscribe } from "../../computations.js";
import {
  Optional,
  bindMethod,
  ignore,
  newInstance,
  none,
  pipe,
  raiseError,
} from "../../functions.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  ListenerLike_notify,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";

testModule(
  "Publisher",
  describe(
    "create",
    test("when disposed with an error", () => {
      const e = newInstance(Error);
      const publisher = Publisher.create();

      pipe(publisher[DisposableLike_error], expectIsNone);
      publisher[DisposableLike_dispose](e);
      pipe(publisher[DisposableLike_error], expectEquals<Optional<Error>>(e));
    }),
    test("auto disposing", () => {
      const publisher = Publisher.create({ autoDispose: true });
      const subscription = pipe(publisher, Broadcaster.addEventHandler(ignore));

      pipe(subscription[DisposableLike_isDisposed], expectFalse());
      pipe(publisher[DisposableLike_isDisposed], expectFalse());

      subscription[DisposableLike_dispose]();

      pipe(subscription[DisposableLike_isDisposed], expectTrue());
      pipe(publisher[DisposableLike_isDisposed], expectTrue());
    }),
    test("when a sink throws an exception", () => {
      const e = newInstance(Error);
      const publisher = Publisher.create({ autoDispose: true });
      const subscription = pipe(
        publisher,
        Broadcaster.addEventHandler(_ => {
          raiseError(e);
        }),
      );
      publisher[ListenerLike_notify](none);

      pipe(
        subscription[DisposableLike_error],
        expectEquals<Optional<Error>>(e),
      );
    }),
    test("notifying after the publisher is disposed", () => {
      const publisher = Publisher.create<number>({ autoDispose: true });

      const result: number[] = [];
      pipe(
        publisher,
        Broadcaster.addEventHandler(v => {
          result.push(v);
        }),
      );
      publisher[ListenerLike_notify](1);
      publisher[ListenerLike_notify](2);
      publisher[DisposableLike_dispose]();
      publisher[ListenerLike_notify](3);

      pipe(result, expectArrayEquals([1, 2]));
    }),
    test("add the same publisher as a sink multiple times", () => {
      const publisher = Publisher.create<number>({ autoDispose: true });
      const sink = Publisher.create<number>({ autoDispose: true });

      publisher[SourceLike_subscribe](sink);
      publisher[SourceLike_subscribe](sink);

      sink[DisposableLike_dispose]();

      pipe(publisher[DisposableLike_isDisposed], expectTrue());
    }),
    test("with autoDispose", () => {
      using vts = VirtualTimeScheduler.create();

      const publisher = Publisher.create<number>({
        autoDispose: true,
      });
      for (const v of [1, 2, 3, 4]) {
        publisher[ListenerLike_notify](v);
      }

      const result: number[] = [];
      const subscription = pipe(
        publisher,
        Broadcaster.addEventHandler(bindMethod(result, Array_push)),
      );

      vts[SchedulerLike_schedule](() => {
        pipe(result, expectArrayEquals([3, 4]));
        pipe(publisher[DisposableLike_isDisposed], expectFalse());
        subscription[DisposableLike_dispose]();
        pipe(publisher[DisposableLike_isDisposed], expectTrue());
      });

      vts[VirtualTimeSchedulerLike_run]();
    }),
    test("subscribing to a publisher disposed with an error", () => {
      const publisher = Publisher.create<number>();

      const e = new Error();
      publisher[DisposableLike_dispose](e);
      const subscription = pipe(publisher, Broadcaster.addEventHandler(ignore));

      pipe(
        subscription[DisposableLike_error],
        expectEquals<Optional<Error>>(e),
      );
    }),
  ),
);
