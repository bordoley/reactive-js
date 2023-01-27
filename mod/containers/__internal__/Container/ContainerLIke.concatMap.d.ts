import { ContainerLike, Container, ContainerOperator, ContainerOf } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Container_concatMap: <C extends ContainerLike, TA, TB, O = never>({ map, concatAll }: Container<C> & {
    map<TA_1, TB_1>(mapper: Function1<TA_1, TB_1>): ContainerOperator<C, TA_1, TB_1>;
} & {
    concatAll: <T>(options?: O | undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
}, mapper: Function1<TA, ContainerOf<C, TB>>, options?: O | undefined) => ContainerOperator<C, TA, TB>;
export { Container_concatMap as default };
