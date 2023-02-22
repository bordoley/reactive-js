/// <reference types="./Runnable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe } from "../../../functions.js";
import { ReactiveContainerLike_sinkInto, } from "../../../rx.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
const Runnable_create = 
/*@__PURE__*/ (() => {
    const Runnable_effect = Symbol("Runnable_effect");
    return createInstanceFactory(mix(function Runnable(instance, effect) {
        instance[Runnable_effect] = effect;
        return instance;
    }, props({
        [Runnable_effect]: none,
    }), {
        [ReactiveContainerLike_sinkInto](sink) {
            try {
                this[Runnable_effect](sink);
                pipe(sink, Disposable_dispose());
            }
            catch (e) {
                pipe(sink, Disposable_dispose(error(e)));
            }
        },
    }));
})();
export default Runnable_create;
