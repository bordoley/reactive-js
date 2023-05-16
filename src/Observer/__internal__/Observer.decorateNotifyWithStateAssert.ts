import { __DEV__ } from "../../__internal__/constants.js";
import { MixinPrototype, getPrototype } from "../../__internal__/mixins.js";
import { call } from "../../functions.js";
import { ObserverLike, SinkLike, SinkLike_notify } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";

const Observer_decorateNotifyWithStateAssert = <
  This extends ObserverLike<T>,
  T,
>(
  mixin: MixinPrototype<Pick<SinkLike<T>, typeof SinkLike_notify>>,
): object =>
  __DEV__
    ? {
        [SinkLike_notify](this: This, next: T) {
          Observer_assertState(this);
          call(getPrototype(mixin)[SinkLike_notify], this, next);
        },
      }
    : {};

export default Observer_decorateNotifyWithStateAssert;
