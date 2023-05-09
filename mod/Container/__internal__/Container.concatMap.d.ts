import { Container, ContainerTypeClass, Containers } from "../../containers.js";
import { Function1 } from "../../functions.js";
declare const Container_concatMap: <C extends Container, O = never>(map: <TA, TB>(selector: Function1<TA, TB>) => Containers.Operator<C, TA, TB>, concatAll: <T>(options?: O | undefined) => Containers.Operator<C, Containers.Of<C, T>, T>) => <TA_1, TB_1>(selector: Function1<TA_1, Containers.Of<C, TB_1>>, options?: O | undefined) => Containers.Operator<C, TA_1, TB_1>;
export default Container_concatMap;
