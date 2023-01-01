import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { ReactiveContainerLike, SinkLike } from "../../../rx.mjs";
declare const SinkLike__decodeWithCharsetMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<string>>(fromArray: (v: readonly string[]) => C) => Mixin2<SinkLike<ArrayBuffer>, SinkLike<string>, string>;
export { SinkLike__decodeWithCharsetMixin as default };
