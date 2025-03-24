import { CollectionModule, CollectionOf, CollectionType, KeyOf } from "../collections.js";
export declare const keySet: <C extends CollectionType>(m: Pick<CollectionModule<C>, "keys">) => <TKey extends KeyOf<C> = KeyOf<C>>(collection: CollectionOf<C, unknown, TKey>) => ReadonlySet<TKey>;
