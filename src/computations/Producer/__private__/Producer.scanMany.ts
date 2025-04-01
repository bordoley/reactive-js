import {
  ComputationLike_isPure,
  EventSourceLike_subscribe,
  ProducerLike,
} from "../../../computations.js";
import {
  Factory,
  Function2,
  bindMethod,
  invoke,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ConsumerLike, EventListenerLike_notify } from "../../../utils.js";
import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import Computation_isPure from "../../Computation/__private__/Computation.isPure.js";
import type * as Producer from "../../Producer.js";
import * as Publisher from "../../Publisher.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_switchAll from "./Producer.switchAll.js";
import Producer_withLatestFrom from "./Producer.withLatestFrom.js";

const Producer_scanMany: Producer.Signature["scanMany"] = (<T, TAcc>(
    scanner: Function2<TAcc, T, ProducerLike<TAcc>>,
    initialValue: Factory<TAcc>,
    innerType: {
      [ComputationLike_isPure]: boolean;
    },
  ) =>
  (source: ProducerLike<T>) =>
    DeferredEventSource.create(
      (consumer: ConsumerLike<TAcc>) => {
        const accFeedbackPublisher = pipe(
          Publisher.create<TAcc>(),
          Disposable.addTo(consumer),
        );

        const feedbackSource = pipe(
          accFeedbackPublisher,
          Broadcaster_toProducer<TAcc>(),
        ) as ProducerLike<TAcc>;

        pipe(
          source,
          Producer_withLatestFrom(feedbackSource, (next: T, acc: TAcc) =>
            scanner(acc, next),
          ),
          Producer_switchAll({
            [ComputationLike_isPure]: false,
          }),
          Producer_forEach(
            bindMethod(accFeedbackPublisher, EventListenerLike_notify),
          ),
          invoke(EventSourceLike_subscribe, consumer),
        );

        accFeedbackPublisher[EventListenerLike_notify](initialValue());
      },
      {
        [ComputationLike_isPure]:
          Computation_isPure(source) && Computation_isPure(innerType),
      },
    )) as Producer.Signature["scanMany"];

export default Producer_scanMany;
