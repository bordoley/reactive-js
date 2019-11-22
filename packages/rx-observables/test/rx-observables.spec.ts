import { observe, ObserverLike, Observable } from "@reactive-js/rx-core";
import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";
import { EventLoopScheduler } from "@reactive-js/eventloop-scheduler";

import { delay, map, take } from "@reactive-js/rx-operators";

import {
  generate,
  throws,
  ofValue,
  never,
  concat,
  empty,
  fromArray,
  fromPromiseFactory,
  fromScheduledValues,
  merge,
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
    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    Observable.connect(
      Observable.lift(observable, observe(observer)),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenNthCalledWith(3, 3);
    expect(observer.next).toHaveBeenNthCalledWith(4, 4);
    expect(observer.next).toHaveBeenNthCalledWith(5, 5);
    expect(observer.next).toHaveBeenNthCalledWith(6, 6);
  });

  test("with delay", () => {
    const observable = fromArray([1, 2, 3, 4, 5, 6], 3);
    const scheduler = VirtualTimeScheduler.create(1);
    const observer: ObserverLike<[number, number]> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    Observable.connect(
      Observable.lift(
        observable,
        map(v => [scheduler.now, v]),
        observe(observer),
      ),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, [3, 1]);
    expect(observer.next).toHaveBeenNthCalledWith(2, [6, 2]);
    expect(observer.next).toHaveBeenNthCalledWith(3, [9, 3]);
    expect(observer.next).toHaveBeenNthCalledWith(4, [12, 4]);
    expect(observer.next).toHaveBeenNthCalledWith(5, [15, 5]);
    expect(observer.next).toHaveBeenNthCalledWith(6, [18, 6]);
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

  const observer: ObserverLike<[number, number]> = {
    next: jest.fn(),
    complete: jest.fn(),
  };

  Observable.connect(
    Observable.lift(
      observable,
      map(v => [scheduler.now, v]),
      observe(observer),
    ),
    scheduler,
  );
  scheduler.run();

  expect(observer.next).toHaveBeenNthCalledWith(1, [0, 1]);
  expect(observer.next).toHaveBeenNthCalledWith(2, [0, 1]);
  expect(observer.next).toHaveBeenNthCalledWith(3, [0, 1]);
  expect(observer.next).toHaveBeenNthCalledWith(4, [1, 2]);
  expect(observer.next).toHaveBeenNthCalledWith(5, [3, 3]);
  expect(observer.next).toHaveBeenNthCalledWith(6, [6, 4]);
});

describe("generate", () => {
  test("without delay", () => {
    const scheduler = VirtualTimeScheduler.create(1);
    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    Observable.connect(
      Observable.lift(
        generate(i => i + 1, 0),
        take(5),
        observe(observer),
      ),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(5);
    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenNthCalledWith(3, 3);
    expect(observer.next).toHaveBeenNthCalledWith(4, 4);
    expect(observer.next).toHaveBeenNthCalledWith(5, 5);
  });

  test("without delay, generate throws", () => {
    const scheduler = VirtualTimeScheduler.create(1);
    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    const error = new Error();

    const generator = (i: number) => {
      if (i > 2) {
        throw error;
      }

      return i + 1;
    };

    Observable.connect(
      Observable.lift(generate(generator, 0), take(5), observe(observer)),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(3);
    expect(observer.next).toHaveBeenNthCalledWith(1, 1);
    expect(observer.next).toHaveBeenNthCalledWith(2, 2);
    expect(observer.next).toHaveBeenNthCalledWith(3, 3);
    expect(observer.complete).toBeCalledWith(error);
  });

  test("with delay", () => {
    const scheduler = VirtualTimeScheduler.create(1);
    const observer: ObserverLike<[number, number]> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    Observable.connect(
      Observable.lift(
        generate(i => i + 1, 0, 5),
        map(x => [scheduler.now, x]),
        take(5),
        observe(observer),
      ),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(5);
    expect(observer.next).toHaveBeenNthCalledWith(1, [5, 1]);
    expect(observer.next).toHaveBeenNthCalledWith(2, [10, 2]);
    expect(observer.next).toHaveBeenNthCalledWith(3, [15, 3]);
    expect(observer.next).toHaveBeenNthCalledWith(4, [20, 4]);
    expect(observer.next).toHaveBeenNthCalledWith(5, [25, 5]);
  });

  test("with delay, generate throws", () => {
    const scheduler = VirtualTimeScheduler.create(1);
    const observer: ObserverLike<[number, number]> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    const error = new Error();

    const generator = (i: number) => {
      if (i > 2) {
        throw error;
      }

      return i + 1;
    };

    Observable.connect(
      Observable.lift(
        generate(generator, 0, 5),
        map(x => [scheduler.now, x]),
        take(5),
        observe(observer),
      ),
      scheduler,
    );
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(3);
    expect(observer.next).toHaveBeenNthCalledWith(1, [5, 1]);
    expect(observer.next).toHaveBeenNthCalledWith(2, [10, 2]);
    expect(observer.next).toHaveBeenNthCalledWith(3, [15, 3]);
    expect(observer.complete).toBeCalledWith(error);
  });
});

test("merge", () => {
  const scheduler = VirtualTimeScheduler.create(1);
  const observer: ObserverLike<number> = {
    next: jest.fn(),
    complete: jest.fn(),
  };

  const error = new Error();

  Observable.connect(
    Observable.lift(
      merge(
        Observable.lift(
          generate(i => i + 2, 1, 2),
          take(3),
        ),
        Observable.lift(
          generate(i => i + 2, 0, 3),
          take(2),
        ),
        Observable.lift(throws(error), delay(10)),
      ),
      observe(observer),
    ),
    scheduler,
  );
  scheduler.run();

  expect(observer.next).toHaveBeenNthCalledWith(1, 3);
  expect(observer.next).toHaveBeenNthCalledWith(2, 2);
  expect(observer.next).toHaveBeenNthCalledWith(3, 5);
  expect(observer.next).toHaveBeenNthCalledWith(4, 4);
  expect(observer.next).toHaveBeenNthCalledWith(5, 7);
  expect(observer.complete).toBeCalledWith(error);
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
