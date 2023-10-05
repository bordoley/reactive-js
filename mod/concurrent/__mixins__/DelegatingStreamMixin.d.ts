import { Mixin1 } from "../../__internal__/mixins.js";
import { StreamLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
declare const DelegatingStreamMixin: <TReq, T>() => Mixin1<StreamLike<TReq, T> & DisposableLike, StreamLike<TReq, T> & DisposableLike>;
export default DelegatingStreamMixin;
