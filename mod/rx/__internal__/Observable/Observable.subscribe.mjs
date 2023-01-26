/// <reference types="./Observable.subscribe.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable_addToIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Observer_create from '../Observer/Observer.create.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';

const Observable_subscribe = scheduler => observable => pipe(scheduler, Observer_create, Disposable_addToIgnoringChildErrors(scheduler), Sink_sourceFrom(observable));

export { Observable_subscribe as default };
