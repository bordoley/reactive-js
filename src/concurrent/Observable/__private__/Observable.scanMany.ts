import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  DeferringHigherOrderInnerType,
} from "../../../computations.js";
import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../concurrent.js";
import { EventListenerLike_notify } from "../../../events.js";
import { Factory, Function2, invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";
import Observable_withLatestFrom from "./Observable.withLatestFrom.js";

const ObservableModule = {
  forEach: Observable_forEach,
  map: Observable_map,
  switchAll: Observable_switchAll,
};

const Observable_scanMany: Observable.Signature["scanMany"] = (<T, TAcc>(
  scanner: Function2<TAcc, T, DeferredObservableLike<TAcc>>,
  initialValue: Factory<TAcc>,
  options?: {
    readonly innerType?: DeferringHigherOrderInnerType;
  },
) => {
  const innerType = options?.innerType ?? {
    [ComputationLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
  };

  return (observable: ObservableLike<T>) => {
    const isPure =
      innerType[ComputationLike_isPure] && observable[ComputationLike_isPure];
    const isSynchronousObservable =
      innerType[ComputationLike_isSynchronous] &&
      observable[ComputationLike_isSynchronous];

    return Observable_createWithConfig(
      observer => {
        const accFeedbackStream = pipe(
          Subject.create(),
          Disposable.addTo(observer),
        );

        pipe(
          observable,
          Observable_withLatestFrom<T, TAcc>(accFeedbackStream),
          Computation.flatMap(ObservableModule, "switchAll")(
            ([next, acc]) => scanner(acc, next),
            {
              innerType: {
                [ComputationLike_isDeferred]: true,
                [ComputationLike_isPure]: false,
                [ComputationLike_isSynchronous]: false,
              },
            },
          ),
          Computation.notify(ObservableModule)(accFeedbackStream),
          invoke(ObservableLike_observe, observer),
        );

        accFeedbackStream[EventListenerLike_notify](initialValue());
      },
      {
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isPure]: isPure,
        [ComputationLike_isSynchronous]: isSynchronousObservable,
      },
    );
  };
}) as Observable.Signature["scanMany"];

export default Observable_scanMany;
