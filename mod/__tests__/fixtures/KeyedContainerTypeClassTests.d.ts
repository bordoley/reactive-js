import { KeyedContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";
declare const KeyedContainerTypeClassTests: <C extends Container>(m: KeyedContainerTypeClass<C, import("../../types.js").KeyOf<C>>) => import("../../__internal__/testing.js").Describe;
export default KeyedContainerTypeClassTests;
