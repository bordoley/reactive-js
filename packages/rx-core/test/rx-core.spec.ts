import {
  notify,
  observe,
  Notification,
  NotificationKind,
  Observable,
  ObserverLike,
  Subscriber,
  SubscriberLike,
  ObservableLike,
  Operator,
} from "../src/index";
import { Disposable } from "@reactive-js/disposables";
import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";

const createMockSubscriber = <T>(): SubscriberLike<T> => {
  const subscription = Disposable.create();

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
    schedule: (c, d?, p?) => Disposable.disposed,
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
      const scheduler = VirtualTimeScheduler.create(2);
      const subscription = Disposable.create();
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

      const observer = Subscriber.toSafeObserver(subscriber);

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

describe("Observable", () => {
  describe("connect", () => {
    test("throws with serial observable", () => {
      const seriallyCallsNextOnSubscribe: ObservableLike<number> = {
        subscribe: subscriber => subscriber.next(1),
      };

      const seriallyCallsCompleteOnSubscribe: ObservableLike<number> = {
        subscribe: subscriber => subscriber.complete(),
      };

      expect(() =>
        Observable.connect(
          seriallyCallsNextOnSubscribe,
          VirtualTimeScheduler.create(),
        ),
      ).toThrow();
      expect(() =>
        Observable.connect(
          seriallyCallsCompleteOnSubscribe,
          VirtualTimeScheduler.create(),
        ),
      ).toThrow();
    });

    test("auto-disposes the subscription on complete", () => {
      const observable = Observable.create(observer => observer.complete());
      const scheduler = VirtualTimeScheduler.create();

      const subscription = Observable.connect(observable, scheduler);
      expect(subscription.isDisposed).toBeFalsy();

      scheduler.run();
      expect(subscription.isDisposed).toBeTruthy();
    });
  });

  describe("create", () => {
    test("completes the subscriber if onSubscribe throws", () => {
      const error = new Error();
      const observer = createMockObserver();
      const observable = Observable.lift(
        Observable.create(_ => {
          throw error;
        }),
        observe(observer),
      );
      const scheduler = VirtualTimeScheduler.create();
      Observable.connect(observable, scheduler);
      scheduler.run();

      expect(observer.complete).toBeCalledWith(error);
    });

    test("disposes the returned onSubscribe dispsoable when the returned subscription is disposed", () => {
      const scheduler = VirtualTimeScheduler.create();
      const disposable = Disposable.create();

      const subscription = Observable.connect(
        Observable.create(_ => disposable),
        scheduler,
      );
      scheduler.run();

      expect(disposable.isDisposed).toBeFalsy();
      subscription.dispose();
      expect(disposable.isDisposed).toBeTruthy();
    });
  });

  test("lift", () => {
    const onNext = <T>(onNext: (data: T) => void): Operator<T, T> =>
      observe({
        next: onNext,
        complete: _ => {},
      });
    const scheduler = VirtualTimeScheduler.create();
    const result: number[] = [];

    const liftedObservable = Observable.lift(
      Observable.create(observer => observer.next(1)),
      onNext(_ => result.push(1)),
      onNext(_ => result.push(2)),
    );

    const subscription = Observable.connect(
      Observable.lift(
        liftedObservable,
        onNext(_ => result.push(3)),
        onNext(_ => result.push(4)),
      ),
      scheduler,
    );
    scheduler.run();

    expect(result).toEqual([1, 2, 3, 4]);
  });
});
