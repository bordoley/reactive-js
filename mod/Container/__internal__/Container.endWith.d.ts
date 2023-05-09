import { Container, Containers, DeferredContainers } from "../../types.js";
declare const Container_endWith: <C extends Container>(concatWith: <T>(snd: Containers.Of<C, T>, ...tail: readonly Containers.Of<C, T>[]) => Containers.Operator<C, T, T>, fromReadonlyArray: <T_1>(options?: {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} | undefined) => import("../../functions.js").Function1<readonly T_1[], Containers.Of<C, T_1>>) => <T_2>(...values: readonly T_2[]) => Containers.Operator<C, T_2, T_2>;
export default Container_endWith;
