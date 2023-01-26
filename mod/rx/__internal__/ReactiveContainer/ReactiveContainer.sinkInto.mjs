/// <reference types="./ReactiveContainer.sinkInto.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';

const ReactiveContainer_sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};

export { ReactiveContainer_sinkInto as default };
