import { Function1 } from "../../functions.js";
import { ConcreteContainerModule, Container, ContainerOf, DisposableLike } from "../../types.js";
declare const ConcreteContainerModuleTests: <C extends Container, TCtx extends DisposableLike>(m: ConcreteContainerModule<C>, createCtx: () => TCtx, toReadonlyArray: <T>(ctx: TCtx) => Function1<ContainerOf<C, T>, readonly T[]>) => import("../../__internal__/testing.js").Describe[];
export default ConcreteContainerModuleTests;
