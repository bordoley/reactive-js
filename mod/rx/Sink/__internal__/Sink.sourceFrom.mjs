/// <reference types="./Sink.sourceFrom.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';

const Sink_sourceFrom = (source) => sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
};

export { Sink_sourceFrom as default };
