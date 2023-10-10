/// <reference types="./Observer.decorateNotifyWithStateAssert.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { getPrototype } from "../../../__internal__/mixins.js";
import { call } from "../../../functions.js";
import { SinkLike_notify } from "../../../utils.js";
import Observer_assertState from "./Observer.assertState.js";
const Observer_decorateNotifyWithStateAssert = (mixin) => __DEV__
    ? {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            call(getPrototype(mixin)[SinkLike_notify], this, next);
        },
    }
    : getPrototype(mixin);
export default Observer_decorateNotifyWithStateAssert;
