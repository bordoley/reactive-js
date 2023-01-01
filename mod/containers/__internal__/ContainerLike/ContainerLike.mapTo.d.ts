import { ContainerLike, Map, ContainerOperator } from "../../../containers.mjs";
declare const ContainerLike__mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C>, value: TB) => ContainerOperator<C, TA, TB>;
export { ContainerLike__mapTo as default };
