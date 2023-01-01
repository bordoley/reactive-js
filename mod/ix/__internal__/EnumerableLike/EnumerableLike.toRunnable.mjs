/// <reference types="./EnumerableLike.toRunnable.d.ts" />
import { pipe } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import { notifySink } from '../../../rx/SinkLike.mjs';
import RunnableLike__create from '../../../rx/__internal__/RunnableLike/RunnableLike.create.mjs';
import { add, dispose } from '../../../util/DisposableLike.mjs';
import EnumeratorLike__forEach from '../EnumeratorLike/EnumeratorLike.forEach.mjs';

const EnumerableLike__toRunnable = 
/*@__PURE__*/ (() => {
    const enumeratorToRunnable = (f) => {
        const run = (sink) => {
            pipe(f(), add(sink), EnumeratorLike__forEach(notifySink(sink)), dispose());
        };
        return RunnableLike__create(run);
    };
    return () => (enumerable) => enumeratorToRunnable(() => enumerable[InteractiveContainerLike_interact]());
})();

export { EnumerableLike__toRunnable as default };
