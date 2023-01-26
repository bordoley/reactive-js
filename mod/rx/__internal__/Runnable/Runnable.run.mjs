/// <reference types="./Runnable.run.d.ts" />
import { pipe, isSome, raise } from '../../../functions.mjs';
import { DisposableLike_error } from '../../../util.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Sink_create from '../Sink/Sink.create.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';

const Runnable_run = () => (runnable) => pipe(Sink_create(), Sink_sourceFrom(runnable), Disposable_dispose(), ({ [DisposableLike_error]: error }) => {
    if (isSome(error)) {
        raise(error);
    }
});

export { Runnable_run as default };
