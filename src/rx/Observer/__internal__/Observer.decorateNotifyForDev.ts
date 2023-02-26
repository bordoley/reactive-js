import { MixinPrototype, getPrototype } from "../../../__internal__/mixins.js";
import { __DEV__ } from "../../../constants.js";
import { call } from "../../../functions.js";
import { ObserverLike, SinkLike_notify } from "../../../rx.js";
import Observer_assertState from "./Observer.assertState.js";

const Observer_decorateNotifyForDev = <TThis extends ObserverLike, TNext>(
  mixin: MixinPrototype<{
    [SinkLike_notify](this: TThis, next: TNext): void;
  }>,
) =>
  __DEV__
    ? {
        [SinkLike_notify](this: TThis, next: TNext) {
          Observer_assertState(this);
          call(getPrototype(mixin)[SinkLike_notify], this, next);
        },
      }
    : {};

export default Observer_decorateNotifyForDev;
