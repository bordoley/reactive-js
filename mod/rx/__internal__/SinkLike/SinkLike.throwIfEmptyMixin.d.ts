import { Factory } from 'react';
import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const throwIfEmptyMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Factory<unknown>>;
export { throwIfEmptyMixin as default };
