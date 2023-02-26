/// <reference types="./Observer.decorateNotifyForDev.d.ts" />

import { getPrototype } from "../../../__internal__/mixins.js";
import { __DEV__ } from "../../../constants.js";
import { call } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import Observer_assertState from "./Observer.assertState.js";
const Observer_decorateNotifyForDev = (mixin) => __DEV__
    ? {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            call(getPrototype(mixin)[SinkLike_notify], this, next);
        },
    }
    : {};
export default Observer_decorateNotifyForDev;
