/// <reference types="./ObservableLike.subscribe.d.ts" />
import { pipe } from '../../../functions.mjs';
import DisposableLike__addToIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors.mjs';
import ObserverLike__create from '../ObserverLike/ObserverLike.create.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';

const ObservableLike__subscribe = scheduler => observable => pipe(scheduler, ObserverLike__create, DisposableLike__addToIgnoringChildErrors(scheduler), SinkLike__sourceFrom(observable));

export { ObservableLike__subscribe as default };
