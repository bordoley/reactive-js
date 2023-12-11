import { __DEV__ } from "../../__internal__/constants.js";
import {
  Mixin_properties,
  PartialMixin,
  getPrototype,
  include,
  mix,
} from "../../__internal__/mixins.js";
import { ObserverLike } from "../../concurrent.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
import { call, raiseWithDebugMessage } from "../../functions.js";
import Observer_assertState from "../Observer/__private__/Observer.assertState.js";

const decorateNotifyWithObserverStateAssert = <This extends ObserverLike<T>, T>(
  // FIXME: Ideally this would be an overload supporting Mixin1 through Mixin6
  mixin: PartialMixin<Pick<SinkLike<T>, typeof SinkLike_notify>>,
): PartialMixin<Pick<SinkLike<T>, typeof SinkLike_notify>> =>
  __DEV__
    ? mix(
        include(mixin),
        function DecorateNotifyWithObserverStateAssert(instance: unknown) {
          raiseWithDebugMessage("should never be called");
          return instance;
        },
        mixin[Mixin_properties],
        {
          [SinkLike_notify](this: This, next: T) {
            Observer_assertState(this);
            call(getPrototype(mixin)[SinkLike_notify], this, next);
          },
        },
      )
    : mixin;

export default decorateNotifyWithObserverStateAssert;
