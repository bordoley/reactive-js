import type * as EventSource from "../../EventSource.js";
import Sink_pairwiseMixin from "../../Sink/__internal__/Sink.pairwiseMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Tuple2, pipe, returns } from "../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_pairwise: EventSource.Signature["pairwise"] =
  /*@__PURE__*/ (() => {
    const createPairwiseEventListener: <T>(
      delegate: EventListenerLike<Tuple2<T, T>>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Sink_pairwiseMixin()),
          function PairwiseEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<Tuple2<T, T>>,
          ): EventListenerLike<T> {
            init(Sink_pairwiseMixin<T>(), instance, delegate);

            return instance;
          },
          props({}),
          {
            [EventListenerLike_isErrorSafe]: false,
          },
        ),
      ))();

    return pipe(createPairwiseEventListener, EventSource_lift, returns);
  })();

export default EventSource_pairwise;
