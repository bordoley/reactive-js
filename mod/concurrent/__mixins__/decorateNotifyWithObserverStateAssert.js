/// <reference types="./decorateNotifyWithObserverStateAssert.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { Mixin_properties, getPrototype, include, mix, } from "../../__internal__/mixins.js";
import { SinkLike_notify } from "../../events.js";
import { call, raiseWithDebugMessage } from "../../functions.js";
import Observer_assertState from "../Observer/__private__/Observer.assertState.js";
const decorateNotifyWithObserverStateAssert = (
// FIXME: Ideally this would be an overload supporting Mixin1 through Mixin6
mixin) => __DEV__
    ? mix(include(mixin), function DecorateNotifyWithObserverStateAssert(instance) {
        raiseWithDebugMessage("should never be called");
        return instance;
    }, mixin[Mixin_properties], {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            call(getPrototype(mixin)[SinkLike_notify], this, next);
        },
    })
    : mixin;
export default decorateNotifyWithObserverStateAssert;
