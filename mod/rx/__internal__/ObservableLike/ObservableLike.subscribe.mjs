/// <reference types="./ObservableLike.subscribe.d.ts" />
import { pipe } from '../../../functions.mjs';
import addToIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors.mjs';
import create from '../ObserverLike/ObserverLike.create.mjs';
import sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';

const subscribe = scheduler => observable => pipe(scheduler, create, addToIgnoringChildErrors(scheduler), sourceFrom(observable));

export { subscribe as default };
