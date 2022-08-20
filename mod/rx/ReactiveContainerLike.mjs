/// <reference types="./ReactiveContainerLike.d.ts" />
import { R as ReactiveContainerLike_sinkInto } from '../rx-fdbb13e3.mjs';

const sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};

export { sinkInto };
