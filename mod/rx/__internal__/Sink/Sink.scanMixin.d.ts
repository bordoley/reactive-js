import { Mixin3 } from "../../../__internal__/mixins.js";
import { Reducer, Factory } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink$scanMixin: <T, TAcc>() => Mixin3<SinkLike<T>, SinkLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>>;
export { Sink$scanMixin as default };
