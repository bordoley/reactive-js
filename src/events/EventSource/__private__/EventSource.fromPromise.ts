import { EventListenerLike_notify } from "../../../events.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_fromPromise: EventSource.Signature["fromPromise"] =
  <T>() =>
  (promise: Promise<T>) =>
    EventSource_create<T>(listener => {
      promise.then(next => {
        if (!listener[DisposableLike_isDisposed]) {
          listener[EventListenerLike_notify](next);
          listener[DisposableLike_dispose]();
        }
      }, Disposable.toErrorHandler(listener));
    });

export default EventSource_fromPromise;
