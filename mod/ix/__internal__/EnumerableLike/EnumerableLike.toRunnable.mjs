/// <reference types="./EnumerableLike.toRunnable.d.ts" />
import { pipe } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import RunnableLike__create from '../../../rx/__internal__/RunnableLike/RunnableLike.create.mjs';
import SinkLike__notifySink from '../../../rx/__internal__/SinkLike/SinkLike.notifySink.mjs';
import DisposableLike__add from '../../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import EnumeratorLike__forEach from '../EnumeratorLike/EnumeratorLike.forEach.mjs';

const EnumerableLike__toRunnable = 
/*@__PURE__*/ (() => {
    const enumeratorToRunnable = (f) => {
        const run = (sink) => {
            pipe(f(), DisposableLike__add(sink), EnumeratorLike__forEach(SinkLike__notifySink(sink)), DisposableLike__dispose());
        };
        return RunnableLike__create(run);
    };
    return () => (enumerable) => enumeratorToRunnable(() => enumerable[InteractiveContainerLike_interact]());
})();

export { EnumerableLike__toRunnable as default };
