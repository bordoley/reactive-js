/// <reference types="./DisposableRefLike.d.ts" />
import { pipe } from '../../functions.mjs';
import { disposed } from '../../util.mjs';
import { add } from '../../util/DisposableLike.mjs';
import { MutableRefLike_current } from './MutableRefLike.mjs';
import { Object_properties, Object_init } from './Object.mjs';
import { dispose } from './DisposableLikeInternal.mjs';

const DisposableRef_private_current = Symbol("DisposableRef_private_current");
const properties = {
    [DisposableRef_private_current]: disposed,
};
const prototype = {
    [Object_properties]: properties,
    [Object_init](defaultValue) {
        this[DisposableRef_private_current] = defaultValue;
        pipe(this, add(defaultValue));
    },
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
};

export { prototype };
