import { Collection, CollectionModule, CollectionOf, KeyOf } from "../collections.js";
export declare const keySet: <C extends Collection>(keys: CollectionModule<C>["keys"]) => <TKey extends KeyOf<C> = KeyOf<C>>(collection: CollectionOf<C, unknown, TKey>) => ReadonlySet<TKey>;
