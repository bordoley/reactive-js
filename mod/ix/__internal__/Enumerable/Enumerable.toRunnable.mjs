/// <reference types="./Enumerable.toRunnable.d.ts" />
import { pipe } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import Runnable$create from '../../../rx/__internal__/Runnable/Runnable.create.mjs';
import Sink$notifySink from '../../../rx/__internal__/Sink/Sink.notifySink.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Enumerator$forEach from '../Enumerator/Enumerator.forEach.mjs';

const Enumerable$toRunnable = 
/*@__PURE__*/ (() => {
    const enumeratorToRunnable = (f) => {
        const run = (sink) => {
            pipe(f(), Disposable$add(sink), Enumerator$forEach(Sink$notifySink(sink)), Disposable$dispose());
        };
        return Runnable$create(run);
    };
    return () => (enumerable) => enumeratorToRunnable(() => enumerable[InteractiveContainerLike_interact]());
})();

export { Enumerable$toRunnable as default };
