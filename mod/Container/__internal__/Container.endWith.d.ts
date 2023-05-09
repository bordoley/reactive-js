import { Container, DeferredTypeClass } from "../../containers.js";
declare const Container_endWith: <C extends Container.Type>(concatWith: <T>(snd: Container.Of<C, T>, ...tail: readonly Container.Of<C, T>[]) => Container.Operator<C, T, T>, fromReadonlyArray: <T_1>(options?: {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} | undefined) => import("../../functions.js").Function1<readonly T_1[], Container.Of<C, T_1>>) => <T_2>(...values: readonly T_2[]) => Container.Operator<C, T_2, T_2>;
export default Container_endWith;
