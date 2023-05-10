import * as Obj from "../../__internal__/Object.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import type * as ReadonlyObjectMap from "./../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_fromEntries: ReadonlyObjectMap.Signature["fromEntries"] =

    <T, TKey extends ReadonlyObjectMap.TKeyBase>() =>
    (entries: EnumeratorLike<readonly [TKey, T]>) => {
      const obj = Obj.create(null);

      while (entries[EnumeratorLike_move]()) {
        const [key, value] = entries[EnumeratorLike_current];
        obj[key] = value;
      }

      return obj;
    };

export default ReadonlyObjectMap_fromEntries;
