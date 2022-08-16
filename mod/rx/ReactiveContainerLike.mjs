/// <reference types="./ReactiveContainerLike.d.ts" />
import { R as ReactiveContainerLike_sinkInto } from '../DisposableLike-45fa23bf.mjs';

const sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};

export { sinkInto };
