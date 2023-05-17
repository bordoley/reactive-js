import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Equality } from "../../functions.js";
import { ObserverLike } from "../../types.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createDistinctUntilChangedObserver: <T>(
  delegate: ObserverLike<T>,
  equality: Equality<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_mixin(), Sink_distinctUntilChangedMixin()),
      function DistinctUntilChangedObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        equality: Equality<T>,
      ): ObserverLike<T> {
        init(Sink_distinctUntilChangedMixin(), instance, delegate, equality);
        init(Observer_mixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(
        Sink_distinctUntilChangedMixin<T>(),
      ),
    ),
  ))();

export default Observer_createDistinctUntilChangedObserver;
