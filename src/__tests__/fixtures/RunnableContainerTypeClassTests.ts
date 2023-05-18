import {
  describe,
  expectArrayEquals,
  test,
} from "../../__internal__/testing.js";
import { pipeLazy } from "../../functions.js";
import { Container, RunnableContainerTypeClass } from "../../types.js";
import EnumeratorContainerTypeClassTests from "./EnumeratorContainerTypeClassTests.js";

const RunnableContainerTypeClassTests = <C extends Container>(
  m: RunnableContainerTypeClass<C>,
) =>
  describe(
    "RunnableContainerTypeClass",
    ...EnumeratorContainerTypeClassTests(m).tests,
    describe(
      "repeat",
      test(
        "when repeating a finite amount of times.",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.repeat(3),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
        ),
      ),
    ),
  );

export default RunnableContainerTypeClassTests;
