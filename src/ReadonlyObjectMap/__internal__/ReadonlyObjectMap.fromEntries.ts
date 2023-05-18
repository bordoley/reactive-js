import * as Obj from "../../__internal__/Object.js";
import {
  EnumeratorFactoryLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import type * as ReadonlyObjectMap from "./../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_fromEntries: ReadonlyObjectMap.Signature["fromEntries"] =

    <T, TKey extends ReadonlyObjectMap.TKeyBase>() =>
    (factory: EnumeratorFactoryLike<readonly [TKey, T]>) => {
      const entries = factory();
      const obj = Obj.create(null);

      while (entries[EnumeratorLike_move]()) {
        const [key, value] = entries[EnumeratorLike_current];
        obj[key] = value;
      }

      return obj;
    };

export default ReadonlyObjectMap_fromEntries;
