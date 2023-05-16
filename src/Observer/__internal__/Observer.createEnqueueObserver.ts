import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __EnqueueObserver_queue } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { none } from "../../functions.js";
import {
  ObserverLike,
  QueueableLike,
  QueueableLike_enqueue,
  SchedulerLike_requestYield,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createEnqueueObserver: <T>(
  delegate: ObserverLike<T>,
  queue: QueueableLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [__EnqueueObserver_queue]: QueueableLike<T>;
  };

  return createInstanceFactory(
    mix(
      include(
        Observer_delegatingMixin(),
        Disposable_delegatingMixin,
        Delegating_mixin(),
      ),
      function EnqueueObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        queue: QueueableLike<T>,
      ): ObserverLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__EnqueueObserver_queue] = queue;

        return instance;
      },
      props<TProperties>({
        [__EnqueueObserver_queue]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<ObserverLike<T>> & ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          if (!this[__EnqueueObserver_queue][QueueableLike_enqueue](next)) {
            this[SchedulerLike_requestYield]();
          }
          this[DelegatingLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  );
})();

export default Observer_createEnqueueObserver;
