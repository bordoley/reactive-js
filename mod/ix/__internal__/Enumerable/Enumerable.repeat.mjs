/// <reference types="./Enumerable.repeat.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import Container$repeat from '../../../containers/__internal__/Container/Container.repeat.mjs';
import { none, isNone, pipe, error, unsafeCast, raise } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Enumerator$hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import Enumerator$move from '../Enumerator/Enumerator.move.mjs';
import Enumerable$create from './Enumerable.create.mjs';
import Enumerable$enumerate from './Enumerable.enumerate.mjs';

const Enumerable$repeat = /*@__PURE__*/ (() => {
    const createRepeatEnumerator = createInstanceFactory(mix(include(Disposable$mixin), function RepeatEnumerator(instance, src, shouldRepeat) {
        init(Disposable$mixin, instance);
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
                this.enumerator = pipe(this.src, Enumerable$enumerate(), Disposable$addTo(this));
            }
            let { enumerator } = this;
            while (!Enumerator$move(enumerator)) {
                this.count++;
                try {
                    if (this.shouldRepeat(this.count)) {
                        enumerator = pipe(this.src, Enumerable$enumerate(), Disposable$addTo(this));
                        this.enumerator = enumerator;
                    }
                    else {
                        break;
                    }
                }
                catch (e) {
                    pipe(this, Disposable$dispose(error(e)));
                    break;
                }
            }
        },
        get [EnumeratorLike_current]() {
            var _a, _b;
            unsafeCast(this);
            return Enumerator$hasCurrent(this)
                ? (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_current]) !== null && _b !== void 0 ? _b : raise()
                : raise();
        },
        get [EnumeratorLike_hasCurrent]() {
            var _a, _b;
            unsafeCast(this);
            return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_hasCurrent]) !== null && _b !== void 0 ? _b : false;
        },
    }));
    return Container$repeat((delegate, predicate) => Enumerable$create(() => createRepeatEnumerator(delegate, predicate)));
})();

export { Enumerable$repeat as default };
