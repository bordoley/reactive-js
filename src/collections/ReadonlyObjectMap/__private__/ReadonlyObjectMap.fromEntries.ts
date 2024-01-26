import * as Obj from "../../../__internal__/Object.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../collections.js";
import { Tuple2 } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_fromEntries: ReadonlyObjectMap.Signature["fromEntries"] =

    <T, TKey extends ReadonlyObjectMap.TKeyBase>() =>
    (enumerable: EnumerableLike<Tuple2<TKey, T>>) => {
      const entries = enumerable[EnumerableLike_enumerate]();
      const result = Obj.createObjectMap<TKey, T>();

      while (entries[EnumeratorLike_move]()) {
        const [key, value] = entries[EnumeratorLike_current];
        result[key] = value;
      }

      return result;
    };

export default ReadonlyObjectMap_fromEntries;
