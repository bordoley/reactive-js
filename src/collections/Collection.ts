import {
  Collection,
  CollectionModule,
  CollectionOf,
  KeyOf,
} from "../collections.js";
import { newInstance } from "../functions.js";

export const keySet =
  <C extends Collection>(keys: CollectionModule<C>["keys"]) =>
  <TKey extends KeyOf<C> = KeyOf<C>>(
    collection: CollectionOf<C, unknown, TKey>,
  ): ReadonlySet<TKey> =>
    newInstance(Set<TKey>, keys<TKey>()(collection));
