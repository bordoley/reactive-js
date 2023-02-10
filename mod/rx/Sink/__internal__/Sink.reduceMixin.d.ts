import { Mixin3 } from "../../../__internal__/mixins.js";
import { Reducer, Factory } from "../../../functions.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink_reduceMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<TAcc>, T, TAcc>(fromArray: (v: readonly TAcc[]) => C) => Mixin3<SinkLike<T>, TSink, Reducer<T, TAcc>, Factory<TAcc>>;
export { Sink_reduceMixin as default };
