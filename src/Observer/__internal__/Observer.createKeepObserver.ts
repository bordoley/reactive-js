import Sink_keepMixin from "../../Sink/__internal__/Sink.keepMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Predicate } from "../../functions.js";
import { ObserverLike } from "../../types.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createKeepObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_mixin(), Sink_keepMixin()),
      function KeepObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(Sink_keepMixin<T>(), instance, delegate, predicate);
        init(Observer_mixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_keepMixin<T>()),
    ),
  ))();

export default Observer_createKeepObserver;
