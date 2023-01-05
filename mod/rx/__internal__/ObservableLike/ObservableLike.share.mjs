/// <reference types="./ObservableLike.share.d.ts" />
import { none, isNone, pipe, isSome } from '../../../functions.mjs';
import MulticastObservableLike__getObserverCount from '../MulticastObservableLike/MulticastObservableLike.getObserverCount.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__onDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';
import ObservableLike__multicast from './ObservableLike.multicast.mjs';

const ObservableLike__share = (scheduler, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return ObservableLike__create(observer => {
        if (isNone(multicasted)) {
            multicasted = pipe(source, ObservableLike__multicast(scheduler, options));
        }
        pipe(observer, SinkLike__sourceFrom(multicasted), DisposableLike__onDisposed(() => {
            if (isSome(multicasted) &&
                MulticastObservableLike__getObserverCount(multicasted) === 0) {
                pipe(multicasted, DisposableLike__dispose());
                multicasted = none;
            }
        }));
    });
};

export { ObservableLike__share as default };
