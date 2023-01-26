/// <reference types="./ReactiveContainer.sinkInto.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';

const ReactiveContainer$sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};

export { ReactiveContainer$sinkInto as default };
