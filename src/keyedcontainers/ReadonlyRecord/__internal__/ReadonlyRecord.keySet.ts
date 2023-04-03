import { hasOwn } from "../../../__internal__/Object.js";
import { ReadonlySetLike } from "../../../containers.js";
import { KeyOf, KeySet, ReadonlyRecordLike } from "../../../keyedcontainers.js";

const ReadonlyRecord_keySet: KeySet<ReadonlyRecordLike>["keySet"] =
  <TKey extends KeyOf<ReadonlyRecordLike> = KeyOf<ReadonlyRecordLike>>() =>
  (obj: ReadonlyRecordLike<TKey, unknown>): ReadonlySetLike<TKey> => {
    const keys = new Set<TKey>();

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        keys.add(key as TKey);
      }
    }
    return keys;
  };

export default ReadonlyRecord_keySet;
