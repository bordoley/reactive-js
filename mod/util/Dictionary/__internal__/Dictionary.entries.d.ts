import { EnumeratorLike } from "../../../containers.js";
import { DictionaryLike } from "../../../util.js";
declare const Dictionary_entries: <T, TKey extends {} = {}>() => (dict: DictionaryLike<T, TKey>) => EnumeratorLike<[TKey, T]>;
export default Dictionary_entries;
