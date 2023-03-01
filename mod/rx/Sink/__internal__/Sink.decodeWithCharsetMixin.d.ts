import { Mixin2 } from "../../../__internal__/mixins.js";
import { ObservableLike, ObserverLike, ObserverLike_notify } from "../../../rx.js";
declare const Observer_decodeWithCharsetMixin: <C extends ObservableLike>(fromReadonlyArray: (v: readonly string[]) => C) => Mixin2<ObserverLike<ArrayBuffer>, ObserverLike<string>, string, Pick<ObserverLike<ArrayBuffer>, typeof ObserverLike_notify>>;
export default Observer_decodeWithCharsetMixin;
