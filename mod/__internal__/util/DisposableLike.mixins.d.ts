import { DisposableLike } from "../../util.mjs";
import { Mixin1, Mixin } from "../mixins.mjs";
declare const delegatingDisposableMixin: Mixin1<DisposableLike, DisposableLike>;
declare const disposableMixin: Mixin<DisposableLike>;
export { delegatingDisposableMixin, disposableMixin };
