/// <reference types="./Sink.sourceFrom.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';

const Sink$sourceFrom = (source) => sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
};

export { Sink$sourceFrom as default };
