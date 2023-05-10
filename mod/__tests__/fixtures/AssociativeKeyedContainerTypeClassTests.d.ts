import { AssociativeKeyedContainerTypeClass, ConcreteAssociativeKeyedContainerTypeClass } from "../../type-classes.js";
import { KeyedContainer } from "../../types.js";
declare const AssociativeKeyedContainerTypeClassTests: <C extends KeyedContainer<string>>(m: AssociativeKeyedContainerTypeClass<C, string> & ConcreteAssociativeKeyedContainerTypeClass<C, string>) => import("../../__internal__/testing.js").Describe;
export default AssociativeKeyedContainerTypeClassTests;
