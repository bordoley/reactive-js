import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import Containers_test from "../../containers/__tests__/Containers.test.js";
import { pipe, returns } from "../../functions.js";
import { EnumerableLike } from "../../rx.js";
import * as Enumerable from "../Enumerable.js";

testModule(
  "Enumerable",
  Containers_test<EnumerableLike>(Enumerable),
  describe(
    "enumerate",
    test("with higher order observable and no delay", () => {
      pipe(
        Enumerable.generate(
          _ => pipe(1, Enumerable.fromOptional()),
          returns(Enumerable.empty()),
        ),
        Enumerable.concatAll(),
        Enumerable.takeFirst({ count: 10 }),
        Enumerable.toReadonlyArray<number>(),
        expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      );
    }),
  ),
);
