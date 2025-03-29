import {
  CollectionModule,
  CollectionOf,
  CollectionType,
  KeyOf,
} from "../collections.js";
import { newInstance } from "../functions.js";

export const keySet =
  <C extends CollectionType>(m: Pick<CollectionModule<C>, "keys">) =>
  <TKey extends KeyOf<C> = KeyOf<C>>(
    collection: CollectionOf<C, unknown, TKey>,
  ): ReadonlySet<TKey> =>
    newInstance(Set<TKey>, m.keys<TKey>()(collection));
