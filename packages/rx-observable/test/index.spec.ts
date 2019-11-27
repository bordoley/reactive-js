import { create as disposableCreate, disposed } from "@reactive-js/disposable";
import { ObserverLike } from "@reactive-js/rx-observer";
import {
  observe,
  SubscriberLike,
  SubscriberOperator,
} from "@reactive-js/rx-subscriber";
import { create as virtualTimeSchedulerCreate } from "@reactive-js/virtualtime-scheduler";
import {
  connect,
  create as observableCreate,
  lift,
  ObservableLike,
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

const createMockObserver = <T>(): ObserverLike<T> => ({
  next: jest.fn(),
  complete: jest.fn(),
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
        connect(seriallyCallsNextOnSubscribe, virtualTimeSchedulerCreate()),
      ).toThrow();
      expect(() =>
        connect(seriallyCallsCompleteOnSubscribe, virtualTimeSchedulerCreate()),
      ).toThrow();
    });

    test("auto-disposes the subscription on complete", () => {
      const observable = observableCreate(observer => observer.complete());
      const scheduler = virtualTimeSchedulerCreate();

      const subscription = connect(observable, scheduler);
      expect(subscription.isDisposed).toBeFalsy();

      scheduler.run();
      expect(subscription.isDisposed).toBeTruthy();
    });
  });

  describe("create", () => {
    test("completes the subscriber if onSubscribe throws", () => {
      const error = new Error();
      const observer = createMockObserver();
      const observable = lift(
        observableCreate(_ => {
          throw error;
        }),
        observe(observer),
      );
      const scheduler = virtualTimeSchedulerCreate();
      connect(observable, scheduler);
      scheduler.run();

      expect(observer.complete).toBeCalledWith(error);
    });

    test("disposes the returned onSubscribe dispsoable when the returned subscription is disposed", () => {
      const scheduler = virtualTimeSchedulerCreate();
      const disposable = disposableCreate();

      const subscription = connect(
        observableCreate(_ => disposable),
        scheduler,
      );
      scheduler.run();

      expect(disposable.isDisposed).toBeFalsy();
      subscription.dispose();
      expect(disposable.isDisposed).toBeTruthy();
    });
  });

  test("lift", () => {
    const onNext = <T>(onNext: (data: T) => void): SubscriberOperator<T, T> =>
      observe({
        next: onNext,
        complete: _ => {},
      });
    const scheduler = virtualTimeSchedulerCreate();
    const result: number[] = [];

    const liftedObservable = lift(
      observableCreate(observer => observer.next(1)),
      onNext(_ => result.push(1)),
    );

    const subscription = connect(
      lift(
        liftedObservable,
        onNext(_ => result.push(3)),
      ),
      scheduler,
    );
    scheduler.run();

    expect(result).toEqual([1, 3]);
  });
});
