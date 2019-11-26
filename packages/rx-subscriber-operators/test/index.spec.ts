import { create as disposableCreate, disposed } from "@reactive-js/disposable";
import { create as observableCreate } from "@reactive-js/rx-observable";
import {
  create as subscriptionCreate,
  pipe,
  SubscriberLike,
  toSafeObserver,
} from "@reactive-js/rx-subscriber";
import { create as virtualTimeSchedulerCreate } from "@reactive-js/virtualtime-scheduler";

import { SchedulerLike } from "@reactive-js/scheduler";
import {
  concat,
  distinctUntilChanged,
  exhaust,
  ignoreElements,
  keep,
  map,
  mapTo,
  merge,
  observe,
  onComplete,
  onError,
  onNext,
  scan,
  switch_,
  take,
  takeLast,
  withLatestFrom,
} from "../src/index";

const createMockSubscriber = <T>(): SubscriberLike<T> => {
  const subscription = disposableCreate();

  return {
    get isDisposed() {
      return subscription.isDisposed;
    },
    add: disp => subscription.add(disp),
    dispose: () => subscription.dispose(),
    remove: disp => subscription.remove(disp),
    isConnected: true,
    inScheduledContinuation: true,
    now: 0,
    schedule: (c, d?, p?) => disposed,
    next: jest.fn(),
    complete: jest.fn(),
  };
};

const createMockSubscriberWithScheduler = <T>(
  scheduler: SchedulerLike,
): SubscriberLike<T> => {
  const subscription = disposableCreate();

  return {
    get isDisposed() {
      return subscription.isDisposed;
    },
    add: disp => subscription.add(disp),
    dispose: () => subscription.dispose(),
    remove: disp => subscription.remove(disp),
    isConnected: true,
    get inScheduledContinuation() {
      return scheduler.inScheduledContinuation;
    },
    get now() {
      return scheduler.now;
    },
    schedule: (c, d?, p?) => scheduler.schedule(c, d, p),
    next: jest.fn(),
    complete: jest.fn(),
  };
};

describe("concat", () => {
  test("concats observables", () => {
    const observableA = observableCreate(observer => {
      observer.next(1);
      observer.next(2);
      observer.complete();
    });

    const observableB = observableCreate(observer => {
      observer.next(3);
      observer.next(4);
      observer.complete();
    });

    const scheduler = virtualTimeSchedulerCreate(2);
    const subscriber = createMockSubscriberWithScheduler(scheduler);

    const concatObserver = toSafeObserver(pipe(subscriber, concat()));

    concatObserver.next(observableA);
    concatObserver.next(observableB);
    concatObserver.next(observableB);
    concatObserver.next(observableA);
    concatObserver.complete();

    scheduler.run();

    expect(subscriber.next).toHaveBeenNthCalledWith(1, 1);
    expect(subscriber.next).toHaveBeenNthCalledWith(2, 2);
    expect(subscriber.next).toHaveBeenNthCalledWith(3, 3);
    expect(subscriber.next).toHaveBeenNthCalledWith(4, 4);
    expect(subscriber.next).toHaveBeenNthCalledWith(5, 3);
    expect(subscriber.next).toHaveBeenNthCalledWith(6, 4);
    expect(subscriber.next).toHaveBeenNthCalledWith(7, 1);
    expect(subscriber.next).toHaveBeenNthCalledWith(8, 2);
    expect(subscriber.next).toHaveBeenCalledTimes(8);
    expect(subscriber.complete).toHaveBeenCalled();
  });

  test("immediately completes when completed with an error", () => {
    const observableA = observableCreate(observer => {
      observer.next(1);
      observer.next(2);
    });

    const scheduler = virtualTimeSchedulerCreate(2);
    const subscriber = createMockSubscriberWithScheduler(scheduler);

    const concatObserver = toSafeObserver(pipe(subscriber, concat()));
    const error = new Error();

    concatObserver.next(observableA);
    concatObserver.next(observableA);
    concatObserver.next(observableA);
    concatObserver.next(observableA);
    concatObserver.complete(error);

    scheduler.run();

    expect(subscriber.next).toHaveBeenNthCalledWith(1, 1);
    expect(subscriber.next).toHaveBeenNthCalledWith(2, 2);
    expect(subscriber.next).toHaveBeenCalledTimes(2);
    expect(subscriber.complete).toHaveBeenCalledWith(error);
  });

  test("immediately completes when inner observable completes with an error", () => {
    const error = new Error();

    const observableA = observableCreate(observer => {
      observer.next(1);
      observer.next(2);
      observer.complete(error);
    });

    const scheduler = virtualTimeSchedulerCreate(2);
    const subscriber = createMockSubscriberWithScheduler(scheduler);

    const concatObserver = toSafeObserver(pipe(subscriber, concat()));

    concatObserver.next(observableA);
    concatObserver.next(observableA);
    concatObserver.next(observableA);
    concatObserver.next(observableA);

    scheduler.run();

    expect(subscriber.next).toHaveBeenNthCalledWith(1, 1);
    expect(subscriber.next).toHaveBeenNthCalledWith(2, 2);
    expect(subscriber.next).toHaveBeenCalledTimes(2);
    expect(subscriber.complete).toHaveBeenCalledWith(error);
  });
});

