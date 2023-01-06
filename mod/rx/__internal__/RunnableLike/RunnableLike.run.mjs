/// <reference types="./RunnableLike.run.d.ts" />
import { pipe, isSome, raise } from '../../../functions.mjs';
import { DisposableLike_exception } from '../../../util.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import SinkLike__create from '../SinkLike/SinkLike.create.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';

const RunnableLike__run = () => (runnable) => pipe(SinkLike__create(), SinkLike__sourceFrom(runnable), DisposableLike__dispose(), ({ [DisposableLike_exception]: error }) => {
    if (isSome(error)) {
        raise(error.cause);
    }
});

export { RunnableLike__run as default };
