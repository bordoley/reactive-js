/// <reference types="./EnumeratorSink.create.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { EnumeratorLike_hasCurrent, EnumeratorLike_current, SourceLike_move } from '../../../ix.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';

const EnumeratorSink_buffer = Symbol("EnumeratorSink_buffer");
const EnumeratorSink_create = (() => {
    return createInstanceFactory(mix(include(Disposable_mixin), function EnumeratorSink(instance) {
        init(Disposable_mixin, instance);
        instance[EnumeratorSink_buffer] = [];
        pipe(instance, Disposable_onDisposed(() => {
            instance[EnumeratorSink_buffer].length = 0;
            instance[EnumeratorLike_hasCurrent] = false;
        }));
        return instance;
    }, props({
        [EnumeratorSink_buffer]: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
    }), {
        [SinkLike_notify](next) {
            if (Disposable_isDisposed(this)) {
                return;
            }
            this[EnumeratorSink_buffer].push(next);
        },
        [SourceLike_move]() {
            const { [EnumeratorSink_buffer]: buffer } = this;
            if (!Disposable_isDisposed(this) && getLength(buffer) > 0) {
                const next = buffer.shift();
                this[EnumeratorLike_current] = next;
                this[EnumeratorLike_hasCurrent] = true;
            }
            else {
                this[EnumeratorLike_hasCurrent] = false;
            }
        },
    }));
})();

export { EnumeratorSink_create as default };
