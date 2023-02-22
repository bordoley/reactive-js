import { ConcatAll, ContainerLike, ContainerOf, ContainerOperator, Map } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Container_concatMap: <C extends ContainerLike>(map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<C, TA, TB>, concatAll: <T>(options?: undefined) => ContainerOperator<C, ContainerOf<C, T>, T>) => <TA_1, TB_1>(mapper: Function1<TA_1, ContainerOf<C, TB_1>>) => ContainerOperator<C, TA_1, TB_1>;
export default Container_concatMap;
