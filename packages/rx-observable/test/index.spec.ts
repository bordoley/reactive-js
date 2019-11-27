import { create as createDisposable, disposed } from "@reactive-js/disposable";
import { ObserverLike } from "@reactive-js/rx-observer";
import { SubscriberLike } from "@reactive-js/rx-subscriber";
import { create as createVirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";
import {
  connect,
  create as createObservable,
  ObservableLike,
  observe,
  pipe,
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
        connect(seriallyCallsNextOnSubscribe, createVirtualTimeScheduler()),
      ).toThrow();
      expect(() =>
        connect(seriallyCallsCompleteOnSubscribe, createVirtualTimeScheduler()),
      ).toThrow();
    });

    test("auto-disposes the subscription on complete", () => {
      const observable = createObservable(observer => observer.complete());
      const scheduler = createVirtualTimeScheduler();

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
      const observable = pipe(
        createObservable(_ => {
          throw error;
        }),
        observe(observer),
      );
      const scheduler = createVirtualTimeScheduler();
      connect(observable, scheduler);
      scheduler.run();

      expect(observer.complete).toBeCalledWith(error);
    });

    test("disposes the returned onSubscribe dispsoable when the returned subscription is disposed", () => {
      const scheduler = createVirtualTimeScheduler();
      const disposable = createDisposable();

      const subscription = connect(
        createObservable(_ => disposable),
        scheduler,
      );
      scheduler.run();

      expect(disposable.isDisposed).toBeFalsy();
      subscription.dispose();
      expect(disposable.isDisposed).toBeTruthy();
    });
  });

  test("lift", () => {
    const onNext = <T>(onNext: (data: T) => void) =>
      observe({
        next: onNext,
        complete: _ => {},
      });
    const scheduler = createVirtualTimeScheduler();
    const result: number[] = [];

    const liftedObservable = pipe(
      createObservable(observer => observer.next(1)),
      onNext(_ => result.push(1)),
    );

    const subscription = connect(
      pipe(
        liftedObservable,
        onNext(_ => result.push(3)),
      ),
      scheduler,
    );
    scheduler.run();

    expect(result).toEqual([1, 3]);
  });
});
