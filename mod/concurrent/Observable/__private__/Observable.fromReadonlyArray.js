/// <reference types="./Observable.fromReadonlyArray.d.ts" />

import { KeyedCollection_type, } from "../../../collections.js";
import Indexed_toCollection from "../../../collections/Indexed/__private__/Indexed.toCollection.js";
import { ContinuationContextLike_yield, SchedulerLike_schedule, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createPureRunnable from "./Observable.createPureRunnable.js";
const Observable_fromReadonlyArray = (options) => Indexed_toCollection((arr, startIndex, count) => Observable_createPureRunnable((observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    let iterCount = count;
    let iterStartIndex = startIndex;
    const continuation = (ctx) => {
        while (!observer[DisposableLike_isDisposed] && iterCount !== 0) {
            const next = arr[iterStartIndex];
            observer[SinkLike_notify](next);
            iterCount > 0
                ? (iterStartIndex++, iterCount--)
                : (iterStartIndex--, iterCount++);
            ctx[ContinuationContextLike_yield](delay);
        }
        observer[DisposableLike_dispose]();
    };
    pipe(observer[SchedulerLike_schedule](continuation, delayStart ? { delay } : none), Disposable.addTo(observer));
}), v => v.length)(options);
export default Observable_fromReadonlyArray;
/*
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
   Indexed_toCollection<ReadonlyArrayCollection, ValuesCollection>(
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
*/
