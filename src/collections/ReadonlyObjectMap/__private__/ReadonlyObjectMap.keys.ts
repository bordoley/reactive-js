import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_keys: ReadonlyObjectMap.Signature["keys"] =
  <TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, unknown>) =>
    pipe(function* (): Iterator<TKey> {
      for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
          yield key as TKey;
        }
      }
    }, Enumerable_fromIteratorFactory());

export default ReadonlyObjectMap_keys;
