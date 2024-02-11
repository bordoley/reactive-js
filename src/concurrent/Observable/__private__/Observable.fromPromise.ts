import { DispatcherLike_complete } from "../../../concurrent.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createMulticast from "./Observable.createMulticast.js";

const Observable_fromPromise: Observable.Signature["fromPromise"] =
  <T>() =>
  (promise: Promise<T>) =>
    Observable_createMulticast<T>(observer => {
      promise.then(next => {
        if (!observer[DisposableLike_isDisposed]) {
          observer[QueueableLike_enqueue](next);
          observer[DispatcherLike_complete]();
        }
      }, Disposable.toErrorHandler(observer));
    });

export default Observable_fromPromise;
