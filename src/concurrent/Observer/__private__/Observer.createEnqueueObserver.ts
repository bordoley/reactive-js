import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike_requestYield,
} from "../../../concurrent.js";
import { none } from "../../../functions.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { QueueableLike, QueueableLike_enqueue } from "../../../utils.js";
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
    include(ObserverMixin(), DelegatingDisposableMixin<ObserverLike<T>>()),
    function EnqueueObserver(
      instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      queue: QueueableLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin<ObserverLike<T>>(), instance, delegate);
      init(ObserverMixin(), instance, delegate, delegate);
      instance[EnqueueObserver_queue] = queue;

      return instance;
    },
    props<TProperties>({
      [EnqueueObserver_queue]: none,
    }),
    {
      [ObserverLike_notify](
        this: TProperties &
          DelegatingDisposableLike<ObserverLike<T>> &
          ObserverLike<T>,
        next: T,
      ) {
        Observer_assertObserverState(this);

        if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
          this[SchedulerLike_requestYield]();
        }
        this[DelegatingDisposableLike_delegate][ObserverLike_notify](next);
      },
    },
  );
})();

export default Observer_createEnqueueObserver;