test("distinctUntilChanged", () => {
  const subscriber = createMockSubscriber();
  const distinctUntilChangedSubscriber = pipe(
    subscriber,
    distinctUntilChanged(),
  );
  const error = new Error();

  distinctUntilChangedSubscriber.next(1);
  distinctUntilChangedSubscriber.next(1);
  distinctUntilChangedSubscriber.next(1);
  distinctUntilChangedSubscriber.next(2);
  distinctUntilChangedSubscriber.next(2);
  distinctUntilChangedSubscriber.next(2);
  distinctUntilChangedSubscriber.next(2);
  distinctUntilChangedSubscriber.next(3);
  distinctUntilChangedSubscriber.next(3);
  distinctUntilChangedSubscriber.next(3);
  distinctUntilChangedSubscriber.next(3);
  distinctUntilChangedSubscriber.next(3);
  distinctUntilChangedSubscriber.complete(error);
  expect(subscriber.next).toHaveBeenNthCalledWith(1, 1);
  expect(subscriber.next).toHaveBeenNthCalledWith(2, 2);
  expect(subscriber.next).toHaveBeenNthCalledWith(3, 3);
  expect(subscriber.next).toHaveBeenCalledTimes(3);
  expect(subscriber.complete).toBeCalledWith(error);
});

test("keep", () => {
  const subscriber = createMockSubscriber();
  const keepSubscriber = pipe(
    subscriber,
    keep((x: number) => x % 2 === 0),
  );
  const error = new Error();

  keepSubscriber.next(1);
  keepSubscriber.next(2);
  keepSubscriber.next(3);
  keepSubscriber.complete(error);

  expect(subscriber.next).toHaveBeenNthCalledWith(1, 2);
  expect(subscriber.next).toBeCalledTimes(1);
  expect(subscriber.complete).toBeCalledWith(error);
});

test("ignoreElement", () => {
  const subscriber = createMockSubscriber();
  const ignoreSubscriber = pipe(subscriber, ignoreElements());
  const error = new Error();

  ignoreSubscriber.next(1);
  ignoreSubscriber.next(2);
  ignoreSubscriber.next(3);
  ignoreSubscriber.complete(error);
  expect(subscriber.next).toBeCalledTimes(0);
  expect(subscriber.complete).toBeCalledWith(error);
});

test("map", () => {
  const subscriber = createMockSubscriber();
  const mappedSubscriber = pipe(
    subscriber,
    map((x: number) => x * 2),
  );
  const error = new Error();

  mappedSubscriber.next(1);
  mappedSubscriber.next(2);
  mappedSubscriber.next(3);
  mappedSubscriber.complete(error);
  expect(subscriber.next).toHaveBeenNthCalledWith(1, 2);
  expect(subscriber.next).toHaveBeenNthCalledWith(2, 4);
  expect(subscriber.next).toHaveBeenNthCalledWith(3, 6);
  expect(subscriber.complete).toBeCalledWith(error);
});

