import { Mixin1 } from "../../__internal__/mixins.js";
import { BroadcasterLike } from "../../computations.js";
import { DisposableContainerLike } from "../../utils.js";
type TReturn<T> = Omit<BroadcasterLike<T>, keyof DisposableContainerLike>;
declare const DelegatingBroadcasterMixin: <T>() => Mixin1<TReturn<T>, BroadcasterLike<T>, TReturn<T>>;
export default DelegatingBroadcasterMixin;
