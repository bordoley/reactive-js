/// <reference types="./decorateNotifyWithObserverStateAssert.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { Mixin_init, Mixin_properties, getPrototype, include, mix, } from "../../__internal__/mixins.js";
import { ObserverLike_notify, SchedulerLike_inContinuation, } from "../../concurrent.js";
import { call, raiseIf } from "../../functions.js";
import { DisposableLike_isDisposed } from "../../utils.js";
const decorateNotifyWithObserverStateAssert = ((mixin) => {
    return __DEV__
        ? mix(include(mixin), mixin[Mixin_init], mixin[Mixin_properties], {
            [ObserverLike_notify](next) {
                raiseIf(!this[SchedulerLike_inContinuation] ||
                    this[DisposableLike_isDisposed], "Notifying an observer in an invalid state");
                call(getPrototype(mixin)[ObserverLike_notify], this, next);
            },
        })
        : mixin;
});
export default decorateNotifyWithObserverStateAssert;
