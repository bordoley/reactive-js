/// <reference types="./Observable.multicast.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable_bindTo from '../../../util/Disposable/__internal__/Disposable.bindTo.mjs';
import Subject_create from '../../Subject/__internal__/Subject.create.mjs';
import Subject_publishTo from '../../Subject/__internal__/Subject.publishTo.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = Subject_create({ replay });
    pipe(observable, Observable_forEach(Subject_publishTo(subject)), Observable_subscribe(scheduler), Disposable_bindTo(subject));
    return subject;
};

export { Observable_multicast as default };
