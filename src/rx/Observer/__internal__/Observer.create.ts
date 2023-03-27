import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_create: <T>(
  scheduler: SchedulerLike,
  capacity: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = Observer_mixin<T>();

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, typedObserverMixin),
      function Observer(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify>,
        scheduler: SchedulerLike,
        capacity: number,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, scheduler, capacity);

        return instance;
      },
      {},
      {
        [ObserverLike_notify](this: ObserverLike, _: T) {
          Observer_assertState(this);
        },
      },
    ),
  );
})();

export default Observer_create;
