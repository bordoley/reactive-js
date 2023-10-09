import { Mixin1 } from "../../__internal__/mixins.js";
import { EnumeratorLike } from "../../collections.js";
export declare const DelegatingEnumeratorMixinLike_delegate: unique symbol;
export interface DelegatingEnumeratorMixinLike<T = unknown> {
    readonly [DelegatingEnumeratorMixinLike_delegate]: EnumeratorLike<T>;
}
declare const DelegatingEnumeratorMixin: <T>() => Mixin1<DelegatingEnumeratorMixinLike<T>, EnumeratorLike<T>>;
export default DelegatingEnumeratorMixin;
