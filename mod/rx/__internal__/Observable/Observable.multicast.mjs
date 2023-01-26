/// <reference types="./Observable.multicast.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable$bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Subject$create from '../Subject/Subject.create.mjs';
import Subject$publishTo from '../Subject/Subject.publishTo.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = Subject$create({ replay });
    pipe(observable, Observable$forEach(Subject$publishTo(subject)), Observable$subscribe(scheduler), Disposable$bindTo(subject));
    return subject;
};

export { Observable$multicast as default };
