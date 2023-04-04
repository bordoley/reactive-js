import {
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { bindMethod, pipe } from "../../functions.js";
import * as ReadonlyArray from "../../keyed-containers/ReadonlyArray.js";
import {
  EventListenerLike_notify,
  MulticastObservableLike_observerCount,
} from "../../rx.js";
import { VirtualTimeSchedulerLike_run } from "../../scheduling.js";
import * as Scheduler from "../../scheduling/Scheduler.js";
import { DisposableLike_dispose } from "../../util.js";
import * as Observable from "../Observable.js";
import * as Publisher from "../Publisher.js";

testModule(
  "publisher",
  test("with replay", () => {
    const scheduler = Scheduler.createVirtualTimeScheduler();

    const publisher = Publisher.create<number>({ replay: 2 });
    pipe(
      [1, 2, 3, 4],
      ReadonlyArray.forEach(bindMethod(publisher, EventListenerLike_notify)),
    );
    publisher[DisposableLike_dispose]();

    const result: number[] = [];
    pipe(
      publisher,
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

    const publisher = Publisher.create();
    pipe(publisher[MulticastObservableLike_observerCount], expectEquals(0));
    const sub1 = pipe(publisher, Observable.subscribe(scheduler));
    pipe(publisher[MulticastObservableLike_observerCount], expectEquals(1));
    const sub2 = pipe(publisher, Observable.subscribe(scheduler));
    pipe(publisher[MulticastObservableLike_observerCount], expectEquals(2));
    sub1[DisposableLike_dispose]();
    pipe(publisher[MulticastObservableLike_observerCount], expectEquals(1));
    sub2[DisposableLike_dispose]();
    pipe(publisher[MulticastObservableLike_observerCount], expectEquals(0));
  }),
);
