import { Factory, Reducer } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => (enumerator: EnumeratorLike<T>) => TAcc;
export default Enumerator_reduce;
