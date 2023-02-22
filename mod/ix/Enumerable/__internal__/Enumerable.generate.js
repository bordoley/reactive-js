/// <reference types="./Enumerable.generate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe } from "../../../functions.js";
import { EnumeratorLike_current, SourceLike_move, } from "../../../ix.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import Enumerable_create from "./Enumerable.create.js";
const Enumerable_generate = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const GenerateEnumerator_generator = Symbol("GenerateEnumerator_generator");
    const createGenerateEnumerator = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function GenerateEnumerator(instance, f, acc) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance[GenerateEnumerator_generator] = f;
        instance[EnumeratorLike_current] = acc;
        return instance;
    }, props({ [GenerateEnumerator_generator]: none }), {
        [SourceLike_move]() {
            if (!Disposable_isDisposed(this)) {
                try {
                    this[EnumeratorLike_current] = this[GenerateEnumerator_generator](this[EnumeratorLike_current]);
                }
                catch (e) {
                    pipe(this, Disposable_dispose(error(e)));
                }
            }
        },
    }));
    return (generator, initialValue) => Enumerable_create(() => createGenerateEnumerator(generator, initialValue()));
})();
export default Enumerable_generate;
