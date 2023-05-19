import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import type * as EventSource from "../../EventSource.js";
import { pipe } from "../../functions.js";
import { EventSourceLike } from "../../types.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

const EventSource_toReadonlyArrayAsync: EventSource.Signature["toReadonlyArrayAsync"] =

    <T>() =>
    (src: EventSourceLike<T>) =>
      new Promise<readonly T[]>((resolve, reject) => {
        const result: T[] = [];
        pipe(
          src,
          EventSource_addEventHandler(v => {
            result.push(v);
          }),
          Disposable_onComplete(() => resolve(result)),
          Disposable_onError(reject),
        );
      });

export default EventSource_toReadonlyArrayAsync;
