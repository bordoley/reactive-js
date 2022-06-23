import { Function1, Predicate, TypePredicate, Reducer, Factory } from "./functions.mjs";
declare const empty: ReadonlyArray<any>;
declare type ReadonlyArrayOperator<TA, TB> = Function1<readonly TA[], readonly TB[]>;
declare const everySatisfy: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const fromObject: <T>() => Function1<Readonly<Record<string, T>>, readonly [
    string,
    T
][]>;
declare const join: (separator?: string) => Function1<readonly string[], string>;
declare const keep: <T>(predicate: Predicate<T>) => ReadonlyArrayOperator<T, T>;
declare const keepType: <TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => ReadonlyArrayOperator<TA, TB>;
declare const length: (arr: readonly unknown[]) => number;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => ReadonlyArrayOperator<TA, TB>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Function1<readonly T[], TAcc>;
declare const reduceRight: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Function1<readonly T[], TAcc>;
export { ReadonlyArrayOperator, empty, everySatisfy, fromObject, join, keep, keepType, length, map, reduce, reduceRight };