test("mapTo", () => {
  const subscriber = createMockSubscriber();
  const mappedSubscriber = pipe(subscriber, mapTo(5));
  const error = new Error();

  mappedSubscriber.next(1);
  mappedSubscriber.next(2);
  mappedSubscriber.next(3);
  mappedSubscriber.complete(error);
  expect(subscriber.next).toHaveBeenNthCalledWith(1, 5);
  expect(subscriber.next).toHaveBeenNthCalledWith(2, 5);
  expect(subscriber.next).toHaveBeenNthCalledWith(3, 5);
  expect(subscriber.complete).toBeCalledWith(error);
});

test("onComplete", () => {
  const subscriber = createMockSubscriber();
  const cb = jest.fn();
  const onCompleteSubscriber = pipe(subscriber, onComplete(cb));

  onCompleteSubscriber.complete();
  expect(subscriber.complete).toHaveBeenCalledWith(undefined);
  expect(cb).toHaveBeenCalledWith(undefined);
});

describe("onError", () => {
  test("when completed with error", () => {
    const subscriber = createMockSubscriber();
    const cb = jest.fn();
    const onCompleteSubscriber = pipe(subscriber, onError(cb));
    const error = new Error();

    onCompleteSubscriber.complete(error);
    expect(subscriber.complete).toHaveBeenCalledWith(error);
    expect(cb).toHaveBeenCalledWith(error);
  });

  test("when completed without error", () => {
    const subscriber = createMockSubscriber();
    const cb = jest.fn();
    const onCompleteSubscriber = pipe(subscriber, onError(cb));

    onCompleteSubscriber.complete();
    expect(subscriber.complete).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledTimes(0);
  });
});

test("onNext", () => {
  const subscriber = createMockSubscriber();
  const cb = jest.fn();
  const onNextSubscriber = pipe(subscriber, onNext(cb));

  onNextSubscriber.next(1);
  expect(subscriber.next).toHaveBeenCalledWith(1);
  expect(cb).toHaveBeenCalledWith(1);
});

test("scan", () => {
  const subscriber = createMockSubscriber();
  const scanSubscriber = pipe(
    subscriber,
    scan((acc: number, x: number) => acc + x, 0),
  );
  const error = new Error();

  scanSubscriber.next(1);
  scanSubscriber.next(2);
  scanSubscriber.next(3);
  scanSubscriber.complete(error);
  expect(subscriber.next).toHaveBeenNthCalledWith(1, 1);
  expect(subscriber.next).toHaveBeenNthCalledWith(2, 3);
  expect(subscriber.next).toHaveBeenNthCalledWith(3, 6);
  expect(subscriber.complete).toBeCalledWith(error);
});

test("switch", () => {
  const scheduler = virtualTimeSchedulerCreate();

  const subscriber = createMockSubscriberWithScheduler(scheduler);

  const switchObserver = toSafeObserver(pipe(subscriber, switch_()));

  const innerObservable = observableCreate(observer => {
    observer.next(1);
    observer.next(2);
  });

  const error = new Error();

  scheduler.schedule(_ => switchObserver.next(innerObservable), 1);
  scheduler.schedule(_ => switchObserver.next(innerObservable), 2);

  const innerObservableWithError = observableCreate(observer => {
    observer.next(1);
    observer.next(2);
    observer.complete(error);
  });

  scheduler.schedule(_ => switchObserver.next(innerObservableWithError), 3);

  scheduler.run();

  expect(subscriber.next).toBeCalledTimes(6);
  expect(subscriber.next).toHaveBeenNthCalledWith(1, 1);
  expect(subscriber.next).toHaveBeenNthCalledWith(2, 2);
  expect(subscriber.next).toHaveBeenNthCalledWith(3, 1);
  expect(subscriber.next).toHaveBeenNthCalledWith(4, 2);
  expect(subscriber.next).toHaveBeenNthCalledWith(5, 1);
  expect(subscriber.next).toHaveBeenNthCalledWith(6, 2);

  expect(subscriber.complete).toBeCalledTimes(1);
  expect(subscriber.complete).toBeCalledWith(error);
});

