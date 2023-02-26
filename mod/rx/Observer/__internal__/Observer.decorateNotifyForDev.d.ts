import { MixinPrototype } from "../../../__internal__/mixins.js";
import { ObserverLike, SinkLike_notify } from "../../../rx.js";
declare const Observer_decorateNotifyForDev: <TThis extends ObserverLike<unknown>, TNext>(mixin: MixinPrototype<{
    [SinkLike_notify](this: TThis, next: TNext): void;
}>) => {
    [SinkLike_notify](this: TThis, next: TNext): void;
} | {};
export default Observer_decorateNotifyForDev;
