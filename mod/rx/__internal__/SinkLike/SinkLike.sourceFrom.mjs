/// <reference types="./SinkLike.sourceFrom.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';

const SinkLike__sourceFrom = (source) => sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
};

export { SinkLike__sourceFrom as default };
