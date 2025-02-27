import { ComputationLike_isPure } from "../../../computations.js";
import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  ObservableLike_observe,
} from "../../../concurrent.js";
import { EventListenerLike_notify } from "../../../events.js";
import { Factory, Function2, invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_notify from "./Observable.notify.js";
import Observable_switchMap from "./Observable.switchMap.js";
import Observable_withLatestFrom from "./Observable.withLatestFrom.js";

const Observable_scanMany: Observable.Signature["scanMany"] = (<T, TAcc>(
  scanner: Function2<TAcc, T, DeferredObservableLike<TAcc>>,
  initialValue: Factory<TAcc>,
  options?: {
    readonly innerType?: {
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ComputationLike_isPure]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    };
  },
) => {
  const innerType = options?.innerType ?? {
    [ObservableLike_isDeferred]: true,
    [ComputationLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
  };

  return (observable: ObservableLike<T>) => {
    const isPure =
      innerType[ComputationLike_isPure] && observable[ComputationLike_isPure];
    const isRunnable =
      innerType[ObservableLike_isRunnable] &&
      observable[ObservableLike_isRunnable];

    return Observable_createWithConfig(
      observer => {
        const accFeedbackStream = pipe(
          Subject.create(),
          Disposable.addTo(observer),
        );

        pipe(
          observable,
          Observable_withLatestFrom<T, TAcc>(accFeedbackStream),
          Observable_switchMap(([next, acc]) => scanner(acc, next), {
            innerType: {
              [ObservableLike_isDeferred]: true,
              [ComputationLike_isPure]: false,
              [ObservableLike_isRunnable]: false,
            },
          }),
          Observable_notify(accFeedbackStream),
          invoke(ObservableLike_observe, observer),
        );

        accFeedbackStream[EventListenerLike_notify](initialValue());
      },
      {
        [ObservableLike_isDeferred]: true,
        [ComputationLike_isPure]: isPure,
        [ObservableLike_isRunnable]: isRunnable,
      },
    );
  };
}) as Observable.Signature["scanMany"];

export default Observable_scanMany;
