import { Mixin2 } from "../../__internal__/mixins.js";
import { Reducer } from "../../functions.js";
import { SinkLike } from "../../utils.js";
export declare const ReducerSinkMixin: <T, TAcc>() => Mixin2<SinkLike<T>, Reducer<T, TAcc>, [
    TAcc
]>;
