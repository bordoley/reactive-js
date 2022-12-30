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
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import ObserverLike__getScheduler from "./ObserverLike.getScheduler";
import ObserverLike__mixin from "./ObserverLike.mixin";

const createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = ObserverLike__mixin<T>();

    type TProperties = {
      delegate: ObserverLike<T>;
    };

    return createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedObserverMixin),
        function DelegatingObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          observer: ObserverLike<T>,
        ): ObserverLike<T> {
          init(DisposableLike__mixin, instance);
          init(
            typedObserverMixin,
            instance,
            ObserverLike__getScheduler(observer),
          );

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

export default createWithDelegate;
