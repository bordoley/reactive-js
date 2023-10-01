import { MixinPrototype } from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Observer_decorateNotifyWithStateAssert: <This extends ObserverLike<T>, T>(mixin: MixinPrototype<Pick<SinkLike<T>, typeof SinkLike_notify>>) => object;
export default Observer_decorateNotifyWithStateAssert;
