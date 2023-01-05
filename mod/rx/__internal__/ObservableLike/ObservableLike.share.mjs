/// <reference types="./ObservableLike.share.d.ts" />
import { none, isNone, pipe, isSome } from '../../../functions.mjs';
import MulticastObservableLike__getObserverCount from '../MulticastObservableLike/MulticastObservableLike.getObserverCount.mjs';
import { onDisposed, dispose } from '../../../util/DisposableLike.mjs';
import { sourceFrom } from '../../SinkLike.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';
import ObservableLike__multicast from './ObservableLike.multicast.mjs';

const ObservableLike__share = (scheduler, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return ObservableLike__create(observer => {
        if (isNone(multicasted)) {
            multicasted = pipe(source, ObservableLike__multicast(scheduler, options));
        }
        pipe(observer, sourceFrom(multicasted), onDisposed(() => {
            if (isSome(multicasted) &&
                MulticastObservableLike__getObserverCount(multicasted) === 0) {
                pipe(multicasted, dispose());
                multicasted = none;
            }
        }));
    });
};

export { ObservableLike__share as default };
