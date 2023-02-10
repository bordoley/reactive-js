import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ObserverLike, SinkLike_notify } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Observer_mixin from "./Observer.mixin";

const Observer_create: <T>(scheduler: SchedulerLike) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = Observer_mixin<T>();

    return createInstanceFactory(
      mix(
        include(Disposable_mixin, typedObserverMixin),
        function Observer(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify>,
          scheduler: SchedulerLike,
        ): ObserverLike<T> {
          init(Disposable_mixin, instance);
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

export default Observer_create;