test("take", () => {
  const subscriber = createMockSubscriber();
  const takeSubscriber = pipe(subscriber, take(2));

  takeSubscriber.next(1);
  takeSubscriber.next(2);
  takeSubscriber.next(3);
  takeSubscriber.next(4);
  takeSubscriber.complete();

  expect(subscriber.next).toHaveBeenCalledTimes(2);
  expect(subscriber.next).toHaveBeenNthCalledWith(1, 1);
  expect(subscriber.next).toHaveBeenNthCalledWith(2, 2);
  expect(subscriber.complete).toBeCalledWith(undefined);
});

describe("takeLast", () => {
  test("publishes the last n values when completed", () => {
    const scheduler = virtualTimeSchedulerCreate(2);
    const subscriber = createMockSubscriberWithScheduler(scheduler);

    const takeObserver = toSafeObserver(pipe(subscriber, takeLast(3)));

    takeObserver.next(1);
    takeObserver.next(2);
    takeObserver.next(3);
    takeObserver.next(4);
    takeObserver.complete();
    takeObserver.next(5);

    scheduler.run();

    expect(subscriber.next).toHaveBeenCalledTimes(3);
    expect(subscriber.next).toHaveBeenNthCalledWith(1, 2);
    expect(subscriber.next).toHaveBeenNthCalledWith(2, 3);
    expect(subscriber.next).toHaveBeenNthCalledWith(3, 4);
    expect(subscriber.complete).toBeCalled();
  });

  test("immediately completes with an error if completed with an error", () => {
    const scheduler = virtualTimeSchedulerCreate();
    const subscriber = createMockSubscriberWithScheduler(scheduler);

    const takeObserver = toSafeObserver(pipe(subscriber, takeLast(2)));
    const error = new Error();

    takeObserver.next(1);
    takeObserver.next(2);
    takeObserver.next(3);
    takeObserver.next(4);
    takeObserver.complete(error);
    takeObserver.next(5);

    scheduler.run();

    expect(subscriber.next).toHaveBeenCalledTimes(0);
    expect(subscriber.complete).toBeCalledWith(error);
  });
});

test("withLatestFrom", () => {
  const scheduler = virtualTimeSchedulerCreate();
  const error = new Error();

  const otherObservable = observableCreate(observer => {
    observer.next(1);
    observer.next(2);

    scheduler.schedule(_ => {
      observer.next(3);
      return {
        continuation: _ => observer.complete(error),
        delay: 4,
      };
    }, 3);
  });

  const subscriber = createMockSubscriberWithScheduler(scheduler);

  const withLatestFromObserver = toSafeObserver(
    withLatestFrom(otherObservable, (a, b) => [a, b])(subscriber),
  );

  withLatestFromObserver.next(1);
  withLatestFromObserver.next(2);
  withLatestFromObserver.next(3);

  scheduler.schedule(_ => {
    withLatestFromObserver.next(1);
    withLatestFromObserver.next(2);
    withLatestFromObserver.next(3);

    return {
      continuation: _ => withLatestFromObserver.next(4),
      delay: 2,
    };
  }, 3);

  scheduler.run();

  expect(subscriber.next).toHaveBeenNthCalledWith(1, [1, 2]);
  expect(subscriber.next).toHaveBeenNthCalledWith(2, [2, 2]);
  expect(subscriber.next).toHaveBeenNthCalledWith(3, [3, 2]);
  expect(subscriber.next).toHaveBeenNthCalledWith(4, [1, 3]);
  expect(subscriber.next).toHaveBeenNthCalledWith(5, [2, 3]);
  expect(subscriber.next).toHaveBeenNthCalledWith(6, [3, 3]);
  expect(subscriber.complete).toBeCalledWith(error);
});
