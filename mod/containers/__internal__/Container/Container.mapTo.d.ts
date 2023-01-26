import { ContainerLike, Map, ContainerOperator } from "../../../containers.js";
declare const Container_mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C>, value: TB) => ContainerOperator<C, TA, TB>;
export { Container_mapTo as default };
