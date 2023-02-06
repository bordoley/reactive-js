import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ObserverLike, SinkLike_notify } from "../../../rx";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Observer_getScheduler from "./Observer.getScheduler";
import Observer_mixin from "./Observer.mixin";

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
          [SinkLike_notify](this: DelegatingLike<ObserverLike<T>>, next: T) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          },
        },
      ),
    ))();

export default Observer_createWithDelegate;
