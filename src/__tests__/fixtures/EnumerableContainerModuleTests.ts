import * as Observable from "../../Observable.js";
import {
  describe,
  expectArrayEquals,
  test,
} from "../../__internal__/testing.js";
import { pipe, returns } from "../../functions.js";
import {
  Container,
  ContainerOf,
  EnumerableContainerModule,
} from "../../types.js";
import RunnableContainerModuleTests from "./RunnableContainerModuleTests.js";

const EnumerableContainerModuleTests = <C extends Container>(
  m: EnumerableContainerModule<C>,
) => [
  ...RunnableContainerModuleTests(m),
  describe(
    "EnumerableContainerModule",

    describe(
      "enumerate",
      test("with higher order observable and no delay", () => {
        pipe(
          Observable.generate(
            _ => pipe(1, m.fromValue()),
            returns(m.empty<number>()),
          ),
          Observable.takeFirst({ count: 100 }),
          m.fromEnumerable<ContainerOf<C, number>>(),
          m.concatAll(),
          m.takeFirst({ count: 10 }),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
        );
      }),
    ),
    describe(
      "toIterable",
      test("when the source completes without error", () => {
        const iter = pipe([0, 1, 2], m.fromReadonlyArray(), m.toIterable());

        pipe(Array.from(iter), expectArrayEquals([0, 1, 2]));
      }),
    ),
  ),
];

export default EnumerableContainerModuleTests;
