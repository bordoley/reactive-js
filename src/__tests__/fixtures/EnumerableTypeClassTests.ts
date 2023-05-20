import * as Observable from "../../Observable.js";
import {
  describe,
  expectArrayEquals,
  test,
} from "../../__internal__/testing.js";
import { pipe, returns } from "../../functions.js";
import { Container, ContainerOf, EnumerableTypeClass } from "../../types.js";
import RunnableTypeClassTests from "./RunnableTypeClassTests.js";

const EnumerableTypeClassTests = <C extends Container>(
  m: EnumerableTypeClass<C>,
) =>
  describe(
    "EnumerableTypeClass",
    ...RunnableTypeClassTests(m),
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
  );

export default EnumerableTypeClassTests;
