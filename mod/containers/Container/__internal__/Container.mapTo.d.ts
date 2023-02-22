import { ContainerLike, ContainerOperator, Map } from "../../../containers.js";
declare const Container_mapTo: <C extends ContainerLike>(map: <TA, TB>(mapper: import("../../../functions.js").Function1<TA, TB>, options?: undefined) => ContainerOperator<C, TA, TB>) => <TA_1, TB_1>(value: TB_1) => ContainerOperator<C, TA_1, TB_1>;
export default Container_mapTo;
