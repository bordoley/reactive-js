import {
  Notification,
  NotificationKind,
  notify,
  ObserverLike,
} from "@reactive-js/rx-observer";

import { create as disposableCreate, disposed } from "@reactive-js/disposable";
import { create as virtualTimeSchedulerCreate } from "@reactive-js/virtualtime-scheduler";

import { observe, SubscriberLike, toSafeObserver } from "../src/index";

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

const createMockObserver = <T>(): ObserverLike<T> => ({
  next: jest.fn(),
  complete: jest.fn(),
});

describe("observe", () => {
  describe("next", () => {
    test("with value", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = observe(observer)(subscriber);

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
      const delegatedSubscriber = observe(observer)(subscriber);

      delegatedSubscriber.next("a");
      expect(subscriber.complete).toBeCalledWith(error);
    });

    test("throws if not connected", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = observe(observer)(subscriber);

      (subscriber as any).isConnected = false;

      expect(() => delegatedSubscriber.next("a")).toThrow();
    });

    test("throws if not executing in SchedulerContinuation", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = observe(observer)(subscriber);

      (subscriber as any).inScheduledContinuation = false;

      expect(() => delegatedSubscriber.next("a")).toThrow();
    });
  });

  describe("complete", () => {
    test("with error", () => {
      const subscriber = createMockSubscriber();
      const observer = createMockObserver();
      const delegatedSubscriber = observe(observer)(subscriber);

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
      const delegatedSubscriber = observe(observer)(subscriber);

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
      const delegatedSubscriber = observe(observer)(subscriber);

      (subscriber as any).inScheduledContinuation = false;

      expect(() => delegatedSubscriber.complete()).toThrow();
    });
  });

  test("disposing the subscriber blocks further notifications", () => {
    const subscriber = createMockSubscriber();
    const observer = createMockObserver();
    const delegatedSubscriber = observe(observer)(subscriber);

    subscriber.dispose();
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

describe("Subscriber", () => {
  describe("toSafeObserver", () => {
    test("next", () => {
      const scheduler = virtualTimeSchedulerCreate(2);
      const subscription = disposableCreate();
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
        schedule: (c, d?, p?) => scheduler.schedule(c, d, p),
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
});
