import { Mixin3 } from "../../../__internal__/mixins.js";
import { Reducer, Factory } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const SinkLike__scanMixin: <T, TAcc>() => Mixin3<SinkLike<T>, SinkLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>>;
export { SinkLike__scanMixin as default };
