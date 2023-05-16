import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import Sink_pairwiseMixin from "../../Sink/__internal__/Sink.pairwiseMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { ObserverLike } from "../../types.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";

const Observer_createPairwiseObserver: <T>(
  delegate: ObserverLike<readonly [T, T]>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_delegatingMixin<T>(), Sink_pairwiseMixin()),
      function PairwiseObserver(
        instance: unknown,
        delegate: ObserverLike<readonly [T, T]>,
      ): ObserverLike<T> {
        init(Sink_pairwiseMixin<T>(), instance, delegate);
        init(Observer_delegatingMixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_pairwiseMixin<T>()),
    ),
  ))();

export default Observer_createPairwiseObserver;
