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
import {
  EventListenerLike_notify,
  EventSourceLike_addEventListener,
} from "../../computations.js";
import {
  Optional,
  ignore,
  newInstance,
  none,
  pipe,
  raiseError,
} from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../utils.js";
import * as EventSource from "../EventSource.js";

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
      const subscription = pipe(publisher, EventSource.addEventHandler(ignore));

      pipe(subscription[DisposableLike_isDisposed], expectFalse());
      pipe(publisher[DisposableLike_isDisposed], expectFalse());

      subscription[DisposableLike_dispose]();

      pipe(subscription[DisposableLike_isDisposed], expectTrue());
      pipe(publisher[DisposableLike_isDisposed], expectTrue());
    }),
    test("when a listener throws an exception", () => {
      const e = newInstance(Error);
      const publisher = Publisher.create({ autoDispose: true });
      const subscription = pipe(
        publisher,
        EventSource.addEventHandler(_ => {
          raiseError(e);
        }),
      );
      publisher[EventListenerLike_notify](none);

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
        EventSource.addEventHandler(v => {
          result.push(v);
        }),
      );
      publisher[EventListenerLike_notify](1);
      publisher[EventListenerLike_notify](2);
      publisher[DisposableLike_dispose]();
      publisher[EventListenerLike_notify](3);

      pipe(result, expectArrayEquals([1, 2]));
    }),
  ),
  test("add the same publisher as a listener multiple times", () => {
    const publisher = Publisher.create<number>({ autoDispose: true });
    const listener = Publisher.create<number>({ autoDispose: true });

    publisher[EventSourceLike_addEventListener](listener);
    publisher[EventSourceLike_addEventListener](listener);

    listener[DisposableLike_dispose]();

    pipe(publisher[DisposableLike_isDisposed], expectTrue());
  }),
);
