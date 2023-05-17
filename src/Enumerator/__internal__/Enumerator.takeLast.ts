import * as Enumerator from "../../Enumerator.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { pipe } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  QueueableLike_enqueue,
} from "../../types.js";
import Enumerator_empty from "./Enumerator.empty.js";
import IndexedCollection_toReadonlyArray from "../../IndexedCollection/__internal__/IndexedCollection.toReadonlyArray.js";

const Enumerator_takeLast: Enumerator.Signature["takeLast"] = <T>(options?: {
  readonly count?: number;
}) => {
  const count = clampPositiveInteger(options?.count ?? 1);

  return (enumerator: EnumeratorLike<T>) => {
    if (count === 0) {
      return Enumerator_empty<T>();
    } else {

    const queue = Queue_createIndexedQueue<T>(count, "drop-oldest");

    while (enumerator[EnumeratorLike_move]()) {
      const next = enumerator[EnumeratorLike_current];
      queue[QueueableLike_enqueue](next);
    }

    return pipe(
      queue,
      IndexedCollection_toReadonlyArray<T>(),
      ReadonlyArray_enumerate<T>(),
    );
    }
  };
};
export default Enumerator_takeLast;
