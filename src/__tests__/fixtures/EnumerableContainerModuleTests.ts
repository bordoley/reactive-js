import * as Observable from "../../Observable.js";
import * as Runnable from "../../Runnable.js";
import {
  describe,
  expectArrayEquals,
  expectFalse,
  expectIsNone,
  expectTrue,
  test,
} from "../../__internal__/testing.js";
import { identity, pipe, pipeLazy, returns } from "../../functions.js";
import {
  Container,
  ContainerOf,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EnumerableContainerModule,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";
import RunnableContainerModuleTests from "./RunnableContainerModuleTests.js";

const EnumerableContainerModuleTests = <C extends Container>(
  m: EnumerableContainerModule<C>,
) => [
  ...RunnableContainerModuleTests(m),
  describe(
    "EnumerableContainerModule",

    describe(
      "empty",
      test("returns an empty enumerator", () => {
        const enumerator = pipe(m.empty(), m.enumerate());

        expectFalse(enumerator[EnumeratorLike_move]());
        expectTrue(enumerator[DisposableLike_isDisposed]);
      }),
    ),
    describe(
      "enumerate",
      test(
        "with higher order observable and no delay",
        pipeLazy(
          Observable.generate<ContainerOf<C, number>>(
            _ => pipe(1, m.fromValue()),
            returns(m.empty<number>()),
          ),
          Observable.takeFirst({ count: 100 }),
          m.fromEnumerable<ContainerOf<C, number>>(),
          m.concatAll(),
          m.takeFirst({ count: 10 }),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
        ),
      ),
      test("calling move on a completed Enumerator", () => {
        const enumerator = pipe([1, 2, 3], m.fromIterable(), m.enumerate());

        while (enumerator[EnumeratorLike_move]()) {}

        expectFalse(enumerator[EnumeratorLike_hasCurrent]);
        expectTrue(enumerator[DisposableLike_isDisposed]);
        expectIsNone(enumerator[DisposableLike_error]);

        expectFalse(enumerator[EnumeratorLike_move]());
      }),
    ),
    describe(
      "toIterable",
      test("when the source completes without error", () => {
        const iter = pipe([0, 1, 2], m.fromReadonlyArray(), m.toIterable());

        pipe(Array.from(iter), expectArrayEquals([0, 1, 2]));
      }),
    ),
    describe(
      "toObservable",
      test("with delay", () => {
        const obs = pipe(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.toObservable({ delay: 1 }),
        );

        expectTrue(obs[ObservableLike_isDeferred]);
        expectTrue(obs[ObservableLike_isRunnable]);
        expectFalse(obs[ObservableLike_isEnumerable]);

        pipe(
          obs,
          Observable.withCurrentTime(identity),
          Runnable.toReadonlyArray(),
          expectArrayEquals([0, 1, 2]),
        );
      }),
    ),
  ),
];

export default EnumerableContainerModuleTests;
