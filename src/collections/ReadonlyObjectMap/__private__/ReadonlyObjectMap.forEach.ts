import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { SideEffect1, SideEffect2 } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_forEach: ReadonlyObjectMap.Signature["forEach"] =
  <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>(
    effect: SideEffect2<T, TKey>,
  ): SideEffect1<ReadonlyObjectMapLike<TKey, T>> =>
  record => {
    for (const key in record) {
      if (Obj.hasOwn(record, key)) {
        const v: T = record[key as TKey] as T;

        effect(v, key as TKey);
      }
    }
  };

export default ReadonlyObjectMap_forEach;
