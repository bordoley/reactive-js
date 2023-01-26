/// <reference types="./Observable.share.d.ts" />
import { none, isNone, pipe, isSome } from '../../../functions.mjs';
import MulticastObservable$getObserverCount from '../MulticastObservable/MulticastObservable.getObserverCount.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable$create from './Observable.create.mjs';
import Observable$multicast from './Observable.multicast.mjs';

const Observable$share = (scheduler, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return Observable$create(observer => {
        if (isNone(multicasted)) {
            multicasted = pipe(source, Observable$multicast(scheduler, options));
        }
        pipe(observer, Sink$sourceFrom(multicasted), Disposable$onDisposed(() => {
            if (isSome(multicasted) &&
                MulticastObservable$getObserverCount(multicasted) === 0) {
                pipe(multicasted, Disposable$dispose());
                multicasted = none;
            }
        }));
    });
};

export { Observable$share as default };
