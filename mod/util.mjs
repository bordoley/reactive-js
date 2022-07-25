/// <reference types="./util.d.ts" />
import { createDisposable as createDisposable$1, disposed as disposed$1 } from './__internal__/util/Disposable.mjs';
import { DisposableLike_add as DisposableLike_add$1, DisposableLike_dispose as DisposableLike_dispose$1, DisposableLike_error as DisposableLike_error$1, DisposableLike_isDisposed as DisposableLike_isDisposed$1 } from './__internal__/util/DisposableLikeInternal.mjs';

/** @ignore */
const DisposableLike_add = DisposableLike_add$1;
/** @ignore */
const DisposableLike_dispose = DisposableLike_dispose$1;
/** @ignore */
const DisposableLike_error = DisposableLike_error$1;
/** @ignore */
const DisposableLike_isDisposed = DisposableLike_isDisposed$1;
/** @ignore */
const PauseableLike_pause = Symbol("PausableLike_pause");
/** @ignore */
const PauseableLike_resume = Symbol("PausableLike_resume");
/** @ignore */
const ContinuationLike_run = Symbol("ContinuationLike_run");
const createDisposable = () => createDisposable$1();
const disposed = disposed$1;

export { ContinuationLike_run, DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, PauseableLike_pause, PauseableLike_resume, createDisposable, disposed };
