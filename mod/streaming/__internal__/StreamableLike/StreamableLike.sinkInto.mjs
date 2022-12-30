/// <reference types="./StreamableLike.sinkInto.d.ts" />
import { ignoreElements } from '../../../containers/ContainerLike.mjs';
import { pipe } from '../../../functions.mjs';
import { merge, forEach, keepT, onSubscribe, subscribe } from '../../../rx/ObservableLike.mjs';
import { DispatcherLike_scheduler } from '../../../scheduling.mjs';
import { dispatchTo } from '../../../scheduling/DispatcherLike.mjs';
import { addTo, add } from '../../../util/DisposableLike.mjs';
import stream from './StreamableLike.stream.mjs';

const sinkInto = (dest) => (src) => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, stream(scheduler));
    pipe(merge(pipe(srcStream, forEach(dispatchTo(dest)), ignoreElements(keepT), onSubscribe(() => dest)), pipe(dest, forEach(dispatchTo(srcStream)), ignoreElements(keepT))), ignoreElements(keepT), subscribe(scheduler), addTo(dest), add(srcStream));
    return src;
};

export { sinkInto as default };
