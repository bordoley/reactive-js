import { Function1 } from "../../functions.js";
import { Container, ContainerModule, ContainerOf, DisposableLike } from "../../types.js";
declare const ContainerModuleTests: <C extends Container, TCtx extends DisposableLike>(m: ContainerModule<C>, createCtx: () => TCtx, fromReadonlyArray: <T>(ctx: TCtx) => Function1<readonly T[], ContainerOf<C, T>>, toReadonlyArray: <T_1>(ctx: TCtx) => Function1<ContainerOf<C, T_1>, readonly T_1[]>) => import("../../__internal__/testing.js").Describe;
export default ContainerModuleTests;
