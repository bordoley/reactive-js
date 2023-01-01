/// <reference types="./ObservableLike.multicast.d.ts" />
import { pipe } from '../../../functions.mjs';
import DisposableLike__bindTo from '../../../util/__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import SubjectLike__create from '../SubjectLike/SubjectLike.create.mjs';
import SubjectLike__publishTo from '../SubjectLike/SubjectLike.publishTo.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = SubjectLike__create({ replay });
    pipe(observable, ObservableLike__forEach(SubjectLike__publishTo(subject)), ObservableLike__subscribe(scheduler), DisposableLike__bindTo(subject));
    return subject;
};

export { ObservableLike__multicast as default };
