import { create as disposableCreate, disposed } from "@reactive-js/disposable";
import { create as observableCreate } from "@reactive-js/rx-observable";
import { SubscriberLike, toSafeObserver } from "@reactive-js/rx-subscriber";
import { create as virtualTimeSchedulerCreate } from "@reactive-js/virtualtime-scheduler";

import { SchedulerLike } from "@reactive-js/scheduler";
import {
  concat,
  debounceTime,
  delay,
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

test("distinctUntilChanged", () => {
  const subscriber = createMockSubscriber();
  const distinctUntilChangedSubscriber = distinctUntilChanged()(subscriber);
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
  const keepSubscriber = keep((x: number) => x % 2 === 0)(subscriber);
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
  const ignoreSubscriber = ignoreElements()(subscriber);
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
  const mappedSubscriber = map((x: number) => x * 2)(subscriber);
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
  const mappedSubscriber = mapTo(5)(subscriber);
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

test("scan", () => {
  const subscriber = createMockSubscriber();
  const scanSubscriber = scan(
    (acc: number, x: number) => acc + x,
    0,
  )(subscriber);
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

  const switchObserver = toSafeObserver(switch_()(subscriber));

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
