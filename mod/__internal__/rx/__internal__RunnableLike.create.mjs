/// <reference types="./__internal__RunnableLike.create.d.ts" />
import { none, pipe } from '../../functions.mjs';
import { ReactiveContainerLike_sinkInto } from '../../rx.mjs';
import { dispose } from '../util/__internal__DisposableLike.mjs';
import { createInstanceFactory, mixin, props } from '../util/__internal__Objects.mjs';

const create = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mixin(function Runnable(instance, run) {
        instance.run = run;
        return instance;
    }, props({
        run: none,
    }), {
        [ReactiveContainerLike_sinkInto](sink) {
            try {
                this.run(sink);
                pipe(sink, dispose());
            }
            catch (cause) {
                pipe(sink, dispose({ cause }));
            }
        },
    }));
})();

export { create };
