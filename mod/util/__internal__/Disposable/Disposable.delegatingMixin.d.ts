import { Mixin1 } from "../../../__internal__/mixins.js";
import { DisposableLike } from "../../../util.js";
import { DelegatingDisposableLike } from "../util.internal.js";
declare const Disposable_delegatingMixin: <TDisposable extends DisposableLike = DisposableLike>() => Mixin1<DelegatingDisposableLike<TDisposable>, TDisposable>;
export { Disposable_delegatingMixin as default };
