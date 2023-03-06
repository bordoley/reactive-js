import { __DEV__ } from "../../../__internal__/constants.js";
import { MixinPrototype, getPrototype } from "../../../__internal__/mixins.js";
import { call } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import Observer_assertState from "./Observer.assertState.js";

const Observer_decorateNotifyForDev = <TThis extends ObserverLike, TNext>(
  mixin: MixinPrototype<{
    [ObserverLike_notify](this: TThis, next: TNext): void;
  }>,
) =>
  __DEV__
    ? {
        [ObserverLike_notify](this: TThis, next: TNext) {
          Observer_assertState(this);
          call(getPrototype(mixin)[ObserverLike_notify], this, next);
        },
      }
    : {};

export default Observer_decorateNotifyForDev;
