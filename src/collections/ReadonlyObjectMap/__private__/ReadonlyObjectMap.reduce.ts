import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { Factory, Function3 } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_reduce: ReadonlyObjectMap.Signature["reduce"] =
  <
    T,
    TAcc,
    TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase,
  >(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (obj: ReadonlyObjectMapLike<TKey, T>) => {
    let result = initialValue();

    for (const key in obj) {
      if (Obj.hasOwn(obj, key)) {
        result = reducer(result, obj[key as TKey] as T, key as TKey);
      }
    }
    return result;
  };

export default ReadonlyObjectMap_reduce;
