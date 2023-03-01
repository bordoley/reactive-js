import { MixinPrototype } from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
declare const Observer_decorateNotifyForDev: <TThis extends ObserverLike<unknown>, TNext>(mixin: MixinPrototype<{
    [ObserverLike_notify](this: TThis, next: TNext): void;
}>) => {
    [ObserverLike_notify](this: TThis, next: TNext): void;
} | {};
export default Observer_decorateNotifyForDev;
