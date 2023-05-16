import Sink_mapMixin from "../../Sink/__internal__/Sink.mapMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";

import { Function1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createMapObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Sink_mapMixin()),
      function MapObserver(
        instance: unknown,
        delegate: ObserverLike<TB>,
        selector: Function1<TA, TB>,
      ): ObserverLike<TA> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Sink_mapMixin<TA, TB>(), instance, delegate, selector);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(Sink_mapMixin<TA, TB>()),
    ),
  ))();

export default Observer_createMapObserver;
