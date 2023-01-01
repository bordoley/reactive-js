import { Mixin3 } from "../../../__internal__/mixins.mjs";
import { Reducer, Factory } from "../../../functions.mjs";
import { ReactiveContainerLike, SinkLike } from "../../../rx.mjs";
declare const SinkLike__reduceMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<TAcc>, T, TAcc>(fromArray: (v: readonly TAcc[]) => C) => Mixin3<SinkLike<T>, TSink, Reducer<T, TAcc>, Factory<TAcc>>;
export { SinkLike__reduceMixin as default };
