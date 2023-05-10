import { DeferredContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";
declare const DeferredContainerTypeClassTests: <C extends Container>(m: DeferredContainerTypeClass<C>) => import("../../__internal__/testing.js").Describe;
export default DeferredContainerTypeClassTests;
