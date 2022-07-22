/// <reference types="./SerialDisposable.d.ts" />
import { disposed } from '../../util/DisposableLike.mjs';
import { MutableRefLike_current } from './MutableRefLike.mjs';

const SerialDisposable_private_current = Symbol("SerialDisposable_private_current");
const properties = {
    [SerialDisposable_private_current]: disposed,
};
const prototype = {
    get [MutableRefLike_current]() {
        const self = this;
        return self[SerialDisposable_private_current];
    },
    set [MutableRefLike_current](v) {
        const self = this;
        self[SerialDisposable_private_current] = v;
    },
};
const init = (self, defaultValue) => {
    self[SerialDisposable_private_current] = defaultValue;
};

export { init, properties, prototype };
