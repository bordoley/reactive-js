import { Function1 } from "../../functions.js";
import { ContainerOf, DisposableLike, IndexedContainer, IndexedContainerModule } from "../../types.js";
declare const IndexedContainerModuleTests: <C extends IndexedContainer, TCtx extends DisposableLike>(m: IndexedContainerModule<C>, createCtx: () => TCtx, fromReadonlyArray: <T>(ctx: TCtx) => Function1<readonly T[], ContainerOf<C, T, import("../../types.js").KeyOf<C>>>, toReadonlyArray: <T_1>(ctx: TCtx) => Function1<ContainerOf<C, T_1, import("../../types.js").KeyOf<C>>, readonly T_1[]>) => import("../../__internal__/testing.js").Describe;
export default IndexedContainerModuleTests;
