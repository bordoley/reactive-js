import { Function1 } from "../../../functions.mjs";
import { ContainerLike, FromArrayOptions, Container, ContainerOf, ContainerOperator } from "../../../containers.mjs";
declare const ContainerLike__startWith: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Container<C> & {
    concat<T_1>(fst: ContainerOf<C, T_1>, snd: ContainerOf<C, T_1>, ...tail: readonly ContainerOf<C, T_1>[]): ContainerOf<C, T_1>;
} & {
    fromArray<T_2>(options?: Partial<O> | undefined): Function1<readonly T_2[], ContainerOf<C, T_2>>;
}, ...values: readonly T[]) => ContainerOperator<C, T, T>;
export { ContainerLike__startWith as default };
