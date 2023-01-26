/// <reference types="./Observable.subscribe.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable$addToIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors.mjs';
import Observer$create from '../Observer/Observer.create.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';

const Observable$subscribe = scheduler => observable => pipe(scheduler, Observer$create, Disposable$addToIgnoringChildErrors(scheduler), Sink$sourceFrom(observable));

export { Observable$subscribe as default };
