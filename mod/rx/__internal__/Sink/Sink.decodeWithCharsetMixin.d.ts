import { Mixin2 } from "../../../__internal__/mixins.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink$decodeWithCharsetMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<string>>(fromArray: (v: readonly string[]) => C) => Mixin2<SinkLike<ArrayBuffer>, SinkLike<string>, string>;
export { Sink$decodeWithCharsetMixin as default };
