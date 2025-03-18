import { Optional } from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed } from "../../../utils.js";
import AbstractDelegatingDisposableContainer from "../../DisposableContainer/__internal__/AbstractDelegatingDisposableContainer.js";
declare class AbstractDelegatingDisposable<TDisposable extends DisposableLike = DisposableLike> extends AbstractDelegatingDisposableContainer<TDisposable> implements DisposableLike {
    get [DisposableLike_error](): Optional<Error>;
    get [DisposableLike_isDisposed](): boolean;
    [DisposableLike_dispose](error?: Error): void;
}
export default AbstractDelegatingDisposable;
