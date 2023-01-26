/// <reference types="./Observable.multicast.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable_bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Subject_create from '../Subject/Subject.create.mjs';
import Subject_publishTo from '../Subject/Subject.publishTo.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = Subject_create({ replay });
    pipe(observable, Observable_forEach(Subject_publishTo(subject)), Observable_subscribe(scheduler), Disposable_bindTo(subject));
    return subject;
};

export { Observable_multicast as default };
