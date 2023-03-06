/// <reference types="./Observer.decorateNotifyForDev.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { getPrototype } from "../../../__internal__/mixins.js";
import { call } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Observer_assertState from "./Observer.assertState.js";
const Observer_decorateNotifyForDev = (mixin) => __DEV__
    ? {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            call(getPrototype(mixin)[ObserverLike_notify], this, next);
        },
    }
    : {};
export default Observer_decorateNotifyForDev;
