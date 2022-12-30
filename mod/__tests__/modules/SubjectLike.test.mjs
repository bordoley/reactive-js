/// <reference types="./SubjectLike.test.d.ts" />
import { toRunnable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipe } from '../../functions.mjs';
import { getObserverCount } from '../../rx/MulticastObservableLike.mjs';
import { f as forEach$1, s as subscribe } from '../../ObservableLike-ca8b1474.mjs';
import { forEach, run } from '../../rx/RunnableLike.mjs';
import { create as create$1, publishTo } from '../../rx/SubjectLike.mjs';
import { run as run$1 } from '../../scheduling/ContinuationLike.mjs';
import { create } from '../../scheduling/VirtualTimeSchedulerLike.mjs';
import { dispose } from '../../util/DisposableLike.mjs';
import { testModule, test as createTest, expectArrayEquals, expectEquals } from '../testing.mjs';

testModule("SubjectLike", createTest("with replay", () => {
    const scheduler = create();
    const subject = create$1({ replay: 2 });
    pipe([1, 2, 3, 4], toRunnable(), forEach(publishTo(subject)), run());
    pipe(subject, dispose());
    const result = [];
    pipe(subject, forEach$1(x => {
        result.push(x);
    }), subscribe(scheduler));
    run$1(scheduler);
    pipe(result, expectArrayEquals([3, 4]));
}), createTest("with multiple observers", () => {
    const scheduler = create();
    const subject = create$1();
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
