import * as Obj from "../../../__internal__/Object.js";
import { Tuple2 } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_fromEntries: ReadonlyObjectMap.Signature["fromEntries"] =

    <T, TKey extends ReadonlyObjectMap.TKeyBase>() =>
    (entries: Iterable<Tuple2<TKey, T>>) => {
      const result = Obj.createObjectMap<TKey, T>();

      for (const [key, value] of entries) {
        result[key] = value;
      }

      return result;
    };

export default ReadonlyObjectMap_fromEntries;
