import { ContainerLike, Container, ContainerOperator, ContainerOf } from "../../../containers.js";
import { Function1, Factory } from "../../../functions.js";
declare const Container_throws: <C extends ContainerLike, T, O extends {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} = {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}>(m: Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
} & {
    fromArray<T_1>(options?: O | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
}, options?: Omit<O, "start" | "count"> | undefined) => Function1<Factory<unknown>, ContainerOf<C, T>>;
export { Container_throws as default };
