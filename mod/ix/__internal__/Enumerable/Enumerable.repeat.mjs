/// <reference types="./Enumerable.repeat.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import Container_repeat from '../../../containers/__internal__/Container/Container.repeat.mjs';
import { none, isNone, pipe, error, unsafeCast, raiseWithDebugMessage } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Enumerator_hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator_move from '../Enumerator/Enumerator.move.mjs';
import Enumerable_create from './Enumerable.create.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';

const Enumerable_repeat = /*@__PURE__*/ (() => {
    const createRepeatEnumerator = createInstanceFactory(mix(include(Disposable_mixin), function RepeatEnumerator(instance, src, shouldRepeat) {
        init(Disposable_mixin, instance);
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
                this.enumerator = pipe(this.src, Enumerable_enumerate(), Disposable_addTo(this));
            }
            let { enumerator } = this;
            while (!Enumerator_move(enumerator)) {
                this.count++;
                try {
                    if (this.shouldRepeat(this.count)) {
                        enumerator = pipe(this.src, Enumerable_enumerate(), Disposable_addTo(this));
                        this.enumerator = enumerator;
                    }
                    else {
                        break;
                    }
                }
                catch (e) {
                    pipe(this, Disposable_dispose(error(e)));
                    break;
                }
            }
        },
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return Enumerator_hasCurrent(this)
                ? this.enumerator[EnumeratorLike_current]
                : raiseWithDebugMessage("Enumerator does not have current value");
        },
        get [EnumeratorLike_hasCurrent]() {
            var _a, _b;
            unsafeCast(this);
            return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_hasCurrent]) !== null && _b !== void 0 ? _b : false;
        },
    }));
    return Container_repeat((delegate, predicate) => Enumerable_create(() => createRepeatEnumerator(delegate, predicate)));
})();

export { Enumerable_repeat as default };
