import { ContainerLike, Container, ContainerOperator, ContainerOf } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Container_concatMap: <C extends ContainerLike, TA, TB>(m: Container<C> & {
    map<TA_1, TB_1>(mapper: Function1<TA_1, TB_1>, options?: undefined): ContainerOperator<C, TA_1, TB_1>;
} & {
    concatAll: <T>(options?: undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
}, mapper: Function1<TA, ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>;
export { Container_concatMap as default };
