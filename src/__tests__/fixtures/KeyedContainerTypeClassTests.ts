import { describe } from "../../__internal__/testing.js";
import { KeyedContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";

const KeyedContainerTypeClassTests = <C extends Container>(
  _m: KeyedContainerTypeClass<C>,
) => describe("KeyedContainerTypeClass");

export default KeyedContainerTypeClassTests;
