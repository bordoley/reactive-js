import Sink_takeFirstMixin from "../../Sink/__internal__/Sink.takeFirstMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";

import { ObserverLike } from "../../types.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createTakeFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Sink_takeFirstMixin()),
      function TakeFirstObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        takeCount: number,
      ): ObserverLike<T> {
        init(Sink_takeFirstMixin<T>(), instance, delegate, takeCount);
        init(Observer_delegatingMixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_takeFirstMixin<T>()),
    ),
  ))();

export default Observer_createTakeFirstObserver;
