import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike } from "../../utils.js";
import { DelegatingDisposableContainerLike } from "./DelegatingDisposableContainerMixin.js";
export interface DelegatingDisposableLike<TDisposable extends DisposableLike> extends DelegatingDisposableContainerLike<TDisposable>, DisposableLike {
}
declare const DelegatingDisposableMixin: <TDisposable extends DisposableLike>() => Mixin1<DelegatingDisposableLike<TDisposable>, TDisposable, DisposableLike>;
export default DelegatingDisposableMixin;
