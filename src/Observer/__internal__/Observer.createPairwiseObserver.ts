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
import Observer_mixin from "./Observer.mixin.js";

const Observer_createPairwiseObserver: <T>(
  delegate: ObserverLike<readonly [T, T]>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_mixin<T>(), Sink_pairwiseMixin()),
      function PairwiseObserver(
        instance: unknown,
        delegate: ObserverLike<readonly [T, T]>,
      ): ObserverLike<T> {
        init(Sink_pairwiseMixin<T>(), instance, delegate);
        init(Observer_mixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_pairwiseMixin<T>()),
    ),
  ))();

export default Observer_createPairwiseObserver;
