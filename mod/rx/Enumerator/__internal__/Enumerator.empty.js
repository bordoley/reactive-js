/// <reference types="./Enumerator.empty.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import { EnumeratorLike_move } from "../../../rx.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import MutableEnumerator_mixin from "./MutableEnumerator.mixin.js";
const Enumerator_empty = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function EmptyEnumerator(instance) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        return instance;
    }, {}, {
        [EnumeratorLike_move]() {
            pipe(this, Disposable_dispose());
        },
    }));
})();
export default Enumerator_empty;
