import {
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../../../collections.js";
import Indexed_toCollection from "../../../collections/Indexed/__private__/Indexed.toCollection.js";
import { ReadonlyArrayCollection } from "../../../collections/ReadonlyArray.js";
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
  /*@__PURE__*/ Indexed_toCollection<ReadonlyArrayCollection, ValuesCollection>(
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
    v => v.length,
  ) as EventSource.Signature["fromReadonlyArray"];

export default EventSource_fromReadonlyArray;
