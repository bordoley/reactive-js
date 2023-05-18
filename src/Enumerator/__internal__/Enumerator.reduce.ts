import { Factory, Reducer } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_reduce =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (enumerator: EnumeratorLike<T>) => {
    let acc = initialValue();
    while (enumerator[EnumeratorLike_move]()) {
      const next = enumerator[EnumeratorLike_current];
      acc = reducer(acc, next);
    }
    return acc;
  };
export default Enumerator_reduce;
