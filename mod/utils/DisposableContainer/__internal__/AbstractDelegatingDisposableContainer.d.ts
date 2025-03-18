import { Optional, SideEffect1 } from "../../../functions.js";
import { DisposableContainerLike, DisposableContainerLike_add } from "../../../utils.js";
export declare const AbstractDelegatingDisposableContainer_delegate: unique symbol;
declare class AbstractDelegatingDisposableContainer<TDelegate extends DisposableContainerLike = DisposableContainerLike> implements DisposableContainerLike {
    protected readonly [AbstractDelegatingDisposableContainer_delegate]: TDelegate;
    constructor(delegate: TDelegate);
    [DisposableContainerLike_add](disposable: Disposable | SideEffect1<Optional<Error>>): void;
}
export default AbstractDelegatingDisposableContainer;
