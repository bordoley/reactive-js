import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../concurrent.js";
import { bindMethod, none } from "../../../functions.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";

const Observer_createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [ObserverLike_notify](next: T): void;
    };
    return mixInstanceFactory(
      include(DisposableMixin, ObserverMixin<T>()),
      function DelegatingObserver(
        instance: TProperties,
        delegate: ObserverLike<T>,
      ): ObserverLike<T> {
        init(DisposableMixin, instance);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[ObserverLike_notify] = bindMethod(
          delegate,
          ObserverLike_notify,
        );

        return instance;
      },
      props<TProperties>({
        [ObserverLike_notify]: none,
      }),
    );
  })();

export default Observer_createWithDelegate;
