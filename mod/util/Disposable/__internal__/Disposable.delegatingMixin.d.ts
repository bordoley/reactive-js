import { Mixin1 } from "../../../__internal__/mixins.js";
import { DelegatingDisposableLike } from "../../../__internal__/util.internal.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_delegatingMixin: <TDisposable extends DisposableLike = DisposableLike>() => Mixin1<DelegatingDisposableLike<TDisposable>, TDisposable>;
export default Disposable_delegatingMixin;
