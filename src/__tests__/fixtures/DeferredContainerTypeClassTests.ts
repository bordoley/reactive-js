import { describe } from "../../__internal__/testing.js";
import { DeferredContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";
import ContainerTypeClassTests from "./ContainerTypeClassTests.js";

const DeferredContainerTypeClassTests = <C extends Container>(
  m: DeferredContainerTypeClass<C>,
) =>
  describe("DeferredContainerTypeClass", ...ContainerTypeClassTests(m).tests);

export default DeferredContainerTypeClassTests;
