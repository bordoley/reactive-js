import { Container, ContainerTypeClass, Containers } from "../../containers.js";
declare const Container_mapTo: <C extends Container>(map: <TA, TB>(selector: import("../../functions.js").Function1<TA, TB>) => Containers.Operator<C, TA, TB>) => <TA_1, TB_1>(value: TB_1) => Containers.Operator<C, TA_1, TB_1>;
export default Container_mapTo;
