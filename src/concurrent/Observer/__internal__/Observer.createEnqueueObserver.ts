import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ObserverLike,
  SchedulerLike_requestYield,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none } from "../../../functions.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  QueueableLike,
  QueueableLike_enqueue,
} from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertState from "./Observer.assertState.js";

const Observer_createEnqueueObserver: <T>(
  delegate: ObserverLike<T>,
  queue: QueueableLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const EnqueueObserver_queue = Symbol("EnqueueObserver_queue");

  type TProperties = {
    readonly [EnqueueObserver_queue]: QueueableLike<T>;
  };

  return createInstanceFactory(
    mix(
      include(ObserverMixin(), DelegatingDisposableMixin<ObserverLike<T>>()),
      function EnqueueObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
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
        [SinkLike_notify](
          this: TProperties &
            DelegatingDisposableLike<ObserverLike<T>> &
            ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          if (!this[EnqueueObserver_queue][QueueableLike_enqueue](next)) {
            this[SchedulerLike_requestYield]();
          }
          this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  );
})();

export default Observer_createEnqueueObserver;
