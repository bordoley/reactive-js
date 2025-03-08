import { Mixin1 } from "../../__internal__/mixins.js";
import { DispatcherLike } from "../../utils.js";
declare const DelegatingDispatcherMixin: <TReq>() => Mixin1<DispatcherLike<TReq>, DispatcherLike<TReq>>;
export default DelegatingDispatcherMixin;
