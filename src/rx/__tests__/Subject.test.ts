import {
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__tests__/testing.js";
import * as ReadonlyArray from "../../containers/ReadonlyArray.js";
import { pipe } from "../../functions.js";
import { MulticastObservableLike_observerCount } from "../../rx.js";
import { VirtualTimeSchedulerLike_run } from "../../scheduling.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import { DisposableLike_dispose } from "../../util.js";
import * as Observable from "../Observable.js";
import * as Subject from "../Subject.js";

testModule(
  "Subject",
  test("with replay", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();

    const subject = Subject.create<number>({ replay: 2 });
    pipe([1, 2, 3, 4], ReadonlyArray.forEach(Subject.publishTo(subject)));
    subject[DisposableLike_dispose]();

    const result: number[] = [];
    pipe(
      subject,
      Observable.forEach<number>(x => {
        result.push(x);
      }),
      Observable.subscribe(scheduler),
    );

    scheduler[VirtualTimeSchedulerLike_run]();

    pipe(result, expectArrayEquals([3, 4]));
  }),

  test("with multiple observers", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();

    const subject = Subject.create();
    pipe(subject[MulticastObservableLike_observerCount], expectEquals(0));
    const sub1 = pipe(subject, Observable.subscribe(scheduler));
    pipe(subject[MulticastObservableLike_observerCount], expectEquals(1));
    const sub2 = pipe(subject, Observable.subscribe(scheduler));
    pipe(subject[MulticastObservableLike_observerCount], expectEquals(2));
    sub1[DisposableLike_dispose]();
    pipe(subject[MulticastObservableLike_observerCount], expectEquals(1));
    sub2[DisposableLike_dispose]();
    pipe(subject[MulticastObservableLike_observerCount], expectEquals(0));
  }),
);
