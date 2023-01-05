/// <reference types="./StreamableLike.sinkInto.d.ts" />
import ContainerLike__ignoreElements from '../../../containers/__internal__/ContainerLike/ContainerLike.ignoreElements.mjs';
import { pipe } from '../../../functions.mjs';
import ObservableLike__forEach from '../../../rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__keepT from '../../../rx/__internal__/ObservableLike/ObservableLike.keepT.mjs';
import ObservableLike__merge from '../../../rx/__internal__/ObservableLike/ObservableLike.merge.mjs';
import ObservableLike__onSubscribe from '../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import ObservableLike__subscribe from '../../../rx/__internal__/ObservableLike/ObservableLike.subscribe.mjs';
import { DispatcherLike_scheduler } from '../../../scheduling.mjs';
import DispatcherLike__dispatchTo from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatchTo.mjs';
import DisposableLike__add from '../../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import StreamableLike__stream from './StreamableLike.stream.mjs';

const StreamableLike__sinkInto = (dest) => (src) => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, StreamableLike__stream(scheduler));
    pipe(ObservableLike__merge(pipe(srcStream, ObservableLike__forEach(DispatcherLike__dispatchTo(dest)), ContainerLike__ignoreElements(ObservableLike__keepT), ObservableLike__onSubscribe(() => dest)), pipe(dest, ObservableLike__forEach(DispatcherLike__dispatchTo(srcStream)), ContainerLike__ignoreElements(ObservableLike__keepT))), ContainerLike__ignoreElements(ObservableLike__keepT), ObservableLike__subscribe(scheduler), DisposableLike__addTo(dest), DisposableLike__add(srcStream));
    return src;
};

export { StreamableLike__sinkInto as default };
