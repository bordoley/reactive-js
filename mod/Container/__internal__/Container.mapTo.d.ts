import { Container, ContainerTypeClass } from "../../containers.js";
declare const Container_mapTo: <C extends Container.Type>(map: <TA, TB>(selector: import("../../functions.js").Function1<TA, TB>) => Container.Operator<C, TA, TB>) => <TA_1, TB_1>(value: TB_1) => Container.Operator<C, TA_1, TB_1>;
export default Container_mapTo;
