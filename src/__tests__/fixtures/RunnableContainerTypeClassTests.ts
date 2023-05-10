import { describe } from "../../__internal__/testing.js";
import { RunnableContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";
import DeferredContainerTypeClassTests from "./DeferredContainerTypeClassTests.js";

const RunnableContainerTypeClassTests = <C extends Container>(
  m: RunnableContainerTypeClass<C>,
) =>
  describe(
    "RunnableContainerTypeClass",
    ...DeferredContainerTypeClassTests(m).tests,
  );

export default RunnableContainerTypeClassTests;
