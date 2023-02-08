import { keepType } from "../../containers/Container";
import { __await, __memo, async } from "../../effects";
import { increment, isSome, pipe, returns } from "../../functions";
import { ObservableLike } from "../../rx";
import Observable, { subscribe } from "../../rx/Observable";
import { run } from "../../scheduling/Continuation";
import { create as createVirtualTimeScheduler } from "../../scheduling/VirtualTimeScheduler";
import { expectArrayEquals, expectEquals, test, testModule } from "../testing";

testModule(
  "effects",
  test("batch mode", () => {
    const scheduler = createVirtualTimeScheduler();

    const fromValueWithDelay = (
      delay: number,
      value: number,
    ): ObservableLike<number> => pipe([value], Observable.fromArray({ delay }));

    let result = -1;

    pipe(
      async(() => {
        const obs1 = __memo(fromValueWithDelay, 10, 5);
        const result1 = __await(obs1);
        const obs2 = __memo(fromValueWithDelay, 20, 10);
        const result2 = __await(obs2);
        const obs3 = __memo(fromValueWithDelay, 30, 7);
        const result3 = __await(obs3);

        return result1 + result2 + result3;
      }),
      Observable.takeLast<number>(),
      Observable.forEach<number>(v => {
        result = v;
      }),
      subscribe(scheduler),
    );

    run(scheduler);

    pipe(result, expectEquals(22));
  }),
  test("combined-latest mode", () => {
    const scheduler = createVirtualTimeScheduler();

    const oneTwoThreeDelayed = pipe(
      [1, 2, 3],
      Observable.fromArray({ delay: 1 }),
    );
    const createOneTwoThree = (_: unknown) =>
      pipe([1, 2, 3], Observable.fromArray());

    const result: number[] = [];

    pipe(
      async(
        () => {
          const v = __await(oneTwoThreeDelayed);
          const next = __memo(createOneTwoThree, v);
          return __await(next);
        },
        { mode: "combine-latest" },
      ),
      keepType(Observable, isSome),
      Observable.forEach<number>(v => {
        result.push(v);
      }),
      subscribe(scheduler),
    );

    run(scheduler);

    pipe(result, expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]));
  }),
  test("conditional hooks", () => {
    const scheduler = createVirtualTimeScheduler();

    const src = pipe([0, 1, 2, 3, 4, 5], Observable.fromArray({ delay: 5 }));
    const src2 = Observable.generate(increment, returns(100), {
      delay: 2,
      delayStart: false,
    });

    const result: number[] = [];

    pipe(
      async(() => {
        const v = __await(src);

        if (v % 2 === 0) {
          __memo(increment, 1);
          return __await(src2);
        }
        return v;
      }),
      Observable.forEach<number>(v => {
        result.push(v);
      }),
      subscribe(scheduler),
    );

    run(scheduler);

    pipe(
      result,
      expectArrayEquals([101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5]),
    );
  }),
);
