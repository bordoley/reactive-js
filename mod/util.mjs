/// <reference types="./util.d.ts" />
const DisposableLike_add = Symbol("DisposableLike_add");
const DisposableLike_dispose = Symbol("DisposableLike_dispose");
const DisposableLike_error = Symbol("DisposableLike_error");
const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");
const PauseableLike_pause = Symbol("PausableLike_pause");
const PauseableLike_resume = Symbol("PausableLike_resume");
const ContinuationLike_run = Symbol("ContinuationLike_run");

export { ContinuationLike_run, DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, PauseableLike_pause, PauseableLike_resume };
