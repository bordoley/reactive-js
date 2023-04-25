import { Mixin1 } from "../../../__internal__/mixins.js";
import { StreamLike } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
declare const Stream_delegatingMixin: <TReq, T>() => Mixin1<StreamLike<TReq, T> & DisposableLike, StreamLike<TReq, T> & DisposableLike>;
export default Stream_delegatingMixin;
