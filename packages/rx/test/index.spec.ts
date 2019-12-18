import {
  subscribe,
  createObservable,
  createSubject,
  ObservableLike,
} from "../src/index";

import { createDisposable } from "@reactive-js/disposable";

import { pipe } from "@reactive-js/pipe";

import { SchedulerLike } from "@reactive-js/scheduler";

import { createVirtualTimeSchedulerResource } from "@reactive-js/schedulers";

import { AbstractSubscriber } from "../src/internal/abstractSubscriber";
import { ObserverLike } from "../dist/types";

class MockSubscriber<T> extends AbstractSubscriber<T> {
  readonly isSubscribed = true;
  readonly isCompleted = false;

  next = jest.fn();
  nextUnsafe = jest.fn();
  complete = jest.fn();

  constructor(scheduler: SchedulerLike) {
    super(scheduler, createDisposable());
  }
}

describe("rx", () => {
  describe("subscribe", () => {
    test("throws with serial observable", () => {
      const seriallyCallsNextOnSubscribe: ObservableLike<number> = {
        subscribe: subscriber => subscriber.next(1),
      };

      const seriallyCallsCompleteOnSubscribe: ObservableLike<number> = {
        subscribe: subscriber => subscriber.complete(),
      };

      expect(() =>
        pipe(
          seriallyCallsNextOnSubscribe,
          subscribe(createVirtualTimeSchedulerResource()),
        ),
      ).toThrow();
      expect(() =>
        pipe(
          seriallyCallsCompleteOnSubscribe,
          subscribe(createVirtualTimeSchedulerResource()),
        ),
      ).toThrow();
    });

    test("auto-disposes the subscription on complete", () => {
      const observable = createObservable(observer => observer.onComplete());
      const scheduler = createVirtualTimeSchedulerResource();

      const subscription = pipe(observable, subscribe(scheduler));
      expect(subscription.isDisposed).toBeFalsy();

      scheduler.run();
      expect(subscription.isDisposed).toBeTruthy();
    });
  });

  describe("createObservable", () => {
    test("completes the subscriber if onSubscribe throws", () => {
      const scheduler = createVirtualTimeSchedulerResource();
      const subscriber = new MockSubscriber(scheduler);
      const cause = new Error();
      const observable = createObservable(_ => {
        throw cause;
      });

      observable.subscribe(subscriber);
      scheduler.run();

      expect(subscriber.complete).toBeCalledWith({ cause });
    });

    test("disposes the returned onSubscribe dispsoable when the returned subscription is disposed", () => {
      const scheduler = createVirtualTimeSchedulerResource();
      const disposable = createDisposable();

      const subscription = pipe(
        (_: ObserverLike<unknown>) => disposable,
        createObservable,
        subscribe(scheduler),
      );
      scheduler.run();

      expect(disposable.isDisposed).toBeFalsy();
      subscription.dispose();
      expect(disposable.isDisposed).toBeTruthy();
    });
  });

  describe("createSubject", () => {
    test("when subject is completed", () => {
      const subject = createSubject(2);

      subject.onNext(1);
      subject.onNext(2);
      subject.onNext(3);
      subject.onComplete();

      const scheduler = createVirtualTimeSchedulerResource();
      const subscriber = new MockSubscriber(scheduler);
      subject.subscribe(subscriber);

      expect(subject.subscriberCount).toEqual(0);
      scheduler.run();

      expect(subscriber.next).toHaveBeenNthCalledWith(1, 3);
      expect(subscriber.complete).toHaveBeenCalled();
    });

    test("when subject is not completed", () => {
      const subject = createSubject(2);

      subject.onNext(1);
      subject.onNext(2);
      subject.onNext(3);

      const scheduler = createVirtualTimeSchedulerResource();
      const subscriber = new MockSubscriber(scheduler);
      subject.subscribe(subscriber);
      scheduler.schedule(_ => {
        subject.onNext(4);
        subject.onComplete();
      });

      expect(subject.subscriberCount).toEqual(1);
      scheduler.run();

      expect(subscriber.next).toHaveBeenNthCalledWith(1, 2);
      expect(subscriber.next).toHaveBeenNthCalledWith(2, 3);
      expect(subscriber.next).toHaveBeenNthCalledWith(3, 4);
      expect(subscriber.complete).toHaveBeenCalled();
    });

    test("subscribe and dispose the subscription remove the observer", () => {
      const subject = createSubject(2);

      subject.onNext(1);
      subject.onNext(2);
      subject.onNext(3);

      const scheduler = createVirtualTimeSchedulerResource();
      const subscriber = new MockSubscriber(scheduler);

      subject.subscribe(subscriber);
      expect(subject.subscriberCount).toEqual(1);

      subscriber.dispose();
      expect(subject.subscriberCount).toEqual(0);

      scheduler.run();
      expect(subscriber.isDisposed).toBeTruthy();
      expect(subscriber.next).toHaveBeenCalledTimes(0);
    });

    test("disposed subject ignores notifications", () => {
      const subject = createSubject(2);
      const scheduler = createVirtualTimeSchedulerResource();
      const subscriber = new MockSubscriber(scheduler);

      subject.subscribe(subscriber);
      expect(subject.isDisposed).toBeFalsy();

      subject.dispose();
      expect(subject.isDisposed).toBeTruthy();

      subject.onNext(1);
      subject.onComplete();
      expect(subscriber.next).toHaveBeenCalledTimes(0);
      expect(subscriber.complete).toHaveBeenCalledTimes(0);
    });

    test("disposes subscriber if disposed", () => {
      const subject = createSubject(2);
      const scheduler = createVirtualTimeSchedulerResource();
      const subscriber = new MockSubscriber(scheduler);

      subject.dispose();
      subject.subscribe(subscriber);
      expect(subscriber.isDisposed).toBeTruthy();
    });
  });
});
