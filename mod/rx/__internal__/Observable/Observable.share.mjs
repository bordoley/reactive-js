/// <reference types="./Observable.share.d.ts" />
import { none, isNone, pipe, isSome } from '../../../functions.mjs';
import MulticastObservable_getObserverCount from '../MulticastObservable/MulticastObservable.getObserverCount.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable_create from './Observable.create.mjs';
import Observable_multicast from './Observable.multicast.mjs';

const Observable_share = (scheduler, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return Observable_create(observer => {
        if (isNone(multicasted)) {
            multicasted = pipe(source, Observable_multicast(scheduler, options));
        }
        pipe(observer, Sink_sourceFrom(multicasted), Disposable_onDisposed(() => {
            if (isSome(multicasted) &&
                MulticastObservable_getObserverCount(multicasted) === 0) {
                pipe(multicasted, Disposable_dispose());
                multicasted = none;
            }
        }));
    });
};

export { Observable_share as default };
