/// <reference types="./SerialDisposableMixin.d.ts" />

import { mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none, pipe, returns } from "../../functions.js";
import { DisposableLike_dispose, SerialDisposableLike_current, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
const SerialDisposableMixin = /*@__PURE__*/ (() => {
    const SerialDisposableMixin_current = Symbol("SerialDisposableMixin_current");
    return returns(mix(function SerialDisposableMixin(defaultValue) {
        this[SerialDisposableMixin_current] = defaultValue;
        pipe(this, Disposable.add(defaultValue));
        return this;
    }, props({
        [SerialDisposableMixin_current]: none,
    }), proto({
        get [SerialDisposableLike_current]() {
            unsafeCast(this);
            return this[SerialDisposableMixin_current];
        },
        set [SerialDisposableLike_current](v) {
            unsafeCast(this);
            const oldValue = this[SerialDisposableMixin_current];
            oldValue[DisposableLike_dispose]();
            this[SerialDisposableMixin_current] = v;
            pipe(this, Disposable.add(v));
        },
    })));
})();
export default SerialDisposableMixin;
