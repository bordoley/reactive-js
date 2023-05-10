import { Function1 } from "./functions.js";
import { ConcreteContainerTypeClass, EnumerableContainerTypeClass, KeyedContainerTypeClass } from "./type-classes.js";
import { Container_T, Container_type, EnumeratorLike, KeyOf, KeyedContainer, KeyedContainer_TKey } from "./types.js";
export interface Type extends KeyedContainer {
    readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: number;
}
export type TKeyBase = KeyOf<Type>;
export interface Signature extends ConcreteContainerTypeClass<Type>, KeyedContainerTypeClass<Type>, Omit<EnumerableContainerTypeClass<Type>, keyof KeyedContainerTypeClass<Type>> {
    /**
     *
     * @category Transform
     */
    enumerate<T>(options?: {
        readonly start?: number;
        readonly count?: number;
    }): Function1<ReadonlyArray<T>, EnumeratorLike<T>>;
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, Iterable<T>>;
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
export declare const reduce: Signature["reduce"];
export declare const reduceWithKey: Signature["reduceWithKey"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const toIterable: Signature["toIterable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const values: Signature["values"];
