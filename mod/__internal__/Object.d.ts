import { Function1, Function2, SideEffect2, TypePredicate } from "../functions.js";
declare const create: {
    (o: object | null): any;
    (o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;
}, getOwnPropertyDescriptors: <T>(o: T) => { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & {
    [x: string]: PropertyDescriptor;
}, prototype: Object;
export { create, getOwnPropertyDescriptors, prototype };
export type ReadonlyRecord<TKey extends string | number | symbol, T> = Readonly<Record<TKey, T>>;
export declare const empty: <TKey extends string | number | symbol, T>() => Readonly<Record<TKey, T>>;
export declare const forEach: <TKey extends string | number | symbol, T>(effect: SideEffect2<T, TKey>) => Function1<Readonly<Record<TKey, T>>, Readonly<Record<TKey, T>>>;
export declare const keep: <TKey extends string | number | symbol, T>(predicate: Function2<T, TKey, boolean>) => Function1<Readonly<Record<TKey, T>>, Readonly<Record<TKey, T>>>;
export declare const keepType: <TKey extends string | number | symbol, TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => Function1<Readonly<Record<TKey, TA>>, Readonly<Record<TKey, TB>>>;
export declare const keys: <TKey extends string | number | symbol, T = unknown>(predicate?: Function2<T, TKey, boolean>) => (obj: Readonly<Record<TKey, T>>) => ReadonlySet<TKey>;
export declare const map: <TKey extends string | number | symbol, TA, TB>(mapper: Function2<TA, TKey, TB>) => Function1<Readonly<Record<TKey, TA>>, Readonly<Record<TKey, TB>>>;
export declare const union: <TKey extends string | number | symbol, T>(m1: Readonly<Record<TKey, T>>, m2: Readonly<Record<TKey, T>>) => Readonly<Record<TKey, T>>;
