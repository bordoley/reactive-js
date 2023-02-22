/// <reference types="./Enumerable.toRunnable.d.ts" />

import { pipe } from "../../../functions.js";
import { InteractiveContainerLike_interact, } from "../../../ix.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import Sink_notifySink from "../../../rx/Sink/__internal__/Sink.notifySink.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
const Enumerable_toRunnable = 
/*@__PURE__*/ (() => {
    const enumeratorToRunnable = (f) => {
        const run = (sink) => {
            pipe(f(), Disposable_add(sink), Enumerator_forEach(Sink_notifySink(sink)), Disposable_dispose());
        };
        return Runnable_create(run);
    };
    return () => (enumerable) => enumeratorToRunnable(() => enumerable[InteractiveContainerLike_interact]());
})();
export default Enumerable_toRunnable;
