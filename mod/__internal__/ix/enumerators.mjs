/// <reference types="./enumerators.d.ts" />
import { hasCurrent, EnumeratorLike_hasCurrent, EnumeratorLike_current } from '../../ix/EnumeratorLike.mjs';
import '../../ix/InteractiveSourceLike.mjs';
import { isDisposed } from '../../util/DisposableLike.mjs';
import { raise, pipe } from '../../util/functions.mjs';
import { addGetter, addProperty } from '../util/mixins.mjs';

const EnumeratorMixin_current = Symbol("EnumeratorMixin_current");
const EnumeratorMixin_hasCurrent = Symbol("EnumeratorMixin_hasCurrent");
function getCurrent() {
    return hasCurrent(this) ? this[EnumeratorMixin_current] : raise();
}
function setCurrent(v) {
    if (!isDisposed(this)) {
        this[EnumeratorMixin_current] = v;
        this[EnumeratorMixin_hasCurrent] = true;
    }
}
function getHasCurrent() {
    return !isDisposed(this) && this[EnumeratorMixin_hasCurrent];
}
const mixinEnumerator = () => (Constructor) => pipe(Constructor, addGetter(EnumeratorLike_hasCurrent, getHasCurrent), addProperty(EnumeratorLike_current, {
    get: getCurrent,
    set: setCurrent,
}));

export { EnumeratorMixin_current, EnumeratorMixin_hasCurrent, mixinEnumerator };
