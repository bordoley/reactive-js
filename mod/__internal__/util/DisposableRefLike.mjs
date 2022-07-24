/// <reference types="./DisposableRefLike.d.ts" />
import { disposed, add } from '../../util/DisposableLike.mjs';
import { pipe } from '../../util/functions.mjs';
import { MutableRefLike_current } from './MutableRefLike.mjs';
import { Object_init } from './Object.mjs';
import { dispose } from './DisposableLike.mjs';

const DisposableRef_private_current = Symbol("DisposableRef_private_current");
const properties = {
    [DisposableRef_private_current]: disposed,
};
const prototype = {
    get [MutableRefLike_current]() {
        const self = this;
        return self[DisposableRef_private_current];
    },
    set [MutableRefLike_current](v) {
        const self = this;
        const oldValue = self[DisposableRef_private_current];
        pipe(oldValue, dispose());
        self[DisposableRef_private_current] = v;
        pipe(self, add(v));
    },
    [Object_init](defaultValue) {
        this[DisposableRef_private_current] = defaultValue;
        pipe(this, add(defaultValue));
    },
};

export { properties, prototype };
