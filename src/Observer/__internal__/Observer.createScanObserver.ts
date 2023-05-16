import Sink_scanMixin from "../../Sink/__internal__/Sink.scanMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Factory, Reducer } from "../../functions.js";
import { ObserverLike } from "../../types.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createScanObserver: <T, TAcc>(
  delegate: ObserverLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObserverLike<T> = /*@__PURE__*/ (<T, TAcc>() => {
  return createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Sink_scanMixin()),
      function ScanObserver(
        instance: unknown,
        delegate: ObserverLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): ObserverLike<T> {
        init(
          Sink_scanMixin<T, TAcc>(),
          instance,
          delegate,
          reducer,
          initialValue,
        );
        init(Observer_delegatingMixin(), instance, delegate, delegate);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_scanMixin<T, TAcc>()),
    ),
  );
})();

export default Observer_createScanObserver;
