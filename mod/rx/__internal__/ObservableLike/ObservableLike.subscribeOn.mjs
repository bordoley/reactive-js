/// <reference types="./ObservableLike.subscribeOn.d.ts" />
import { pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher } from '../../../rx.mjs';
import { dispatchTo } from '../../../scheduling/DispatcherLike.mjs';
import { bindTo } from '../../../util/DisposableLike.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
ObservableLike__create(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, ObservableLike__forEach(dispatchTo(dispatcher)), ObservableLike__subscribe(scheduler), bindTo(dispatcher)));

export { ObservableLike__subscribeOn as default };
