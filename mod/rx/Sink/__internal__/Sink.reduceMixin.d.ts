import { Mixin3 } from "../../../__internal__/mixins.js";
import { Factory, Reducer } from "../../../functions.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink_reduceMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<TAcc>, T, TAcc>(fromReadonlyArray: (v: readonly TAcc[]) => C) => Mixin3<SinkLike<T>, TSink, Reducer<T, TAcc>, Factory<TAcc>>;
export default Sink_reduceMixin;
