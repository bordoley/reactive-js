import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ObserverLike, SinkLike_notify } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import ObserverLike__mixin from "./ObserverLike.mixin";

const create: <T>(scheduler: SchedulerLike) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = ObserverLike__mixin<T>();

    return createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedObserverMixin),
        function Observer(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify>,
          scheduler: SchedulerLike,
        ): ObserverLike<T> {
          init(DisposableLike__mixin, instance);
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

export default create;
