import Sink_skipFirstMixin from "../../Sink/__internal__/Sink.skipFirstMixin.js";
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

const Observer_createSkipFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Sink_skipFirstMixin()),
      function SkipFirstObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        skipCount: number,
      ): ObserverLike<T> {
        init(Sink_skipFirstMixin<T>(), instance, delegate, skipCount);
        init(Observer_delegatingMixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_skipFirstMixin<T>()),
    ),
  ))();

export default Observer_createSkipFirstObserver;
