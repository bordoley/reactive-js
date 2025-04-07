import {
  describe,
  expectEquals,
  expectFalse,
  expectIsNone,
  expectIsSome,
  expectTrue,
  test,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import { invoke, newInstance, pipe, raise } from "../../functions.js";
import {
  AsyncEnumeratorLike_moveNext,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SyncEnumeratorLike_moveNext,
} from "../../utils.js";
import * as Iterator from "../__internal__/Iterator.js";

testModule(
  "Iterator",
  describe(
    "toAsyncEnumerator",
    testAsync("enumerating an array", async () => {
      const enumerator = pipe(
        [0, 1, 2],
        invoke(Symbol.iterator),
        Iterator.toAsyncEnumerator<number>(),
      );

      for (let i = 0; i < 3; i++) {
        await enumerator[AsyncEnumeratorLike_moveNext]();
        expectTrue("the enumerator should have a value")(
          enumerator[EnumeratorLike_hasCurrent],
        );
        expectEquals(i)(enumerator[EnumeratorLike_current]);
      }
    }),
    testAsync("disposes the enumerator when nothing is left", async () => {
      const enumerator = pipe(
        [1, 2, 3],
        invoke(Symbol.iterator),
        Iterator.toAsyncEnumerator<number>(),
      );

      while (await enumerator[AsyncEnumeratorLike_moveNext]()) {}

      expectTrue("The enumerator is disposed")(
        enumerator[DisposableLike_isDisposed],
      );
      expectFalse("The enumerator does not have current")(
        enumerator[EnumeratorLike_hasCurrent],
      );
    }),
    testAsync("when the iterator throws an exception", async () => {
      const enumerator = pipe(
        (function* () {
          raise(newInstance(Error));
        })(),
        Iterator.toAsyncEnumerator(),
      );

      await enumerator[AsyncEnumeratorLike_moveNext]();

      expectTrue("The enumerator is disposed")(
        enumerator[DisposableLike_isDisposed],
      );
      expectIsSome(enumerator[DisposableLike_error]);
    }),
    testAsync("ignore errors thrown by iterator.error", async () => {
      const enumerator = pipe(
        (function* () {
          raise(newInstance(Error));
        })(),
        Iterator.toAsyncEnumerator(),
      );

      await enumerator[AsyncEnumeratorLike_moveNext]();

      expectTrue("The enumerator is disposed")(
        enumerator[DisposableLike_isDisposed],
      );
      expectIsSome(enumerator[DisposableLike_error]);
    }),
    testAsync(
      "ignore errors thrown by iterator.error during dispose",
      async () => {
        const enumerator = pipe(
          (function* () {
            try {
              return;
            } catch (_) {
              raise(newInstance(Error));
            }
          })(),
          Iterator.toAsyncEnumerator(),
        );

        await enumerator[AsyncEnumeratorLike_moveNext]();

        expectTrue("The enumerator is disposed")(
          enumerator[DisposableLike_isDisposed],
        );
        expectIsNone(enumerator[DisposableLike_error]);
      },
    ),
    testAsync(
      "ignore errors thrown by iterator.return during dispose",
      async () => {
        const enumerator = pipe(
          (function* () {
            try {
              return;
            } finally {
              raise(newInstance(Error));
            }
          })(),
          Iterator.toAsyncEnumerator(),
        );

        enumerator[DisposableLike_dispose]();

        expectTrue("The enumerator is disposed")(
          enumerator[DisposableLike_isDisposed],
        );
        expectIsNone(enumerator[DisposableLike_error]);
      },
    ),
  ),
  describe(
    "toEnumerator",
    test("enumerating an array", () => {
      const enumerator = pipe(
        [0, 1, 2],
        invoke(Symbol.iterator),
        Iterator.toSyncEnumerator<number>(),
      );

      for (let i = 0; i < 3; i++) {
        expectTrue("the enumerator should have a value")(
          enumerator[SyncEnumeratorLike_moveNext](),
        );
        expectEquals(i)(enumerator[EnumeratorLike_current]);
      }
    }),
    test("disposes the enumerator when nothing is left", () => {
      const enumerator = pipe(
        [1, 2, 3],
        invoke(Symbol.iterator),
        Iterator.toSyncEnumerator<number>(),
      );

      while (enumerator[SyncEnumeratorLike_moveNext]()) {}

      expectTrue("The enumerator is disposed")(
        enumerator[DisposableLike_isDisposed],
      );
      expectFalse("The enumerator does not have current")(
        enumerator[EnumeratorLike_hasCurrent],
      );
    }),
    test("when the iterator throws an exception", () => {
      const enumerator = pipe(
        (function* () {
          raise(newInstance(Error));
        })(),
        Iterator.toSyncEnumerator(),
      );

      enumerator[SyncEnumeratorLike_moveNext]();

      expectTrue("The enumerator is disposed")(
        enumerator[DisposableLike_isDisposed],
      );
      expectIsSome(enumerator[DisposableLike_error]);
    }),
    test("ignore errors thrown by iterator.error", () => {
      const enumerator = pipe(
        (function* () {
          raise(newInstance(Error));
        })(),
        Iterator.toSyncEnumerator(),
      );

      enumerator[SyncEnumeratorLike_moveNext]();

      expectTrue("The enumerator is disposed")(
        enumerator[DisposableLike_isDisposed],
      );
      expectIsSome(enumerator[DisposableLike_error]);
    }),
    test("ignore errors thrown by iterator.error during dispose", () => {
      const enumerator = pipe(
        (function* () {
          try {
            return;
          } catch (_) {
            raise(newInstance(Error));
          }
        })(),
        Iterator.toSyncEnumerator(),
      );

      enumerator[SyncEnumeratorLike_moveNext]();

      expectTrue("The enumerator is disposed")(
        enumerator[DisposableLike_isDisposed],
      );
      expectIsNone(enumerator[DisposableLike_error]);
    }),
    test("ignore errors thrown by iterator.return during dispose", () => {
      const enumerator = pipe(
        (function* () {
          try {
            return;
          } finally {
            raise(newInstance(Error));
          }
        })(),
        Iterator.toSyncEnumerator(),
      );

      enumerator[DisposableLike_dispose]();

      expectTrue("The enumerator is disposed")(
        enumerator[DisposableLike_isDisposed],
      );
      expectIsNone(enumerator[DisposableLike_error]);
    }),
  ),
)();
