import { ContainerLike, FromArrayOptions, Container, ContainerOperator, ContainerOf } from "../../../containers.mjs";
import { Function1, Factory } from "../../../functions.mjs";
declare const throws: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
} & {
    fromArray<T_1>(options?: Partial<O> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
}, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Factory<unknown>, ContainerOf<C, T>>;
export { throws as default };
