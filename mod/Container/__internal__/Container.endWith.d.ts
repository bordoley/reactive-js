import { DeferredTypeClass } from "../../type-classes.js";
import { Container, ContainerOperator } from "../../types.js";
declare const Container_endWith: <C extends Container>(concatWith: <T>(snd: import("../../types.js").ContainerOf<C, T>, ...tail: readonly import("../../types.js").ContainerOf<C, T>[]) => ContainerOperator<C, T, T>, fromReadonlyArray: <T_1>(options?: {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} | undefined) => import("../../functions.js").Function1<readonly T_1[], import("../../types.js").ContainerOf<C, T_1>>) => <T_2>(...values: readonly T_2[]) => ContainerOperator<C, T_2, T_2>;
export default Container_endWith;
