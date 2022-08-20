/// <reference types="./ReactiveContainerLike.d.ts" />
import { R as ReactiveContainerLike_sinkInto } from '../rx-31e22181.mjs';

const sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};

export { sinkInto };
