/// <reference types="./Runnable.run.d.ts" />
import { pipe, isSome, raiseError } from '../../../functions.mjs';
import { DisposableLike_error } from '../../../util.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Sink_create from '../../Sink/__internal__/Sink.create.mjs';
import Sink_sourceFrom from '../../Sink/__internal__/Sink.sourceFrom.mjs';

const Runnable_run = () => (runnable) => pipe(Sink_create(), Sink_sourceFrom(runnable), Disposable_dispose(), ({ [DisposableLike_error]: error }) => {
    if (isSome(error)) {
        raiseError(error);
    }
});

export { Runnable_run as default };
