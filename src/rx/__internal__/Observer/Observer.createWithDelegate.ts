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
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Observer$getScheduler from "./Observer.getScheduler";
import Observer$mixin from "./Observer.mixin";

const Observer$createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = Observer$mixin<T>();

    type TProperties = {
      delegate: ObserverLike<T>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable$mixin, typedObserverMixin),
        function DelegatingObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          observer: ObserverLike<T>,
        ): ObserverLike<T> {
          init(Disposable$mixin, instance);
          init(typedObserverMixin, instance, Observer$getScheduler(observer));

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

export default Observer$createWithDelegate;
