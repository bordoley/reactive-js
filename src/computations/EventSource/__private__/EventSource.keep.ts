import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import KeepMixin from "../../../utils/__mixins__/EventListeners/KeepMixin.js";
import LiftedEventListenerMixin from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import { EventListenerLike, EventListenerLike_notify } from "../../../utils.js";

import type * as EventSource from "../../EventSource.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_keep: EventSource.Signature["keep"] = /*@__PURE__*/ (() => {
  const createKeepEventListener: <T>(
    delegate: EventListenerLike<T>,
    predicate: Predicate<T>,
  ) => EventListenerLike<T> = (<T>() =>
    mixInstanceFactory(
      include(
        DelegatingDisposableMixin,
        LiftedEventListenerMixin(),
        KeepMixin(),
      ),
      function KeepEventListener(
        this: Pick<EventListenerLike<T>, typeof EventListenerLike_notify>,
        delegate: EventListenerLike<T>,
        predicate: Predicate<T>,
      ): EventListenerLike<T> {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedEventListenerMixin<T>(), this, delegate, none);
        init(KeepMixin(), this, predicate);

        return this;
      },
    ))();

  return <T>(predicate: Predicate<T>) =>
    pipe(createKeepEventListener<T>, partial(predicate), EventSource_lift);
})();

export default EventSource_keep;
