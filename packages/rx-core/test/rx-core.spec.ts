import {
  notify,
  observe,
  NotificationKind,
  Observable,
  ObserverLike,
  SubscriberLike,
} from "../src/index";
import { CompositeDisposable, Disposable } from "@reactive-js/disposables";
import { SchedulerLike } from "@reactive-js/scheduler";

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
  const createSubscriber = <T>(): SubscriberLike<T> => {
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

  const createObserver = <T>(): ObserverLike<T> => ({
    next: jest.fn(),
    complete: jest.fn(),
  });

  test("next", () => {
    const subscriber = createSubscriber();
    const observer = createObserver();
    const delegatedSubscriber = observe(observer)(subscriber);

    delegatedSubscriber.next("a");
    expect(observer.next).toBeCalledWith("a");
    expect(observer.next).toBeCalledWith("a");
  });

  test("next when observer throws Error", () => {
    const subscriber = createSubscriber();
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
    const subscriber = createSubscriber();
    const observer = createObserver();
    const delegatedSubscriber = observe(observer)(subscriber);

    const error = new Error();
    delegatedSubscriber.complete(error);
    expect(observer.complete).toBeCalledWith(error);
    expect(subscriber.complete).toBeCalledWith(error);
  });

  test("complete when observer throws Error", () => {
    const subscriber = createSubscriber();
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
    const subscriber = createSubscriber();
    const observer = createObserver();
    const delegatedSubscriber = observe(observer)(subscriber);

    subscriber.subscription.dispose();
    delegatedSubscriber.next("a");
    expect(observer.next).toBeCalledTimes(0);
  });

  test("completing the subscriber blocks further notifications", () => {
    const subscriber = createSubscriber();
    const observer = createObserver();
    const delegatedSubscriber = observe(observer)(subscriber);

    delegatedSubscriber.complete();
    delegatedSubscriber.next("a");
    expect(observer.next).toBeCalledTimes(0);
  });
});
