import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { Factory, Function3 } from "../../functions.js";

const ReadonlyMap_reduceWithKey: ReadonlyMap.Signature["reduceWithKey"] =
  <T, TAcc, TKey extends ReadonlyMap.TKey = ReadonlyMap.TKey>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (map: ReadonlyMap<TKey, T>) => {
    let result = initialValue();

    for (let [key, value] of map) {
      result = reducer(result, value, key);
    }

    return result;
  };

export default ReadonlyMap_reduceWithKey;
