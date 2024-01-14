import { Mixin1 } from "../../__internal__/mixins.js";
import { StreamLike } from "../../concurrent.js";
declare const DelegatingStreamMixin: <TReq, T>() => Mixin1<StreamLike<TReq, T>, StreamLike<TReq, T>>;
export default DelegatingStreamMixin;
