import { ObserverLike } from "../../../concurrent.js";
import { bindMethod, pipe } from "../../../functions.js";
import { DispatcherLike, DispatcherLike_complete } from "../../../rx.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const Observable_dispatchTo: Observable.Signature["dispatchTo"] = <T>(
  dispatcher: DispatcherLike<T>,
) =>
  Observable_liftWithSideEffects((observer: ObserverLike<T>) =>
    pipe(
      Observer_createEnqueueObserver(observer, dispatcher),
      Disposable.onComplete(bindMethod(dispatcher, DispatcherLike_complete)),
    ),
  );

export default Observable_dispatchTo;
