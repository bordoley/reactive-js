import { EnumeratorLike } from "../../../containers.js";
import { DictionaryLike } from "../../../util.js";
declare const Dictionary_values: <T, TKey extends {} = {}>() => (dict: DictionaryLike<T, TKey>) => EnumeratorLike<T>;
export default Dictionary_values;
