import { bindMethod, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_createEnqueueObserver from "../../../utils/Observer/__internal__/Observer.createEnqueueObserver.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  ObserverLike,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const Observable_dispatchTo: Observable.Signature["dispatchTo"] = <T>(
  dispatcher: DispatcherLike<T>,
) =>
  Observable_liftWithSideEffects((observer: ObserverLike<T>) =>
    pipe(
      Observer_createEnqueueObserver(observer, dispatcher),
      DisposableContainer.onComplete(
        bindMethod(dispatcher, DispatcherLike_complete),
      ),
    ),
  );

export default Observable_dispatchTo;
