/// <reference types="node" />
import { Function1, Predicate, Reducer, Factory } from './functions';
import { ReadonlyObjectMap } from './readonlyObjectMap';

declare type ReadonlyArrayOperator<TA, TB> = Function1<readonly TA[], readonly TB[]>;
declare const everySatisfy: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const fromObject: <T>() => Function1<ReadonlyObjectMap<T>, readonly [string, T][]>;
declare const join: (separator?: string | undefined) => Function1<readonly string[], string>;
declare const keep: <T>(predicate: Predicate<T>) => Function1<readonly T[], readonly T[]>;
declare const length: (arr: readonly unknown[]) => number;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => Function1<readonly TA[], readonly TB[]>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Function1<readonly T[], TAcc>;
declare const reduceRight: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Function1<readonly T[], TAcc>;

export { ReadonlyArrayOperator, everySatisfy, fromObject, join, keep, length, map, reduce, reduceRight };
