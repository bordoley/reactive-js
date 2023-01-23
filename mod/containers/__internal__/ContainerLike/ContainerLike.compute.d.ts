import { ContainerLike, Container, ContainerOperator, ContainerOf } from "../../../containers.js";
import { Function1, Factory } from "../../../functions.js";
declare const ContainerLike__compute: <C extends ContainerLike, T, O extends {
    readonly start: number;
    readonly count: number;
} = {
    readonly start: number;
    readonly count: number;
}>(m: Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
} & {
    fromArray<T_1>(options?: Partial<O> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
}, options?: Partial<O> | undefined) => Function1<Factory<T>, ContainerOf<C, T>>;
export { ContainerLike__compute as default };
