import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import KeepMixin from "../../../utils/__mixins__/EventListeners/KeepMixin.js";
import LiftedEventListenerMixin from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import { EventListenerLike } from "../../../utils.js";

import type * as EventSource from "../../EventSource.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_keep: EventSource.Signature["keep"] = /*@__PURE__*/ (<
  T,
>() => {
  const createKeepEventListener = mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedEventListenerMixin(), KeepMixin()),
    function KeepEventListener(
      this: unknown,
      delegate: EventListenerLike<T>,
      predicate: Predicate<T>,
    ): EventListenerLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedEventListenerMixin<T>(), this, delegate, none);
      init(KeepMixin(), this, predicate);

      return this;
    },
  );

  return (predicate: Predicate<T>) =>
    pipe(createKeepEventListener, partial(predicate), EventSource_lift);
})();

export default EventSource_keep;
