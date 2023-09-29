import { Mixin1 } from "../../__internal__/mixins.js";
import { DelegatingDisposableLike, DisposableLike } from "../../utils.js";
declare const DelegatingDisposableMixin: <TDisposable extends DisposableLike = DisposableLike>() => Mixin1<DelegatingDisposableLike<TDisposable>, TDisposable>;
export default DelegatingDisposableMixin;
