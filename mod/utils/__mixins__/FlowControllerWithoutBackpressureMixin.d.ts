import { Mixin } from "../../__internal__/mixins.js";
import { DisposableLike, FlowControllerLike } from "../../utils.js";
export type TReturn = Omit<FlowControllerLike, keyof DisposableLike>;
declare const FlowControllerWithoutBackpressureMixin: Mixin<TReturn>;
export default FlowControllerWithoutBackpressureMixin;
