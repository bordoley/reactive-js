import {
  notify,
  observe,
  Notification,
  NotificationKind,
  Observable,
  ObserverLike,
  SubscriberLike,
  observeOn,
} from "../src/index";
import { CompositeDisposable, Disposable } from "@reactive-js/disposables";
import { SchedulerLike } from "@reactive-js/scheduler";

import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";

const createMockSubscriber = <T>(): SubscriberLike<T> => {
  const scheduler: SchedulerLike = {
    now: 0,
    schedule: (c, d?, p?) => Disposable.disposed,
  };

  return {
    isConnected: true,
    scheduler,
    subscription: CompositeDisposable.create(),
    next: jest.fn(),
    complete: jest.fn(),
  };
};

const createMockObserver = <T>(): ObserverLike<T> => ({
  next: jest.fn(),
  complete: jest.fn(),
});

test("notify", () => {
  const observer = {
    next: jest.fn(),
    complete: jest.fn(),
  };

  notify(observer, [NotificationKind.Next, "a"]);
  expect(observer.next).toBeCalledWith("a");

  const error = new Error();
  notify(observer, [NotificationKind.Complete, error]);
  expect(observer.complete).toBeCalledWith(error);
});

describe("observe", () => {
  test("next", () => {
    const subscriber = createMockSubscriber();
    const observer = createMockObserver();
    const delegatedSubscriber = observe(observer)(subscriber);

    delegatedSubscriber.next("a");
    expect(observer.next).toBeCalledWith("a");
    expect(observer.next).toBeCalledWith("a");
  });

  test("next when observer throws Error", () => {
    const subscriber = createMockSubscriber();
    const error = new Error();
    const observer: ObserverLike<any> = {
      next: _ => {
        throw error;
      },
      complete: _ => {},
    };
    const delegatedSubscriber = observe(observer)(subscriber);

    delegatedSubscriber.next("a");
    expect(subscriber.complete).toBeCalledWith(error);
  });

  test("complete", () => {
    const subscriber = createMockSubscriber();
    const observer = createMockObserver();
    const delegatedSubscriber = observe(observer)(subscriber);

    const error = new Error();
    delegatedSubscriber.complete(error);
    expect(observer.complete).toBeCalledWith(error);
    expect(subscriber.complete).toBeCalledWith(error);
  });

  test("complete when observer throws Error", () => {
    const subscriber = createMockSubscriber();
    const error = new Error();
    const observer: ObserverLike<any> = {
      next: _ => { },
      complete: _ => {
        throw error;
      },
    };
    const delegatedSubscriber = observe(observer)(subscriber);

    delegatedSubscriber.complete()
    expect(subscriber.complete).toBeCalledWith(error);
  });

  test("disposing the subscriber blocks further notifications", () => {
    const subscriber = createMockSubscriber();
    const observer = createMockObserver();
    const delegatedSubscriber = observe(observer)(subscriber);

    subscriber.subscription.dispose();
    delegatedSubscriber.next("a");
    expect(observer.next).toBeCalledTimes(0);
  });

  test("completing the subscriber blocks further notifications", () => {
    const subscriber = createMockSubscriber();
    const observer = createMockObserver();
    const delegatedSubscriber = observe(observer)(subscriber);

    delegatedSubscriber.complete();
    delegatedSubscriber.next("a");
    expect(observer.next).toBeCalledTimes(0);
  });
});


describe("observeOn", () => {
  test("next", () => {
    const scheduler = VirtualTimeScheduler.create(2);
    const subscriber = {
      isConnected: true,
      scheduler,
      subscription: CompositeDisposable.create(),
      next: jest.fn(),
      complete: jest.fn(),
    };

    const observer = observeOn(subscriber);

    const notifications: Notification<number>[] = [
      [NotificationKind.Next, 0],
      [NotificationKind.Next, 1],
      [NotificationKind.Next, 2],
      [NotificationKind.Next, 3],
      [NotificationKind.Next, 4],
      [NotificationKind.Next, 5],
      [NotificationKind.Complete, undefined],
      [NotificationKind.Next, 6],
    ];

    for (let nofification of notifications) {
      notify(observer, nofification);
    }

    scheduler.run();

    expect(subscriber.next).toBeCalledTimes(6);
    expect(subscriber.next).toHaveBeenLastCalledWith(5);
  });



});
