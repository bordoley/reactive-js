import { Function1, Predicate, TypePredicate, SideEffect1 } from "./functions.mjs";
declare const empty: ReadonlyArray<any>;
declare type ReadonlyArrayOperator<TA, TB> = Function1<readonly TA[], readonly TB[]>;
declare const everySatisfy: <T>(predicate: Predicate<T>) => Function1<readonly T[], boolean>;
declare const keep: <T>(predicate: Predicate<T>) => ReadonlyArrayOperator<T, T>;
declare const keepType: <TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => ReadonlyArrayOperator<TA, TB>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => ReadonlyArrayOperator<TA, TB>;
declare const forEach: <T>(f: SideEffect1<T>) => Function1<readonly T[], readonly T[]>;
export { ReadonlyArrayOperator, empty, everySatisfy, forEach, keep, keepType, map };
