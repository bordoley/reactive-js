/// <reference types="./StreamableLike.d.ts" />
import { ignoreElements } from '../containers/ContainerLike.mjs';
import { pipe } from '../functions.mjs';
import { keepT, onSubscribe } from '../rx/ObservableLike.mjs';
import { DispatcherLike_scheduler } from '../scheduling.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { StreamableLike_stream } from '../streaming.mjs';
import '../util/DisposableLike.mjs';
import { merge, forEach, subscribe } from '../__internal__/rx/ObservableLikeInternal.mjs';
import { addTo, add } from '../__internal__/util/DisposableLikeInternal.mjs';

const stream = (scheduler, options) => streamable => streamable[StreamableLike_stream](scheduler, options);
const sinkInto = (dest) => (src) => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, stream(scheduler));
    pipe(merge(pipe(srcStream, forEach(dispatchTo(dest)), ignoreElements(keepT), onSubscribe(() => dest)), pipe(dest, forEach(dispatchTo(srcStream)), ignoreElements(keepT))), ignoreElements(keepT), subscribe(scheduler), addTo(dest), add(srcStream));
    return src;
};

export { sinkInto, stream };
