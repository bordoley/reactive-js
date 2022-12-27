import { Mixin3 } from "../../../__internal__/mixins.mjs";
import { Reducer, Factory } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const scanMixin: <T, TAcc>() => Mixin3<SinkLike<T>, SinkLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>>;
export { scanMixin as default };
