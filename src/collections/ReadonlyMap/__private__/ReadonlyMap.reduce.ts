import { Factory, Function3 } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_reduce: ReadonlyMap.Signature["reduce"] =
  <T, TAcc, TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (map: ReadonlyMap<TKey, T>) => {
    let result = initialValue();

    for (const [key, value] of map) {
      result = reducer(result, value, key);
    }

    return result;
  };

export default ReadonlyMap_reduce;
