/// <reference types="./Enumerator.concatAll.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __ConcatEnumerator_inner } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { none, unsafeCast } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
import Enumerator_empty from "./Enumerator.empty.js";
const Enumerator_concatAll = /*@__PURE__*/ (() => {
    const createConcatAllEnumerator = createInstanceFactory(mix(include(Delegating_mixin()), function ConcatAllEnumerator(instance, delegate) {
        init(Delegating_mixin(), instance, delegate);
        instance[__ConcatEnumerator_inner] = Enumerator_empty();
        return instance;
    }, props({
        [__ConcatEnumerator_inner]: none,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[__ConcatEnumerator_inner][EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[__ConcatEnumerator_inner][EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move]() {
            const delegate = this[DelegatingLike_delegate];
            let inner = this[__ConcatEnumerator_inner];
            while (!inner[EnumeratorLike_move]()) {
                if (delegate[EnumeratorLike_move]()) {
                    inner = delegate[EnumeratorLike_current];
                    this[__ConcatEnumerator_inner] = inner;
                }
                else {
                    inner = Enumerator_empty();
                    this[__ConcatEnumerator_inner] = inner;
                    break;
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return () => (delegate) => createConcatAllEnumerator(delegate);
})();
export default Enumerator_concatAll;
