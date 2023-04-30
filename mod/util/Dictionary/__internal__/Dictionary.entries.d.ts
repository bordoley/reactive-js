import { EnumeratorLike } from "../../../containers.js";
import { DictionaryLike } from "../../../util.js";
declare const Dictionary_entries: <T, TKey extends {} = {}>() => (dict: DictionaryLike<TKey, T>) => EnumeratorLike<[TKey, T]>;
export default Dictionary_entries;
