import { Function1 } from "./functions.js";
import { DeferredTypeClass, KeyedContainerTypeClass, RunnableTypeClass } from "./type-classes.js";
import { Container_T, Container_type, EnumeratorLike, KeyOf, KeyedContainer, KeyedContainer_TKey } from "./types.js";
export interface Type extends KeyedContainer {
    readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: number;
}
export type TKey = KeyOf<Type>;
export interface Signature extends KeyedContainerTypeClass<Type>, DeferredTypeClass<Type>, RunnableTypeClass<Type> {
    empty: KeyedContainerTypeClass<Type>["empty"];
    /**
     *
     * @category Transform
     */
    enumerate<T>(options?: {
        readonly start?: number;
        readonly count?: number;
    }): Function1<ReadonlyArray<T>, EnumeratorLike<T>>;
    fromReadonlyArray: KeyedContainerTypeClass<Type>["fromReadonlyArray"];
    reduce: KeyedContainerTypeClass<Type>["reduce"];
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, Iterable<T>>;
    toReadonlyArray: KeyedContainerTypeClass<Type>["toReadonlyArray"];
}
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const enumerate: Signature["enumerate"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const first: Signature["first"];
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const keepWithKey: Signature["keepWithKey"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const mapWithKey: Signature["mapWithKey"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const toIterable: Signature["toIterable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
