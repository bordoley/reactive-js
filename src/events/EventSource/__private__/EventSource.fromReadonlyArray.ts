import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";

import { SinkLike_notify } from "../../../events.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_fromReadonlyArray: EventSource.Signature["fromReadonlyArray"] =

    <T>(options?: { count?: number; start?: number }) =>
    (arr: readonly T[]) =>
      EventSource_create<T>(listener => {
        let { start, count } = parseArrayBounds(arr, options);

        for (
          ;
          count !== 0;
          count > 0 ? (start++, count--) : (start--, count++)
        ) {
          listener[SinkLike_notify](arr[start]);
        }
        listener[DisposableLike_dispose]();
      });

export default EventSource_fromReadonlyArray;
