import { Function1 } from "../../../functions.js";
import { ContainerLike, Container, ContainerOf, ContainerOperator } from "../../../containers.js";
declare const ContainerLike__endWith: <C extends ContainerLike, T>(m: Container<C> & {
    concat<T_1>(fst: ContainerOf<C, T_1>, snd: ContainerOf<C, T_1>, ...tail: readonly ContainerOf<C, T_1>[]): ContainerOf<C, T_1>;
} & {
    fromArray<T_2>(options?: Partial<{
        readonly start: number;
        readonly count: number;
    }> | undefined): Function1<readonly T_2[], ContainerOf<C, T_2>>;
}, ...values: readonly T[]) => ContainerOperator<C, T, T>;
export { ContainerLike__endWith as default };
