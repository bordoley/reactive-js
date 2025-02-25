import { Mixin1 } from "../../__internal__/mixins.js";
import { PauseableLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
declare const DelegatingPauseableMixin: Mixin1<PauseableLike, PauseableLike, DisposableLike>;
export default DelegatingPauseableMixin;
