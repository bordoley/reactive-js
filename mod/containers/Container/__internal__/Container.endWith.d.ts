import { Concat, ContainerLike, ContainerOperator, FromReadonlyArray } from "../../../containers.js";
declare const Container_endWith: <C extends ContainerLike, T>(m: Concat<C> & FromReadonlyArray<C>, value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
export default Container_endWith;
