import { Mixin1 } from "../../__internal__/mixins.js";
import { BroadcasterLike } from "../../computations.js";
import { DisposableContainerLike } from "../../utils.js";
declare const DelegatingBroadcasterMixin: <T>() => Mixin1<Omit<BroadcasterLike<T>, keyof DisposableContainerLike>, BroadcasterLike<T>>;
export default DelegatingBroadcasterMixin;
