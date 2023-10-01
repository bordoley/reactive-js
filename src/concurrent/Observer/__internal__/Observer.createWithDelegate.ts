import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { bindMethod, none } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";

const Observer_createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [SinkLike_notify](next: T): void;
    };
    return createInstanceFactory(
      mix(
        include(DisposableMixin, ObserverMixin<T>()),
        function DelegatingObserver(
          instance: TProperties,
          delegate: ObserverLike<T>,
        ): ObserverLike<T> {
          init(DisposableMixin, instance);
          init(ObserverMixin(), instance, delegate, delegate);
          instance[SinkLike_notify] = bindMethod(delegate, SinkLike_notify);

          return instance;
        },
        props<TProperties>({
          [SinkLike_notify]: none,
        }),
        {},
      ),
    );
  })();

export default Observer_createWithDelegate;
