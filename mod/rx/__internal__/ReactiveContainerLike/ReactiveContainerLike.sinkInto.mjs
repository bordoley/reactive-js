/// <reference types="./ReactiveContainerLike.sinkInto.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';

const ReactiveContainerLike__sinkInto = (sink) => source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
};

export { ReactiveContainerLike__sinkInto as default };
