import { Mixin2 } from "../../../__internal__/mixins.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink_decodeWithCharsetMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<string>>(fromReadonlyArray: (v: readonly string[]) => C) => Mixin2<SinkLike<ArrayBuffer>, SinkLike<string>, string>;
export default Sink_decodeWithCharsetMixin;
