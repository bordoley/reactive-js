/// <reference types="./ReactiveContainerLike.sinkInto.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';

const sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};

export { sinkInto as default };
