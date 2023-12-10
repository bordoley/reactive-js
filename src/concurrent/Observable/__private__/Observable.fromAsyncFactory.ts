import { DispatcherLike_complete, ObserverLike } from "../../../concurrent.js";
import { error } from "../../../functions.js";
import {
  DisposableLike_dispose,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "./Observable.create.js";

const Observable_fromAsyncFactory: Observable.Signature["fromAsyncFactory"] =
  <T>() =>
  (f: (abortSignal: AbortSignal) => Promise<T>) =>
    Observable_create<T>(async (observer: ObserverLike<T>) => {
      const abortSignal = Disposable.toAbortSignal(observer);
      try {
        const result = await f(abortSignal);
        observer[QueueableLike_enqueue](result);
        observer[DispatcherLike_complete]();
      } catch (e) {
        observer[DisposableLike_dispose](error(e));
      }
    });

export default Observable_fromAsyncFactory;
