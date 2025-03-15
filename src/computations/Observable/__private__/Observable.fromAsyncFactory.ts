import { error } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike_dispose,
  EventListenerLike_notify,
  ObserverLike,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "./Observable.create.js";

const Observable_fromAsyncFactory: Observable.Signature["fromAsyncFactory"] =
  <T>() =>
  (f: (options?: { signal: AbortSignal }) => Promise<T>) =>
    Observable_create<T>(async (observer: ObserverLike<T>) => {
      const signal = DisposableContainer.toAbortSignal(observer);
      try {
        const result = await f({ signal });
        observer[EventListenerLike_notify](result);
        observer[SinkLike_complete]();
      } catch (e) {
        observer[DisposableLike_dispose](error(e));
      }
    });

export default Observable_fromAsyncFactory;
