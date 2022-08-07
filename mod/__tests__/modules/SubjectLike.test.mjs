/// <reference types="./SubjectLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals, expectEquals } from '../../__internal__/testing.mjs';
import { toRunnable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipe } from '../../functions.mjs';
import { createSubject } from '../../rx.mjs';
import { getObserverCount } from '../../rx/MulticastObservableLike.mjs';
import '../../rx/ObservableLike.mjs';
import { forEach, run } from '../../rx/RunnableLike.mjs';
import { publishTo } from '../../rx/SubjectLike.mjs';
import { createVirtualTimeScheduler } from '../../scheduling.mjs';
import { run as run$1 } from '../../util/ContinuationLike.mjs';
import '../../util/DisposableLike.mjs';
import { dispose } from '../../__internal__/util/DisposableLikeInternal.mjs';
import { forEach as forEach$1, subscribe } from '../../__internal__/rx/ObservableLikeInternal.mjs';

var SubjectLikeTests = createDescribe("SubjectLike", createTest("with replay", () => {
    const scheduler = createVirtualTimeScheduler();
    const subject = createSubject({ replay: 2 });
    pipe([1, 2, 3, 4], toRunnable(), forEach(publishTo(subject)), run());
    pipe(subject, dispose());
    const result = [];
    pipe(subject, forEach$1(x => {
        result.push(x);
    }), subscribe(scheduler));
    run$1(scheduler);
    pipe(result, expectArrayEquals([3, 4]));
}), createTest("with multiple observers", () => {
    const scheduler = createVirtualTimeScheduler();
    const subject = createSubject();
    pipe(subject, getObserverCount, expectEquals(0));
    const sub1 = pipe(subject, subscribe(scheduler));
    pipe(subject, getObserverCount, expectEquals(1));
    const sub2 = pipe(subject, subscribe(scheduler));
    pipe(subject, getObserverCount, expectEquals(2));
    pipe(sub1, dispose());
    pipe(subject, getObserverCount, expectEquals(1));
    pipe(sub2, dispose());
    pipe(subject, getObserverCount, expectEquals(0));
}));

export { SubjectLikeTests as default };
