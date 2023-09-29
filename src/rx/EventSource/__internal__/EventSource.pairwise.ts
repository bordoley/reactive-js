import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Tuple2, pipe, returns } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../../rx.js";
import type * as EventSource from "../../EventSource.js";
import PairwiseSinkMixin from "../../__mixins__/PairwiseSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_pairwise: EventSource.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() => {
  const createPairwiseEventListener = createInstanceFactory(
    mix(
      include(PairwiseSinkMixin()),
      function PairwiseEventListener(
        instance: Pick<
          EventListenerLike<T>,
          typeof EventListenerLike_isErrorSafe
        >,
        delegate: EventListenerLike<Tuple2<T, T>>,
      ): EventListenerLike<T> {
        init(PairwiseSinkMixin<T>(), instance, delegate);

        return instance;
      },
      props({}),
      {
        [EventListenerLike_isErrorSafe]: false,
      },
    ),
  );

  return pipe(createPairwiseEventListener, EventSource_lift, returns);
})();

export default EventSource_pairwise;
