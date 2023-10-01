import { Factory, Reducer } from "../../../functions.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../ix.js";
import type * as Enumerable from "../../Enumerable.js";

const Enumerable_reduce: Enumerable.Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (enumerable: EnumerableLike<T>) => {
    const enumerator = enumerable[EnumerableLike_enumerate]();
    let acc = initialValue();
    while (enumerator[EnumeratorLike_move]()) {
      const next = enumerator[EnumeratorLike_current];
      acc = reducer(acc, next);
    }
    return acc;
  };

export default Enumerable_reduce;
