import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function1 } from "../../../functions.js";
import {
  KeyOf,
  Map,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_map: Map<ReadonlyObjectMapLike>["map"] =
  <
    TA,
    TB,
    TKey extends KeyOf<ReadonlyObjectMapLike> = KeyOf<ReadonlyObjectMapLike>,
  >(
    selector: Function1<TA, TB>,
  ) =>
  (obj: ReadonlyObjectMapLike<TA, TKey>): ReadonlyObjectMapLike<TB, TKey> => {
    const result: Record<TKey, TB> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        result[key as TKey] = selector(obj[key as TKey] as TA);
      }
    }
    return result;
  };

export default ReadonlyObjectMap_map;
