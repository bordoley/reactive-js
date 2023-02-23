/// <reference types="./Enumerable.map.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_map from "../../../containers/StatefulContainer/__internal__/StatefulContainer.map.js";
import { error, none, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move, } from "../../../ix.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_map = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const MapEnumerator_mapper = Symbol("MapEnumerator_mapper");
    return pipe(createInstanceFactory(mix(include(Disposable_delegatingMixin(), typedMutableEnumeratorMixin), function MapEnumerator(instance, delegate, mapper) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance[MapEnumerator_mapper] = mapper;
        return instance;
    }, props({
        [MapEnumerator_mapper]: none,
    }), {
        [SourceLike_move]() {
            const { [DelegatingLike_delegate]: delegate } = this;
            delegate[SourceLike_move]();
            if (!delegate[EnumeratorLike_hasCurrent]) {
                return;
            }
            try {
                this[EnumeratorLike_current] = this[MapEnumerator_mapper](delegate[EnumeratorLike_current]);
            }
            catch (e) {
                pipe(this, Disposable_dispose(error(e)));
            }
        },
    })), StatefulContainer_map(Enumerable_lift));
})();
export default Enumerable_map;
