import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import MapSinkMixin from "../../../events/__mixins__/MapSinkMixin.js";
import { Function1 } from "../../../functions.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";

const Observer_createMapObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  createInstanceFactory(
    mix(
      include(ObserverMixin(), MapSinkMixin()),
      function MapObserver(
        instance: unknown,
        delegate: ObserverLike<TB>,
        selector: Function1<TA, TB>,
      ): ObserverLike<TA> {
        init(ObserverMixin(), instance, delegate, delegate);
        init(MapSinkMixin<TA, TB>(), instance, delegate, selector);

        return instance;
      },
      props({}),
      Observer_decorateNotifyWithStateAssert(MapSinkMixin<TA, TB>()),
    ),
  ))();

export default Observer_createMapObserver;
