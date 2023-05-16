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
import {
  __TakeFirstObserver_count,
  __TakeFirstObserver_takeCount,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createTakeFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [__TakeFirstObserver_takeCount]: number;
    [__TakeFirstObserver_count]: number;
  };

  return createInstanceFactory(
    mix(
      include(
        Observer_delegatingMixin(),
        Disposable_delegatingMixin,
        Delegating_mixin(),
      ),
      function TakeFirstObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        takeCount: number,
      ): ObserverLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__TakeFirstObserver_takeCount] = takeCount;

        if (takeCount === 0) {
          instance[DisposableLike_dispose]();
        }

        return instance;
      },
      props<TProperties>({
        [__TakeFirstObserver_count]: 0,
        [__TakeFirstObserver_takeCount]: 0,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<ObserverLike<T>> & ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          this[__TakeFirstObserver_count]++;
          this[DelegatingLike_delegate][SinkLike_notify](next);
          if (
            this[__TakeFirstObserver_count] >=
            this[__TakeFirstObserver_takeCount]
          ) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  );
})();

export default Observer_createTakeFirstObserver;
