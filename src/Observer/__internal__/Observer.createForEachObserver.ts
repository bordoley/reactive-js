import Sink_forEachMixin from "../../Sink/__internal__/Sink.forEachMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { SideEffect1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createForEachObserver: <T>(
  delegate: ObserverLike<T>,
  effect: SideEffect1<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_mixin(), Sink_forEachMixin()),
      function ForEachObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        effect: SideEffect1<T>,
      ): ObserverLike<T> {
        init(Observer_mixin(), instance, delegate, delegate);
        init(Sink_forEachMixin(), instance, delegate, effect);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_forEachMixin<T>()),
    ),
  ))();

export default Observer_createForEachObserver;
