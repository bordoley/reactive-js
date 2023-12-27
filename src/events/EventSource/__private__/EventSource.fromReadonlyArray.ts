import {
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../../../collections.js";
import ReadonlyArray_toCollection from "../../../collections/ReadonlyArray/__private__/ReadonlyArray.toCollection.js";
import { EventSourceLike, SinkLike_notify } from "../../../events.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

interface ValuesCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: EventSourceLike<
    this[typeof KeyedCollection_T]
  >;
}

const EventSource_fromReadonlyArray: EventSource.Signature["fromReadonlyArray"] =
  /*@__PURE__*/ ReadonlyArray_toCollection<ValuesCollection>(
    <_ extends number, T>(
      arr: readonly T[],
      startIndex: number,
      count: number,
    ) =>
      EventSource_create<T>(listener => {
        let iterCount = count;
        let iterStartIndex = startIndex;

        for (
          ;
          iterCount !== 0;
          iterCount > 0
            ? (iterStartIndex++, iterCount--)
            : (iterStartIndex--, iterCount++)
        ) {
          listener[SinkLike_notify](arr[iterStartIndex]);
        }
        listener[DisposableLike_dispose]();
      }),
  ) as EventSource.Signature["fromReadonlyArray"];

export default EventSource_fromReadonlyArray;
