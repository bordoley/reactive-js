import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableContainerLike, PauseableLike } from "../../utils.js";
declare const DelegatingPauseableMixin: Mixin1<Omit<PauseableLike, keyof DisposableContainerLike>, PauseableLike>;
export default DelegatingPauseableMixin;
