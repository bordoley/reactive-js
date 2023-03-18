import { error } from "../../../functions.js";
import { DispatcherLike_complete, ObserverLike } from "../../../rx.js";
import { DisposableLike_dispose, QueueableLike_push } from "../../../util.js";
import Disposable_toAbortSignal from "../../../util/Disposable/__internal__/Disposable.toAbortSignal.js";
import Observable_create from "./Observable.create.js";

const Observable_fromAsyncFactory = <T>(
  f: (...args: any[]) => Promise<T>,
  ...args: unknown[]
) =>
  Observable_create<T>(async (observer: ObserverLike<T>) => {
    const abortSignal = Disposable_toAbortSignal(observer);
    try {
      const result = await f(...args, abortSignal);
      observer[QueueableLike_push](result);
      observer[DispatcherLike_complete]();
    } catch (e) {
      observer[DisposableLike_dispose](error(e));
    }
  });

export default Observable_fromAsyncFactory;
