/// <reference types="./SinkLike.sourceFrom.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';

const sourceFrom = (source) => sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
};

export { sourceFrom as default };
