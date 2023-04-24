import { error } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
import {
  DispatcherLike_complete,
  DisposableLike_dispose,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_toAbortSignal from "../../../util/Disposable/__internal__/Disposable.toAbortSignal.js";
import Observable_create from "./Observable.create.js";

const Observable_fromAsyncFactory = <T>(
  f: (abortSignal: AbortSignal) => Promise<T>,
) =>
  Observable_create<T>(async (observer: ObserverLike<T>) => {
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
