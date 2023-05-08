import { DictionaryLike, EnumeratorLike } from "../../../core.js";
declare const Dictionary_entries: <T, TKey extends {} = {}>() => (dict: DictionaryLike<TKey, T>) => EnumeratorLike<[TKey, T]>;
export default Dictionary_entries;
