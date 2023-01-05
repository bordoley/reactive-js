/// <reference types="./ObservableLike.takeUntil.d.ts" />
import { pipe } from '../../../functions.mjs';
import DisposableLike__bindTo from '../../../util/__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import ObserverLike__createWithDelegate from '../ObserverLike/ObserverLike.createWithDelegate.mjs';
import ObservableLike__isEnumerable from './ObservableLike.isEnumerable.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';
import ObservableLike__takeFirst from './ObservableLike.takeFirst.mjs';

const ObservableLike__takeUntil = (notifier) => {
    const operator = (delegate) => pipe(ObserverLike__createWithDelegate(delegate), DisposableLike__bindTo(delegate), DisposableLike__bindTo(pipe(notifier, ObservableLike__takeFirst(), ObservableLike__subscribe(getScheduler(delegate)))));
    return pipe(operator, ObservableLike__lift(ObservableLike__isEnumerable(notifier), ObservableLike__isRunnable(notifier)));
};

export { ObservableLike__takeUntil as default };
