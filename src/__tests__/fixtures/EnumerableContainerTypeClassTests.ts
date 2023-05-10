import { describe } from "../../__internal__/testing.js";
import { EnumerableContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";
import RunnableContainerTypeClassTests from "./RunnableContainerTypeClassTests.js";

const EnumerableContainerTypeClassTests = <C extends Container>(
  m: EnumerableContainerTypeClass<C>,
) =>
  describe(
    "EnumerableContainerTypeClass",
    ...RunnableContainerTypeClassTests(m).tests,
  );

export default EnumerableContainerTypeClassTests;
