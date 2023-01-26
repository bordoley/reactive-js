import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ObserverLike, SinkLike_notify } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Observer$mixin from "./Observer.mixin";

const Observer$create: <T>(scheduler: SchedulerLike) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = Observer$mixin<T>();

    return createInstanceFactory(
      mix(
        include(Disposable$mixin, typedObserverMixin),
        function Observer(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify>,
          scheduler: SchedulerLike,
        ): ObserverLike<T> {
          init(Disposable$mixin, instance);
          init(typedObserverMixin, instance, scheduler);

          return instance;
        },
        {},
        {
          [SinkLike_notify](_: T) {},
        },
      ),
    );
  })();

export default Observer$create;
