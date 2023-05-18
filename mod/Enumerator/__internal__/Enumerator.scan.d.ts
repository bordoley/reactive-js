import { Factory, Reducer } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => (delegate: EnumeratorLike<T>) => EnumeratorLike<TAcc>;
export default Enumerator_scan;
