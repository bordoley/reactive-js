/// <reference types="./ObservableLike.multicast.d.ts" />
import { pipe } from '../../../functions.mjs';
import bindTo from '../../../util/__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import create from '../SubjectLike/SubjectLike.create.mjs';
import publishTo from '../SubjectLike/SubjectLike.publishTo.mjs';
import forEach from './ObservableLike.forEach.mjs';
import subscribe from './ObservableLike.subscribe.mjs';

const multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = create({ replay });
    pipe(observable, forEach(publishTo(subject)), subscribe(scheduler), bindTo(subject));
    return subject;
};

export { multicast as default };
