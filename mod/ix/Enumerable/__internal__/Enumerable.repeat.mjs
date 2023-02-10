/// <reference types="./Enumerable.repeat.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import Container_repeat from '../../../containers/Container/__internal__/Container.repeat.mjs';
import { none, isNone, pipe, isSome, error, unsafeCast, raiseWithDebugMessage } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Enumerator_hasCurrent from '../../Enumerator/__internal__/Enumerator.hasCurrent.mjs';
import Enumerator_move from '../../Enumerator/__internal__/Enumerator.move.mjs';
import Enumerable_create from './Enumerable.create.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';

const Enumerable_repeat = /*@__PURE__*/ (() => {
    const RepeatEnumerator_count = Symbol("RepeatEnumerator_count");
    const RepeatEnumerator_enumerator = Symbol("RepeatEnumerator_enumerator");
    const RepeatEnumerator_shouldRepeat = Symbol("RepeatEnumerator_shouldRepeat");
    const RepeatEnumerator_src = Symbol("RepeatEnumerator_src");
    const createRepeatEnumerator = createInstanceFactory(mix(include(Disposable_mixin), function RepeatEnumerator(instance, src, shouldRepeat) {
        init(Disposable_mixin, instance);
        instance[RepeatEnumerator_src] = src;
        instance[RepeatEnumerator_shouldRepeat] = shouldRepeat;
        return instance;
    }, props({
        [RepeatEnumerator_count]: 0,
        [RepeatEnumerator_enumerator]: none,
        [RepeatEnumerator_shouldRepeat]: none,
        [RepeatEnumerator_src]: none,
    }), {
        [SourceLike_move]() {
            if (isNone(this[RepeatEnumerator_enumerator])) {
                this[RepeatEnumerator_enumerator] = pipe(this[RepeatEnumerator_src], Enumerable_enumerate(), Disposable_addTo(this));
            }
            let { [RepeatEnumerator_enumerator]: enumerator } = this;
            while (isSome(enumerator) && !Enumerator_move(enumerator)) {
                this[RepeatEnumerator_count]++;
                try {
                    if (this[RepeatEnumerator_shouldRepeat](this[RepeatEnumerator_count])) {
                        enumerator = pipe(this[RepeatEnumerator_src], Enumerable_enumerate(), Disposable_addTo(this));
                        this[RepeatEnumerator_enumerator] = enumerator;
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
                ? this[RepeatEnumerator_enumerator][EnumeratorLike_current]
                : raiseWithDebugMessage("Enumerator does not have current value");
        },
        get [EnumeratorLike_hasCurrent]() {
            var _a, _b;
            unsafeCast(this);
            return ((_b = (_a = this[RepeatEnumerator_enumerator]) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_hasCurrent]) !== null && _b !== void 0 ? _b : false);
        },
    }));
    return Container_repeat((delegate, predicate) => Enumerable_create(() => createRepeatEnumerator(delegate, predicate)));
})();

export { Enumerable_repeat as default };
