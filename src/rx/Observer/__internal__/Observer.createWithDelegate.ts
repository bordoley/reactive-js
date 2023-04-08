import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { bindMethod, none } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createWithDelegate: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [ObserverLike_notify](next: T): void;
    };
    return createInstanceFactory(
      mix(
        include(Observer_mixin<T>()),
        function DelegatingObserver(
          instance: TProperties,
          delegate: ObserverLike<T>,
        ): ObserverLike<T> {
          init(Observer_mixin(), instance, delegate, delegate);
          instance[ObserverLike_notify] = bindMethod(
            delegate,
            ObserverLike_notify,
          );

          return instance;
        },
        props<TProperties>({
          [ObserverLike_notify]: none,
        }),
        {},
      ),
    );
  })();

export default Observer_createWithDelegate;
