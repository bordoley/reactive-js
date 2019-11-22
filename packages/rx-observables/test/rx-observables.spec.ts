import {
  observe,
  ObserverLike,
  Observable,
  SubscriberLike,
  Subscriber,
} from "@reactive-js/rx-core";
import { Disposable } from "@reactive-js/disposables";
import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";
import { EventLoopScheduler } from "@reactive-js/eventloop-scheduler";

import {
  throws,
  ofValue,
  never,
  concat,
  empty,
  fromPromiseFactory,
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
