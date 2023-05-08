import { Mixin1 } from "../../../__internal__/mixins.js";
import { DisposableLike, StreamLike } from "../../../core.js";
declare const Stream_delegatingMixin: <TReq, T>() => Mixin1<StreamLike<TReq, T> & DisposableLike, StreamLike<TReq, T> & DisposableLike>;
export default Stream_delegatingMixin;
