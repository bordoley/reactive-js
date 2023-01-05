/// <reference types="./ObservableLike.subscribeOn.d.ts" />
import { pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher } from '../../../rx.mjs';
import DispatcherLike__dispatchTo from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatchTo.mjs';
import DisposableLike__bindTo from '../../../util/__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
ObservableLike__create(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, ObservableLike__forEach(DispatcherLike__dispatchTo(dispatcher)), ObservableLike__subscribe(scheduler), DisposableLike__bindTo(dispatcher)));

export { ObservableLike__subscribeOn as default };
