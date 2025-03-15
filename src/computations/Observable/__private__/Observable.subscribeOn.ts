import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
} from "../../../computations.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { SchedulerLike, SinkLike_complete } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_enqueue from "./Observable.enqueue.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_subscribeOn: Observable.Signature["subscribeOn"] = (<T>(
    scheduler: SchedulerLike,
  ) =>
  (observable: ObservableLike<T>) =>
    Observable_createWithConfig<T>(
      observer =>
        // FIXME: Conceivably could do some introspection to determine if the observer
        // is using the same scheduler and backpressure config and bypass the intermediary
        pipe(
          observable,
          Observable_enqueue(observer),
          Observable_subscribe(scheduler),
          Disposable.addTo(observer),
          DisposableContainer.onComplete(
            bindMethod(observer, SinkLike_complete),
          ),
        ),
      {
        [ComputationLike_isPure]: observable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
      },
    )) as Observable.Signature["subscribeOn"];
export default Observable_subscribeOn;
