import { describe } from "../../__internal__/testing.js";
import { AsyncContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";

const AsyncContainerTypeClassTests = <C extends Container>(
  _m: AsyncContainerTypeClass<C>,
) => describe("AsyncContainerTypeClass");

export default AsyncContainerTypeClassTests;
