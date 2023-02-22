import { ConcatWith, ContainerLike, ContainerOperator, FromReadonlyArray } from "../../../containers.js";
declare const Container_startWith: <C extends ContainerLike>(concatWith: <T>(snd: import("../../../containers.js").ContainerOf<C, T>, ...tail: readonly import("../../../containers.js").ContainerOf<C, T>[]) => ContainerOperator<C, T, T>, fromReadonlyArray: <T_1>(options?: {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} | undefined) => import("../../../functions.js").Function1<readonly T_1[], import("../../../containers.js").ContainerOf<C, T_1>>) => <T_2>(...values: readonly T_2[]) => ContainerOperator<C, T_2, T_2>;
export default Container_startWith;
