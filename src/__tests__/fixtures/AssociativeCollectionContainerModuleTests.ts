import { describe } from "../../__internal__/testing.js";
import {
  AssociativeCollectionContainerModule,
  Container,
} from "../../types.js";

const AssociativeCollectionContainerModuleTests = <C extends Container<string>>(
  _m: AssociativeCollectionContainerModule<C>,
) => [describe("AssociativeContainerModuleTests")];

export default AssociativeCollectionContainerModuleTests;
