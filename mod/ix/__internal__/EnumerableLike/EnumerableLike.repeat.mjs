/// <reference types="./EnumerableLike.repeat.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ContainerLike__repeat from '../../../containers/__internal__/ContainerLike/ContainerLike.repeat.mjs';
import { none, isNone, pipe, error, unsafeCast, raise } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import EnumeratorLike__hasCurrent from '../EnumeratorLike/EnumeratorLike.hasCurrent.mjs';
import EnumeratorLike__move from '../EnumeratorLike/EnumeratorLike.move.mjs';
import EnumerableLike__create from './EnumerableLike.create.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';

const EnumerableLike__repeat = 
/*@__PURE__*/ (() => {
    const createRepeatEnumerator = createInstanceFactory(mix(include(DisposableLike__mixin), function RepeatEnumerator(instance, src, shouldRepeat) {
        init(DisposableLike__mixin, instance);
        instance.src = src;
        instance.shouldRepeat = shouldRepeat;
        return instance;
    }, props({
        count: 0,
        enumerator: none,
        shouldRepeat: none,
        src: none,
    }), {
        [SourceLike_move]() {
            if (isNone(this.enumerator)) {
                this.enumerator = pipe(this.src, EnumerableLike__enumerate(), DisposableLike__addTo(this));
            }
            let { enumerator } = this;
            while (!EnumeratorLike__move(enumerator)) {
                this.count++;
                try {
                    if (this.shouldRepeat(this.count)) {
                        enumerator = pipe(this.src, EnumerableLike__enumerate(), DisposableLike__addTo(this));
                        this.enumerator = enumerator;
                    }
                    else {
                        break;
                    }
                }
                catch (e) {
                    pipe(this, DisposableLike__dispose(error(e)));
                    break;
                }
            }
        },
        get [EnumeratorLike_current]() {
            var _a, _b;
            unsafeCast(this);
            return EnumeratorLike__hasCurrent(this)
                ? (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_current]) !== null && _b !== void 0 ? _b : raise()
                : raise();
        },
        get [EnumeratorLike_hasCurrent]() {
            var _a, _b;
            unsafeCast(this);
            return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_hasCurrent]) !== null && _b !== void 0 ? _b : false;
        },
    }));
    return ContainerLike__repeat((delegate, predicate) => EnumerableLike__create(() => createRepeatEnumerator(delegate, predicate)));
})();

export { EnumerableLike__repeat as default };
