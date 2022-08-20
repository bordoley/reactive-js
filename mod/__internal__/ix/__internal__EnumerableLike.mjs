/// <reference types="./__internal__EnumerableLike.d.ts" />
import { none, pipe } from '../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../ix.mjs';
import { SourceLike_move } from '../../util.mjs';
import { dispose } from '../util/__internal__DisposableLike.mjs';
import { disposableMixin } from '../util/__internal__Disposables.mjs';
import { enumeratorMixin } from '../util/__internal__Enumerators.mjs';
import { createInstanceFactory, mixin, props, include, init } from '../util/__internal__Objects.mjs';

const create = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mixin(function CreateEnumerable(instance, enumerate) {
        instance.enumerate = enumerate;
        return instance;
    }, props({
        enumerate: none,
    }), {
        [InteractiveContainerLike_interact]() {
            try {
                return this.enumerate();
            }
            catch (cause) {
                const emptyEnumerable = empty();
                return pipe(emptyEnumerable[InteractiveContainerLike_interact](), dispose({ cause }));
            }
        },
    }));
})();
const empty = /*@__PURE__*/ (() => {
    const typedEnumeratorMixin = enumeratorMixin();
    const createEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedEnumeratorMixin), function EmptyEnumerator(instance) {
        init(disposableMixin, instance);
        init(typedEnumeratorMixin, instance);
        return instance;
    }, {}, {
        [SourceLike_move]() {
            pipe(this, dispose());
        },
    }));
    return () => create(createEnumerator);
})();

export { create, empty };
