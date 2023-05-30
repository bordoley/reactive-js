import * as Obj from "../../__internal__/Object.js";
import { Tuple2 } from "../../functions.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import type * as ReadonlyObjectMap from "./../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_fromEntries: ReadonlyObjectMap.Signature["fromEntries"] =

    <T, TKey extends ReadonlyObjectMap.TKeyBase>() =>
    (enumerable: EnumerableLike<Tuple2<TKey, T>>) => {
      const entries = enumerable[EnumerableLike_enumerate]();
      const obj = Obj.create(null);

      while (entries[EnumeratorLike_move]()) {
        const [key, value] = entries[EnumeratorLike_current];
        obj[key] = value;
      }

      return obj;
    };

export default ReadonlyObjectMap_fromEntries;
