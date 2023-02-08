import { ContainerLike, Concat, FromArray, ContainerOperator } from "../../../containers.js";
declare const Container_startWith: <C extends ContainerLike, T>(m: Concat<C> & FromArray<C, never>, value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
export { Container_startWith as default };
