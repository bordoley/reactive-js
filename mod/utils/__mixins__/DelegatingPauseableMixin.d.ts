import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableContainerLike, PauseableLike } from "../../utils.js";
type TReturn = Omit<PauseableLike, keyof DisposableContainerLike>;
type TPrototype = TReturn;
declare const DelegatingPauseableMixin: Mixin1<TReturn, TPrototype>;
export default DelegatingPauseableMixin;
