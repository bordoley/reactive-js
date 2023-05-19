import { Factory, Updater } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_generate: <T>(generator: Updater<T>, initialValue: Factory<T>) => EnumeratorLike<T>;
export default Enumerator_generate;
