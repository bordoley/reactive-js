import { DictionaryLike, EnumeratorLike } from "../../types.js";
declare const Dictionary_values: <T, TKey extends {} = {}>() => (dict: DictionaryLike<TKey, T>) => EnumeratorLike<T>;
export default Dictionary_values;
