import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, SinkLike_notify } from "../../../rx.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_getScheduler from "./Observer.getScheduler.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() =>
    createInstanceFactory(
      mix(
        include(Disposable_mixin, Observer_mixin<T>(), delegatingMixin()),
        function DelegatingObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify>,
          observer: ObserverLike<T>,
        ): ObserverLike<T> {
          init(Disposable_mixin, instance);
          init(Observer_mixin<T>(), instance, Observer_getScheduler(observer));
          init(delegatingMixin(), instance, observer);

          return instance;
        },
        props({}),
        {
          [SinkLike_notify](
            this: DelegatingLike<ObserverLike<T>> & ObserverLike,
            next: T,
          ) {
            Observer_assertState(this);
            this[DelegatingLike_delegate][SinkLike_notify](next);
          },
        },
      ),
    ))();

export default Observer_createWithDelegate;
