import { MixinPrototype } from "../../__internal__/mixins.js";
import { ObserverLike, SinkLike, SinkLike_notify } from "../../types.js";
declare const Observer_decorateNotifyWithStateAssert: <This extends ObserverLike<T>, T>(mixin: MixinPrototype<Pick<SinkLike<T>, typeof import("../../__internal__/symbols.js").__SinkLike_notify>>) => object;
export default Observer_decorateNotifyWithStateAssert;
