import { Function1 } from "../../functions.js";
import { ConcreteIndexedContainerModule, ContainerOf, DisposableLike, IndexedContainer } from "../../types.js";
declare const ConcreteIndexedContainerModuleTests: <C extends IndexedContainer, TCtx extends DisposableLike>(m: ConcreteIndexedContainerModule<C>, createCtx: () => TCtx, toReadonlyArray: <T>(ctx: TCtx) => Function1<ContainerOf<C, T, import("../../types.js").KeyOf<C>>, readonly T[]>) => import("../../__internal__/testing.js").Describe[];
export default ConcreteIndexedContainerModuleTests;
