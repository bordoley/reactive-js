import { Mixin1 } from "../../../__internal__/mixins.js";
import { DispatcherLike } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
type TDispatcherDelegatingMixin<TReq> = Omit<DispatcherLike<TReq>, keyof DisposableLike>;
declare const Dispatcher_delegatingMixin: <TReq>() => Mixin1<TDispatcherDelegatingMixin<TReq>, Omit<DispatcherLike<TReq>, keyof DisposableLike>>;
export default Dispatcher_delegatingMixin;
