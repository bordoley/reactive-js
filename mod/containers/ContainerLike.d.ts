import { ContainerLike, FromArrayOptions, Container, ContainerOperator, ContainerOf, Concat, SomeSatisfy, FromArray, Keep, Map, EverySatisfy, Zip } from "../containers.mjs";
import { Function1, Factory, Equality, Option, TypePredicate, Predicate } from "../functions.mjs";
declare const compute: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
} & {
    fromArray<T_1>(options?: Partial<O> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
}, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Factory<T>, ContainerOf<C, T>>;
declare const concatMap: <C extends ContainerLike, TA, TB, O = never>({ map, concatAll }: Container<C> & {
    map<TA_1, TB_1>(mapper: Function1<TA_1, TB_1>): ContainerOperator<C, TA_1, TB_1>;
} & {
    concatAll: <T>(options?: Partial<O> | undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
}, mapper: Function1<TA, ContainerOf<C, TB>>, options?: Partial<O> | undefined) => ContainerOperator<C, TA, TB>;
declare const concatWith: <C extends ContainerLike, T>({ concat }: Concat<C>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
declare const contains: <C extends ContainerLike, T>({ someSatisfy }: SomeSatisfy<C>, value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
declare const encodeUtf8: <C extends ContainerLike>(m: Container<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>, options?: undefined): ContainerOf<C, T>;
} & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}) => ContainerOperator<C, string, Uint8Array>;
declare function endWith<C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Concat<C> & FromArray<C, never>, value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
declare const fromOption: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>({ fromArray }: FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Option<T>, ContainerOf<C, T>>;
declare const genMap: <C extends ContainerLike, TA, TB, OConcatAll = never, OFromIterable = never>(m: Container<C> & {
    map<TA_1, TB_1>(mapper: Function1<TA_1, TB_1>): ContainerOperator<C, TA_1, TB_1>;
} & {
    concatAll: <T>(options?: Partial<OConcatAll> | undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
} & {
    fromIterable<T_1>(options?: Partial<OFromIterable> | undefined): Function1<Iterable<T_1>, ContainerOf<C, T_1>>;
}, mapper: Function1<TA, Generator<TB, any, any>>, options?: Partial<OConcatAll & OFromIterable> | undefined) => ContainerOperator<C, TA, TB>;
declare const keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: Keep<C>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const ignoreElements: <C extends ContainerLike, T>({ keep, }: Keep<C>) => ContainerOperator<C, unknown, T>;
declare const mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C>, value: TB) => ContainerOperator<C, TA, TB>;
declare const noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: EverySatisfy<C>, predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
declare function startWith<C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Concat<C> & FromArray<C, O>, value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
declare const throws: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
} & {
    fromArray<T_1>(options?: Partial<O> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
}, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Factory<unknown>, ContainerOf<C, T>>;
interface ZipWith {
    <C extends ContainerLike, TA, TB>({ zip }: Zip<C>, b: ContainerOf<C, TB>): ContainerOperator<C, TA, readonly [
        TA,
        TB
    ]>;
    <C extends ContainerLike, TA, TB, TC>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE, TF>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG, TH>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH
    ]>;
    <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG, TH, TI>({ zip }: Zip<C>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOperator<C, TA, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH,
        TI
    ]>;
}
declare const zipWith: ZipWith;
export { compute, concatMap, concatWith, contains, encodeUtf8, endWith, fromOption, genMap, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };
