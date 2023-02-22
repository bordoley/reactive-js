import {
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__tests__/testing.js";
import ReadonlyArray from "../../containers/ReadonlyArray.js";
import { pipe } from "../../functions.js";
import Continuation from "../../scheduling/Continuation.js";
import VirtualTimeScheduler from "../../scheduling/VirtualTimeScheduler.js";
import Disposable from "../../util/Disposable.js";
import MulticastObservable from "../MulticastObservable.js";
import Observable from "../Observable.js";
import Runnable from "../Runnable.js";
import Subject from "../Subject.js";

testModule(
  "Subject",
  test("with replay", () => {
    const scheduler = VirtualTimeScheduler.create();

    const subject = Subject.create<number>({ replay: 2 });
    pipe(
      [1, 2, 3, 4],
      ReadonlyArray.toRunnable(),
      Runnable.forEach(Subject.publishTo(subject)),
      Runnable.run(),
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
