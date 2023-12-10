import type * as EventSource from "../../EventSource.js";
import { bind, pipe } from "../../../functions.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
import * as Disposable from "../../../utils/Disposable.js";
import { EventSourceLike } from "../../../events.js";

const EventSource_toReadonlyArrayAsync: EventSource.Signature["toReadonlyArrayAsync"] =

    <T>() =>
    (src: EventSourceLike<T>) =>
      new Promise<readonly T[]>((resolve, reject) => {
        const result: T[] = [];
        pipe(
          src,
          EventSource_addEventHandler(bind(Array.prototype.push, result)),
          Disposable.onComplete(() => resolve(result)),
          Disposable.onError(reject),
        );
      });

export default EventSource_toReadonlyArrayAsync;
