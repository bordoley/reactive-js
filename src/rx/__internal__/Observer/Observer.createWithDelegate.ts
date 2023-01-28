import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { none } from "../../../functions";
import { ObserverLike, SinkLike_notify } from "../../../rx";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Observer_getScheduler from "./Observer.getScheduler";
import Observer_mixin from "./Observer.mixin";

const Observer_createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = Observer_mixin<T>();

    const DelegatingObserver_delegate = Symbol("DelegatingObserver_delegate");

    type TProperties = {
      [DelegatingObserver_delegate]: ObserverLike<T>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_mixin, typedObserverMixin),
        function DelegatingObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          observer: ObserverLike<T>,
        ): ObserverLike<T> {
          init(Disposable_mixin, instance);
          init(typedObserverMixin, instance, Observer_getScheduler(observer));

          instance[DelegatingObserver_delegate] = observer;

          return instance;
        },
        props<TProperties>({
          [DelegatingObserver_delegate]: none,
        }),
        {
          [SinkLike_notify](this: TProperties, next: T) {
            this[DelegatingObserver_delegate][SinkLike_notify](next);
          },
        },
      ),
    );
  })();

export default Observer_createWithDelegate;
