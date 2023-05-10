import { describe } from "../../__internal__/testing.js";
import { BlockingContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";

const BlockingContainerTypeClassTests = <C extends Container>(
  _m: BlockingContainerTypeClass<C>,
) => describe("BlockingContainerTypeClass");

export default BlockingContainerTypeClassTests;
