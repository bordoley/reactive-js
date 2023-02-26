import { Mixin2 } from "../../../__internal__/mixins.js";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_decodeWithCharsetMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<string>>(fromReadonlyArray: (v: readonly string[]) => C) => Mixin2<SinkLike<ArrayBuffer>, SinkLike<string>, string, Pick<SinkLike<ArrayBuffer>, typeof SinkLike_notify>>;
export default Sink_decodeWithCharsetMixin;
