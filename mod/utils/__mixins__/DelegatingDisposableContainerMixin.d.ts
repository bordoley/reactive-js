import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableContainerLike } from "../../utils.js";
export declare const DelegatingDisposableContainerLike_delegate: unique symbol;
export interface DelegatingDisposableContainerLike<TDisposableContainer extends DisposableContainerLike> extends DisposableContainerLike {
    readonly [DelegatingDisposableContainerLike_delegate]: TDisposableContainer;
}
declare const DelegatingDisposableContainerMixin: <TDisposableContainer extends DisposableContainerLike>() => Mixin1<DelegatingDisposableContainerLike<TDisposableContainer>, TDisposableContainer, DisposableContainerLike>;
export default DelegatingDisposableContainerMixin;
