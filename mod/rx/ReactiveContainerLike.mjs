/// <reference types="./ReactiveContainerLike.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../rx.mjs';

const sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};
const sourceFrom = (source) => sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
};

export { sinkInto, sourceFrom };
