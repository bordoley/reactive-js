import { Mixin1 } from "../../__internal__/mixins.js";
import { DispatcherLike, DisposableContainerLike } from "../../utils.js";
declare const DelegatingDispatcherMixin: <TReq>() => Mixin1<Omit<DispatcherLike<TReq>, keyof DisposableContainerLike>, DispatcherLike<TReq>>;
export default DelegatingDispatcherMixin;
