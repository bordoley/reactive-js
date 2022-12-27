import { ContainerLike, Map, ContainerOperator } from "../../../containers.mjs";
declare const mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C>, value: TB) => ContainerOperator<C, TA, TB>;
export { mapTo as default };
