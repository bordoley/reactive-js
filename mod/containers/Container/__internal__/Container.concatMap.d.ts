import { ContainerLike, Map, ConcatAll, ContainerOf, ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Container_concatMap: <C extends ContainerLike, TA, TB>(m: Map<C, never> & ConcatAll<C, never>, mapper: Function1<TA, ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>;
export { Container_concatMap as default };
