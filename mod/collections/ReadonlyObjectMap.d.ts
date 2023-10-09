import { Collection, CollectionModule, Collection_T, Collection_TKey, Collection_type, KeyOf, ReadonlyObjectMapLike } from "../collections.js";
import { ReadonlyArrayModule } from "./ReadonlyArray.js";
/**
 * @noInheritDoc
 * @category Collection
 */
export interface ReadonlyObjectMapCollection<TKey extends symbol | string = symbol | string> extends Collection {
    readonly [Collection_type]?: ReadonlyObjectMapLike<NonNullable<this[typeof Collection_TKey]>, this[typeof Collection_T]>;
    readonly [Collection_TKey]?: TKey;
}
export type Type<TKey extends symbol | string = symbol | string> = ReadonlyObjectMapCollection<TKey>;
export type TKeyBase = KeyOf<Type>;
export interface ReadonlyObjectMapModule extends CollectionModule<Type> {
}
export type Signature = ReadonlyArrayModule;
export declare const empty: Signature["empty"];
