import { observe, ObserverLike, Observable } from "@reactive-js/rx-core";
import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";
import { EventLoopScheduler } from "@reactive-js/eventloop-scheduler";

import {
  throws,
  ofValue,
  never,
  concat,
  empty,
  fromArray,
  fromPromiseFactory,
  fromScheduledValues,
  toPromise,
} from "../src/index";

describe("concat", () => {
  test("concats the observable and completes", () => {
    const scheduler = VirtualTimeScheduler.create();

    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };
    Observable.connect(
      Observable.lift(
        concat(ofValue(1), ofValue(2), ofValue(3)),
        observe(observer),
      ),
      scheduler,
    );

    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenNthCalledWith(3, 3);
    expect(observer.complete).toHaveBeenCalledTimes(1);
  });

  test("completes immediate when one observable completes with an error", () => {
    const scheduler = VirtualTimeScheduler.create();
    const err = new Error();

    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };
    Observable.connect(
      Observable.lift(
        concat(ofValue(1), ofValue(2), throws(err), ofValue(3)),
        observe(observer),
      ),
      scheduler,
    );

    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(2);
    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);

    expect(observer.complete).toHaveBeenCalledTimes(1);
    expect(observer.complete).toHaveBeenCalledWith(err);
  });
});

describe("empty", () => {
  test("produces no values and completes", () => {
    const scheduler = VirtualTimeScheduler.create();

    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    const value = 1;

    Observable.connect(Observable.lift(empty(), observe(observer)), scheduler);

    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(0);
    expect(observer.complete).toHaveBeenCalledTimes(1);
    expect(observer.complete).toHaveBeenCalledWith(undefined);
  });
});

describe("fromArray", () => {
  test("with no delay", () => {
    const observable = fromArray([1, 2, 3, 4, 5, 6]);
    const scheduler = VirtualTimeScheduler.create(1);
    const accumulator: Array<number> = [];
    const observer: ObserverLike<number> = {
      next: v => accumulator.push(v),
      complete: jest.fn(),
    };

    Observable.connect(
      Observable.lift(observable, observe(observer)),
      scheduler,
    );

    scheduler.run();

    expect(accumulator).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("with delay", () => {
    const observable = fromArray([1, 2, 3, 4, 5, 6], 3);
    const scheduler = VirtualTimeScheduler.create(1);
    const accumulator: Array<[number, number]> = [];
    const observer: ObserverLike<number> = {
      next: v => accumulator.push([scheduler.now, v]),
      complete: jest.fn(),
    };

    Observable.connect(
      Observable.lift(observable, observe(observer)),
      scheduler,
    );

    scheduler.run();

    expect(accumulator).toEqual([[3, 1], [6,2], [9,3], [12, 4], [15, 5], [18, 6]]);
  });
});

describe("fromPromiseFactory", () => {
  test("when the promise resolves", async () => {
    const scheduler = EventLoopScheduler.create();
    const factory = () => Promise.resolve(1);
    const result = await toPromise(fromPromiseFactory(factory), scheduler);
    expect(result).toEqual(1);
  });

  test("when the promise throws", () => {
    const scheduler = EventLoopScheduler.create();
    const error = new Error();
    const factory = () => Promise.reject(error);
    const promise = toPromise(fromPromiseFactory(factory), scheduler);
    return expect(promise).rejects.toThrow(error);
  });
});

test("fromScheduledValues", () => {
  const observable = fromScheduledValues(
    [0, undefined, 1],
    [0, undefined, 1],
    [0, undefined, 1],
    [1, undefined, 2],
    [2, undefined, 3],
    [3, undefined, 4],
  );

  const scheduler = VirtualTimeScheduler.create(1);

  const accumulator: Array<[number, number]> = [];

  const observer: ObserverLike<number> = {
    next: v => accumulator.push([scheduler.now, v]),
    complete: jest.fn(),
  };

  Observable.connect(Observable.lift(observable, observe(observer)), scheduler);

  scheduler.run();

  expect(accumulator).toEqual([
    [0, 1],
    [0, 1],
    [0, 1],
    [1, 2],
    [3, 3],
    [6, 4],
  ]);
});

describe("toPromise", () => {
  test("when the observable produces no values", () => {
    const scheduler = EventLoopScheduler.create();
    const promise = toPromise(empty(), scheduler);
    return expect(promise).rejects.toThrow();
  });
});

describe("never", () => {
  test("produces no values and doesn't complete", () => {
    const scheduler = VirtualTimeScheduler.create();

    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    const value = 1;

    Observable.connect(Observable.lift(never(), observe(observer)), scheduler);

    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(0);
    expect(observer.complete).toHaveBeenCalledTimes(0);
  });
});

describe("ofValue", () => {
  test("completes with the value when subscribed", () => {
    const scheduler = VirtualTimeScheduler.create();

    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    const value = 1;

    Observable.connect(
      Observable.lift(ofValue(1), observe(observer)),
      scheduler,
    );

    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(1);
    expect(observer.next).toBeCalledWith(value);
    expect(observer.complete).toBeCalledWith(undefined);
  });
});

describe("throws", () => {
  test("completes with an exception when subscribed", () => {
    const scheduler = VirtualTimeScheduler.create();
    const err = new Error();

    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    Observable.connect(
      Observable.lift(throws(err), observe(observer)),
      scheduler,
    );

    scheduler.run();

    expect(observer.next).toBeCalledTimes(0);
    expect(observer.complete).toBeCalledWith(err);
  });
});
