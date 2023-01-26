/// <reference types="./EnumeratorSink.create.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { EnumeratorLike_hasCurrent, EnumeratorLike_current, SourceLike_move } from '../../../ix.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';

const EnumeratorSink$create = (() => {
    return createInstanceFactory(mix(include(Disposable$mixin), function EnumeratorSink(instance) {
        init(Disposable$mixin, instance);
        instance.buffer = [];
        pipe(instance, Disposable$onDisposed(() => {
            instance.buffer.length = 0;
            instance[EnumeratorLike_hasCurrent] = false;
        }));
        return instance;
    }, props({
        buffer: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
    }), {
        [SinkLike_notify](next) {
            if (Disposable$isDisposed(this)) {
                return;
            }
            this.buffer.push(next);
        },
        [SourceLike_move]() {
            const { buffer } = this;
            if (!Disposable$isDisposed(this) && getLength(buffer) > 0) {
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

export { EnumeratorSink$create as default };
