import { PartialMixin } from "../../__internal__/mixins.js";
import { ObserverLike } from "../../concurrent.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
declare const decorateNotifyWithObserverStateAssert: <This extends ObserverLike<T>, T>(mixin: PartialMixin<Pick<SinkLike<T>, typeof SinkLike_notify>>) => PartialMixin<Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default decorateNotifyWithObserverStateAssert;
