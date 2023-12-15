import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike } from "../../utils.js";
export declare const DelegatingDisposableLike_delegate: unique symbol;
export interface DelegatingDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike {
    readonly [DelegatingDisposableLike_delegate]: TDisposable;
}
declare const DelegatingDisposableMixin: <TDisposable extends DisposableLike = DisposableLike>() => Mixin1<DelegatingDisposableLike<TDisposable>, TDisposable>;
export default DelegatingDisposableMixin;
