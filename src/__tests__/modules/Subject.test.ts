import ReadonlyArray from "../../containers/ReadonlyArray";
import { pipe } from "../../functions";
import MulticastObservable from "../../rx/MulticastObservable";
import Observable from "../../rx/Observable";
import Runnable, { run } from "../../rx/Runnable";
import Subject from "../../rx/Subject";
import Continuation from "../../scheduling/Continuation";
import VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler";
import Disposable from "../../util/Disposable";
import { expectArrayEquals, expectEquals, test, testModule } from "../testing";

testModule(
  "Subject",
  test("with replay", () => {
    const scheduler = VirtualTimeScheduler.create();

    const subject = Subject.create<number>({ replay: 2 });
    pipe(
      [1, 2, 3, 4],
      ReadonlyArray.toRunnable(),
      Runnable.forEach(Subject.publishTo(subject)),
      run(),
    );
    pipe(subject, Disposable.dispose());

    const result: number[] = [];
    pipe(
      subject,
      Observable.forEach<number>(x => {
        result.push(x);
      }),
      Observable.subscribe(scheduler),
    );
    Continuation.run(scheduler);

    pipe(result, expectArrayEquals([3, 4]));
  }),

  test("with multiple observers", () => {
    const scheduler = VirtualTimeScheduler.create();

    const subject = Subject.create();
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(0));
    const sub1 = pipe(subject, Observable.subscribe(scheduler));
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(1));
    const sub2 = pipe(subject, Observable.subscribe(scheduler));
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(2));
    pipe(sub1, Disposable.dispose());
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(1));
    pipe(sub2, Disposable.dispose());
    pipe(subject, MulticastObservable.getObserverCount, expectEquals(0));
  }),
);
