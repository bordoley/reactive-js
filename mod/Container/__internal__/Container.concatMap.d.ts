import { Container, ContainerTypeClass } from "../../containers.js";
import { Function1 } from "../../functions.js";
declare const Container_concatMap: <C extends Container.Type, O = never>(map: <TA, TB>(selector: Function1<TA, TB>) => Container.Operator<C, TA, TB>, concatAll: <T>(options?: O | undefined) => Container.Operator<C, Container.Of<C, T>, T>) => <TA_1, TB_1>(selector: Function1<TA_1, Container.Of<C, TB_1>>, options?: O | undefined) => Container.Operator<C, TA_1, TB_1>;
export default Container_concatMap;
