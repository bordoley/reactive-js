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

    type TProperties = {
      delegate: ObserverLike<T>;
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

          instance.delegate = observer;

          return instance;
        },
        props<TProperties>({
          delegate: none,
        }),
        {
          [SinkLike_notify](this: TProperties, next: T) {
            this.delegate[SinkLike_notify](next);
          },
        },
      ),
    );
  })();

export default Observer_createWithDelegate;
