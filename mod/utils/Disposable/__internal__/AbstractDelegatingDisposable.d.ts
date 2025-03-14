import { Optional, SideEffect1 } from "../../../functions.js";
import { DisposableContainerLike_add, DisposableLike, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed } from "../../../utils.js";
declare const AbstractDelegatingDisposable_delegate: unique symbol;
declare class AbstractDelegatingDisposable implements DisposableLike {
    private readonly [AbstractDelegatingDisposable_delegate];
    constructor(delegate: DisposableLike);
    get [DisposableLike_error](): Optional<Error>;
    get [DisposableLike_isDisposed](): boolean;
    [DisposableLike_dispose](error?: Error): void;
    [DisposableContainerLike_add](disposable: Disposable | SideEffect1<Optional<Error>>): void;
}
export default AbstractDelegatingDisposable;
