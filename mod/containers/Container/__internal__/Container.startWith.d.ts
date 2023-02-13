import { ContainerLike, Concat, FromReadonlyArray, ContainerOperator } from "../../../containers.js";
declare const Container_startWith: <C extends ContainerLike, T>(m: Concat<C> & FromReadonlyArray<C>, value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
export { Container_startWith as default };
