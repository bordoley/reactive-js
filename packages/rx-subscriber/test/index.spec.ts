import {
  Notification,
  NotificationKind,
  notify,
  ObserverLike,
} from "@reactive-js/rx-observer";

import { create as createDisposable, disposed } from "@reactive-js/disposable";
import { create as createVirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";

import {
  createAutoDisposing,
  observe,
  pipe,
  SubscriberLike,
  toSafeObserver,
} from "../src/index";

const createMockSubscriber = <T>(): SubscriberLike<T> => {
  const subscription = createDisposable();

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

const createMockObserver = <T>(): ObserverLike<T> => ({
  next: jest.fn(),
  complete: jest.fn(),
});

describe("createAutoDisposing", () => {
  test("is not connected when created", () => {
    const subscription = createDisposable();
    const scheduler = createVirtualTimeScheduler();
    const subscriber = createAutoDisposing(scheduler, subscription);

    expect(subscriber.isConnected).toBeFalsy();
  });
  test("calling next and complete throws if not connected", () => {
    const subscription = createDisposable();
    const scheduler = createVirtualTimeScheduler();
    const subscriber = createAutoDisposing(scheduler, subscription);

    expect(() => subscriber.next(1)).toThrow();
    expect(() => subscriber.complete()).toThrow();
  });
  test("calling next and complete throws if not scheduled", () => {
    const subscription = createDisposable();
    const scheduler = createVirtualTimeScheduler();
    const subscriber = createAutoDisposing(scheduler, subscription);
    subscriber.connect();

    expect(() => subscriber.next(1)).toThrow();
    expect(() => subscriber.complete()).toThrow();
  });
  test("completing a connected subscriber disposes it", () => {
    const subscription = createDisposable();
    const scheduler = createVirtualTimeScheduler();
    const subscriber = createAutoDisposing(scheduler, subscription);
    subscriber.connect();

    expect(subscriber.isConnected).toBeTruthy();
    expect(subscriber.isDisposed).toBeFalsy();
    const schedulerSubscription = subscriber.schedule(_ =>
      subscriber.complete(),
    );
    expect(schedulerSubscription.isDisposed).toBeFalsy();
    scheduler.run();
    expect(subscriber.isDisposed).toBeTruthy();
    expect(schedulerSubscription.isDisposed).toBeTruthy();
  });
});

describe("observe", () => {
  describe("next", () => {
    test("with value", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = pipe(subscriber, observe(observer));

      delegatedSubscriber.next("a");
      expect(observer.next).toBeCalledWith("a");
      expect(subscriber.next).toBeCalledWith("a");
    });

    test("when observer throws Error", () => {
      const subscriber = createMockSubscriber();
      const error = new Error();
      const observer: ObserverLike<any> = {
        next: _ => {
          throw error;
        },
        complete: _ => {},
      };
      const delegatedSubscriber = pipe(subscriber, observe(observer));

      delegatedSubscriber.next("a");
      expect(subscriber.complete).toBeCalledWith(error);
    });

    test("throws if not connected", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = pipe(subscriber, observe(observer));

      (subscriber as any).isConnected = false;

      expect(() => delegatedSubscriber.next("a")).toThrow();
    });

    test("throws if not executing in SchedulerContinuation", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = pipe(subscriber, observe(observer));

      (subscriber as any).inScheduledContinuation = false;

      expect(() => delegatedSubscriber.next("a")).toThrow();
    });
  });

  describe("complete", () => {
    test("with error", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = pipe(subscriber, observe(observer));

      const error = new Error();
      delegatedSubscriber.complete(error);
      expect(observer.complete).toBeCalledWith(error);
      expect(subscriber.complete).toBeCalledWith(error);
    });

    test("when observer throws Error", () => {
      const subscriber = createMockSubscriber();
      const error = new Error();
      const observer: ObserverLike<any> = {
        next: _ => {},
        complete: _ => {
          throw error;
        },
      };
      const delegatedSubscriber = pipe(subscriber, observe(observer));

      delegatedSubscriber.complete();
      expect(subscriber.complete).toBeCalledWith(error);
    });

    test("throws if not connected", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = observe(observer)(subscriber);

      (subscriber as any).isConnected = false;

      expect(() => delegatedSubscriber.complete()).toThrow();
    });

    test("throws if not executing in SchedulerContinuation", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = pipe(subscriber, observe(observer));

      (subscriber as any).inScheduledContinuation = false;

      expect(() => delegatedSubscriber.complete()).toThrow();
    });
  });

  test("disposing the subscriber blocks further notifications", () => {
    const subscriber = createMockSubscriber();
    const observer = createMockObserver();
    const delegatedSubscriber = pipe(subscriber, observe(observer));

    subscriber.dispose();
    delegatedSubscriber.next("a");
    expect(observer.next).toBeCalledTimes(0);
  });

  test("completing the subscriber blocks further notifications", () => {
    const subscriber = createMockSubscriber();
    const observer = createMockObserver();
    const delegatedSubscriber = pipe(subscriber, observe(observer));

    delegatedSubscriber.complete();
    delegatedSubscriber.next("a");
    expect(observer.next).toBeCalledTimes(0);
  });
});

test("pipe", () => {
  const result: number[] = [];
  const subscriber = createMockSubscriber();
  const delegatedSubscriber = pipe(
    subscriber,
    observe({
      next: (i: number) => {
        result.push(i + 1);
      },
      complete: _ => {},
    }),
    observe({
      next: (i: number) => {
        result.push(i + 2);
      },
      complete: _ => {},
    }),
  );

  delegatedSubscriber.next(0);

  expect(result).toEqual([1, 2]);
});

describe("toSafeObserver", () => {
  test("next", () => {
    const scheduler = createVirtualTimeScheduler(2);
    const subscription = createDisposable();
    const subscriber: SubscriberLike<number> = {
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
      schedule: (c, options) => scheduler.schedule(c, options),
      next: jest.fn(),
      complete: jest.fn(),
    };

    const observer = toSafeObserver(subscriber);

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
    expect(subscriber.complete).toBeCalledTimes(1);
    expect(subscriber.next).toHaveBeenLastCalledWith(5);
  });
});
