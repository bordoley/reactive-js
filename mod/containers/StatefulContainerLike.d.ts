import { Factory, Function1 } from "../functions.mjs";
import { StatefulContainerLike, Container, ContainerOf, ContainerOperator } from "../containers.mjs";
declare const encodeUtf8: <C extends StatefulContainerLike>(m: Container<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
} & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}) => ContainerOperator<C, string, Uint8Array>;
declare const genMap: <C extends StatefulContainerLike, TA, TB, OConcatAll extends Record<string, never> = Record<string, never>, OFromIterator extends Record<string, never> = Record<string, never>, TReturn = any, TNext = unknown>(m: Container<C> & {
    map<TA_1, TB_1>(mapper: Function1<TA_1, TB_1>): ContainerOperator<C, TA_1, TB_1>;
} & {
    concatAll: <T>(options?: Partial<OConcatAll> | undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
} & {
    fromIterator<T_1, TReturn_1 = any, TNext_1 = unknown>(options?: Partial<OFromIterator> | undefined): Function1<Factory<Iterator<T_1, TReturn_1, TNext_1>>, ContainerOf<C, T_1>>;
}, mapper: Function1<TA, Generator<TB, TReturn, TNext>>, options?: Partial<OConcatAll & OFromIterator> | undefined) => ContainerOperator<C, TA, TB>;
export { encodeUtf8, genMap };
