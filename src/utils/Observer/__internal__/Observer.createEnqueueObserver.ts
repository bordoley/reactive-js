import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import {
  ObserverLike,
  ObserverLike_notify,
  QueueableLike,
  QueueableLike_enqueue,
  SchedulerLike_requestYield,
} from "../../../utils.js";
import DelegatingDisposableMixin from "../../__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";

import Observer_assertObserverState from "./Observer.assertObserverState.js";

const Observer_createEnqueueObserver: <T>(
  delegate: ObserverLike<T>,
  queue: QueueableLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const EnqueueObserver_queue = Symbol("EnqueueObserver_queue");

  type TProperties = {
    readonly [EnqueueObserver_queue]: QueueableLike<T>;
  };

  return mixInstanceFactory(
    include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()),
    function EnqueueObserver(
      this: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      queue: QueueableLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);
      this[EnqueueObserver_queue] = queue;

      return this;
    },
    props<TProperties>({
      [EnqueueObserver_queue]: none,
    }),
    proto({
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
          this[SchedulerLike_requestYield]();
        }
        this[LiftedObserverLike_delegate][ObserverLike_notify](next);
      }),
    }),
  );
})();

export default Observer_createEnqueueObserver;
