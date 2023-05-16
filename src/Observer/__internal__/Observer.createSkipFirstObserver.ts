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
  __SkipFirstObserver_count,
  __SkipFirstObserver_skipCount,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { ObserverLike, SinkLike_notify } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createSkipFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [__SkipFirstObserver_skipCount]: number;
    [__SkipFirstObserver_count]: number;
  };

  return createInstanceFactory(
    mix(
      include(
        Observer_delegatingMixin(),
        Disposable_delegatingMixin,
        Delegating_mixin(),
      ),
      function SkipFirstObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        skipCount: number,
      ): ObserverLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__SkipFirstObserver_skipCount] = skipCount;

        return instance;
      },
      props<TProperties>({
        [__SkipFirstObserver_skipCount]: 0,
        [__SkipFirstObserver_count]: 0,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<ObserverLike<T>> & ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          this[__SkipFirstObserver_count]++;
          if (
            this[__SkipFirstObserver_count] >
            this[__SkipFirstObserver_skipCount]
          ) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  );
})();

export default Observer_createSkipFirstObserver;
