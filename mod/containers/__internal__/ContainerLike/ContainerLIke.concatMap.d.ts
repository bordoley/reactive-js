import { ContainerLike, Container, ContainerOperator, ContainerOf } from "../../../containers.mjs";
import { Function1 } from "../../../functions.mjs";
declare const concatMap: <C extends ContainerLike, TA, TB, O = never>({ map, concatAll }: Container<C> & {
    map<TA_1, TB_1>(mapper: Function1<TA_1, TB_1>): ContainerOperator<C, TA_1, TB_1>;
} & {
    concatAll: <T>(options?: Partial<O> | undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
}, mapper: Function1<TA, ContainerOf<C, TB>>, options?: Partial<O> | undefined) => ContainerOperator<C, TA, TB>;
export { concatMap as default };
