/// <reference types="./Runnable.run.d.ts" />
import { pipe, isSome, raise } from '../../../functions.mjs';
import { DisposableLike_error } from '../../../util.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Sink$create from '../Sink/Sink.create.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';

const Runnable$run = () => (runnable) => pipe(Sink$create(), Sink$sourceFrom(runnable), Disposable$dispose(), ({ [DisposableLike_error]: error }) => {
    if (isSome(error)) {
        raise(error);
    }
});

export { Runnable$run as default };
