import {
  ComputationLike_isPure,
  EventSourceLike_subscribe,
  ObservableLike,
} from "../../../computations.js";
import {
  Factory,
  Function2,
  bindMethod,
  invoke,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { EventListenerLike_notify, ObserverLike } from "../../../utils.js";
import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import Computation_isPure from "../../Computation/__private__/Computation.isPure.js";
import type * as Observable from "../../Observable.js";
import * as Publisher from "../../Publisher.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_switchAll from "./Observable.switchAll.js";
import Observable_withLatestFrom from "./Observable.withLatestFrom.js";

const Observable_scanMany: Observable.Signature["scanMany"] = (<T, TAcc>(
    scanner: Function2<TAcc, T, ObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
    innerType: {
      [ComputationLike_isPure]: boolean;
    },
  ) =>
  (source: ObservableLike<T>) =>
    DeferredEventSource.create(
      (observer: ObserverLike<TAcc>) => {
        const accFeedbackPublisher = pipe(
          Publisher.create<TAcc>(),
          Disposable.addTo(observer),
        );

        const feedbackSource = pipe(
          accFeedbackPublisher,
          Broadcaster_toProducer<TAcc>(),
        ) as ObservableLike<TAcc>;

        pipe(
          source,
          Observable_withLatestFrom(feedbackSource, (next: T, acc: TAcc) =>
            scanner(acc, next),
          ),
          Observable_switchAll({
            [ComputationLike_isPure]: false,
          }),
          Observable_forEach(
            bindMethod(accFeedbackPublisher, EventListenerLike_notify),
          ),
          invoke(EventSourceLike_subscribe, observer),
        );

        accFeedbackPublisher[EventListenerLike_notify](initialValue());
      },
      {
        [ComputationLike_isPure]:
          Computation_isPure(source) && Computation_isPure(innerType),
      },
    )) as Observable.Signature["scanMany"];

export default Observable_scanMany;
