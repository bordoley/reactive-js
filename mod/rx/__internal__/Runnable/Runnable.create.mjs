/// <reference types="./Runnable.create.d.ts" />
import { createInstanceFactory, mix, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, error } from '../../../functions.mjs';
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';

const Runnable$create = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function Runnable(instance, run) {
        instance.run = run;
        return instance;
    }, props({
        run: none,
    }), {
        [ReactiveContainerLike_sinkInto](sink) {
            try {
                this.run(sink);
                pipe(sink, Disposable$dispose());
            }
            catch (e) {
                pipe(sink, Disposable$dispose(error(e)));
            }
        },
    }));
})();

export { Runnable$create as default };
