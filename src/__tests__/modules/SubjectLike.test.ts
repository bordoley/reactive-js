import {
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__internal__/__internal__testing";
import { toRunnable as arrayToRunnable } from "../../containers/ReadonlyArrayLike";
import { pipe } from "../../functions";
import { createSubject } from "../../rx";
import { getObserverCount } from "../../rx/MulticastObservableLike";
import {
  forEach as forEachObservable,
  subscribe,
} from "../../rx/ObservableLike";
import { forEach, run } from "../../rx/RunnableLike";
import { publishTo } from "../../rx/SubjectLike";
import { createVirtualTimeScheduler } from "../../scheduling/SchedulerLike";
import { run as runContinuation } from "../../util/ContinuationLike";
import { dispose } from "../../util/DisposableLike";

testModule(
  "SubjectLike",
  test("with replay", () => {
    const scheduler = createVirtualTimeScheduler();

    const subject = createSubject<number>({ replay: 2 });
    pipe([1, 2, 3, 4], arrayToRunnable(), forEach(publishTo(subject)), run());
    pipe(subject, dispose());

    const result: number[] = [];
    pipe(
      subject,
      forEachObservable<number>(x => {
        result.push(x);
      }),
      subscribe(scheduler),
    );
    runContinuation(scheduler);

    pipe(result, expectArrayEquals([3, 4]));
  }),

  test("with multiple observers", () => {
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
  }),
);
