import Sink_takeWhileMixin from "../../Sink/__internal__/Sink.takeWhileMixin.js";
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

const Observer_createTakeWhileObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
  inclusive: boolean,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Sink_takeWhileMixin(), Observer_mixin()),
      function TakeWhileObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): ObserverLike<T> {
        init(
          Sink_takeWhileMixin<T>(),
          instance,
          delegate,
          predicate,
          inclusive,
        );
        init(Observer_mixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_takeWhileMixin<T>()),
    ),
  ))();

export default Observer_createTakeWhileObserver;
