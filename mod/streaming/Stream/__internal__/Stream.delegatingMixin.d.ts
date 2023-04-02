import { Mixin1 } from "../../../__internal__/mixins.js";
import { StreamLike } from "../../../streaming.js";
declare const Stream_delegatingMixin: <TReq, T>() => Mixin1<StreamLike<TReq, T>, StreamLike<TReq, T>>;
export default Stream_delegatingMixin;
