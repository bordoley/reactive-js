import { describe } from "../../__internal__/testing.js";
import { ContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";

const ContainerTypeClassTests = <C extends Container>(
  _m: ContainerTypeClass<C>,
) => describe("ContainerTypeClass");

export default ContainerTypeClassTests;
