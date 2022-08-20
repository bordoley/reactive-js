/// <reference types="./ReactiveContainerLike.d.ts" />
import { R as ReactiveContainerLike_sinkInto } from '../DisposableLike-c856ff07.mjs';

const sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};

export { sinkInto };
