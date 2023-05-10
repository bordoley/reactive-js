import { Function1 } from "../../functions.js";
import { ContainerTypeClass } from "../../type-classes.js";
import { Container, ContainerOf, ContainerOperator } from "../../types.js";
declare const Container_concatMap: <C extends Container, O = never>(map: <TA, TB>(selector: Function1<TA, TB>) => ContainerOperator<C, TA, TB>, concatAll: <T>(options?: O | undefined) => ContainerOperator<C, ContainerOf<C, T>, T>) => <TA_1, TB_1>(selector: Function1<TA_1, ContainerOf<C, TB_1>>, options?: O | undefined) => ContainerOperator<C, TA_1, TB_1>;
export default Container_concatMap;
