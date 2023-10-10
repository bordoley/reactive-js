import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1, none } from "../../../functions.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  SinkLike_notify,
} from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";

const Observer_createForEachObserver: <T>(
  delegate: ObserverLike<T>,
  effect: SideEffect1<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const ForEachObserver_effect = Symbol("ForEachObserver_effect");

  interface TProperties {
    [ForEachObserver_effect]: SideEffect1<T>;
  }

  return createInstanceFactory(
    mix(
      include(ObserverMixin(), DelegatingDisposableMixin<ObserverLike<T>>()),
      function ForEachObserver(
        instance: TProperties,
        delegate: ObserverLike<T>,
        effect: SideEffect1<T>,
      ): ObserverLike<T> {
        init(DelegatingDisposableMixin<ObserverLike<T>>(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[ForEachObserver_effect] = effect;

        return instance;
      },
      props<TProperties>({
        [ForEachObserver_effect]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingDisposableLike<ObserverLike<T>>,
          next: T,
        ) {
          this[ForEachObserver_effect](next);
          this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  );
})();

export default Observer_createForEachObserver;
