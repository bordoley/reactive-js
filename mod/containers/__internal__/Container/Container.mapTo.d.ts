import { ContainerLike, Map, ContainerOperator } from "../../../containers.js";
declare const Container$mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C>, value: TB) => ContainerOperator<C, TA, TB>;
export { Container$mapTo as default };
