import { toRunnable as arrayToRunnable } from "../../containers/ReadonlyArray";
import { pipe } from "../../functions";
import { getObserverCount } from "../../rx/MulticastObservable";
import { forEach as forEachObservable, subscribe } from "../../rx/Observable";
import { forEach, run } from "../../rx/Runnable";
import { create as createSubject, publishTo } from "../../rx/Subject";
import { run as runContinuation } from "../../scheduling/Continuation";
import { create as createVirtualTimeScheduler } from "../../scheduling/VirtualTimeScheduler";
import { dispose } from "../../util/Disposable";
import { expectArrayEquals, expectEquals, test, testModule } from "../testing";

testModule(
  "Subject",
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
