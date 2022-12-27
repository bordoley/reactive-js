/// <reference types="./EnumerableLike.toRunnable.d.ts" />
import { pipe } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import { notifySink } from '../../../rx/SinkLike.mjs';
import create from '../../../rx/__internal__/RunnableLike/RunnableLike.create.mjs';
import { add, dispose } from '../../../util/DisposableLike.mjs';
import forEach from '../EnumeratorLike/EnumeratorLike.forEach.mjs';

const toRunnable = 
/*@__PURE__*/ (() => {
    const enumeratorToRunnable = (f) => {
        const run = (sink) => {
            pipe(f(), add(sink), forEach(notifySink(sink)), dispose());
        };
        return create(run);
    };
    return () => (enumerable) => enumeratorToRunnable(() => enumerable[InteractiveContainerLike_interact]());
})();

export { toRunnable as default };
