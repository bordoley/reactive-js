import { ContainerLike, ContainerOperator, Map } from "../../../containers.js";
declare const Container_mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C, never>, value: TB) => ContainerOperator<C, TA, TB>;
export default Container_mapTo;
