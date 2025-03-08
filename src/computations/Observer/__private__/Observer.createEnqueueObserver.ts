import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../computations/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../computations/__mixins__/ObserverMixin.js";
import { ObserverLike, ObserverLike_notify } from "../../../computations.js";
import { none } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";

import {
  QueueableLike,
  QueueableLike_enqueue,
  SchedulerLike_requestYield,
} from "../../../utils.js";
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
      instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      queue: QueueableLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, instance, delegate);
      init(ObserverMixin(), instance, delegate, delegate);
      init(LiftedObserverMixin(), instance, delegate);
      instance[EnqueueObserver_queue] = queue;

      return instance;
    },
    props<TProperties>({
      [EnqueueObserver_queue]: none,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
          this[SchedulerLike_requestYield]();
        }
        this[LiftedObserverLike_delegate][ObserverLike_notify](next);
      }),
    },
  );
})();

export default Observer_createEnqueueObserver;
