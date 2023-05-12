import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_toAbortSignal from "../../Disposable/__internal__/Disposable.toAbortSignal.js";
import type * as Observable from "../../Observable.js";
import { error } from "../../functions.js";
import {
  DispatcherLike_complete,
  DisposableLike_dispose,
  ObserverLike,
  QueueableLike_enqueue,
} from "../../types.js";

const Observable_fromAsyncFactory: Observable.Signature["fromAsyncFactory"] =
  <T>() =>
  (f: (abortSignal: AbortSignal) => Promise<T>) =>
    DeferredObservable_create<T>(async (observer: ObserverLike<T>) => {
      const abortSignal = Disposable_toAbortSignal(observer);
      try {
        const result = await f(abortSignal);
        observer[QueueableLike_enqueue](result);
        observer[DispatcherLike_complete]();
      } catch (e) {
        observer[DisposableLike_dispose](error(e));
      }
    });

export default Observable_fromAsyncFactory;
