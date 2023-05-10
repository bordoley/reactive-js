import { describe } from "../../__internal__/testing.js";
import { AssociativeKeyedContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";
import KeyedContainerTypeClassTests from "./KeyedContainerTypeClassTests.js";

const AssociativeKeyedContainerTypeClassTests = <C extends Container>(
  m: AssociativeKeyedContainerTypeClass<C>,
) =>
  describe(
    "AssociativeKeyedContainerTypeClassTests",
    ...KeyedContainerTypeClassTests(m).tests,
  );

export default AssociativeKeyedContainerTypeClassTests;
