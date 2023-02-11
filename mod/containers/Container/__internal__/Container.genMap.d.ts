import { ContainerLike, Container, ContainerOperator, ContainerOf } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Container_genMap: <C extends ContainerLike, TA, TB, O = never>(m: Container<C> & {
    concatAll: <T>(options?: undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
} & {
    map<TA_1, TB_1>(mapper: Function1<TA_1, TB_1>, options?: undefined): ContainerOperator<C, TA_1, TB_1>;
} & {
    fromIterable<T_1>(options?: O | undefined): Function1<Iterable<T_1>, ContainerOf<C, T_1>>;
}, mapper: Function1<TA, Generator<TB, any, any>>, options?: O | undefined) => ContainerOperator<C, TA, TB>;
export { Container_genMap as default };
