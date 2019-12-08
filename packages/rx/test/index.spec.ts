import {
  connect,
  createObservable,
  createSubject,
  ObservableLike,
} from "../src/index";

import {
  createDisposable,
} from "@reactive-js/disposable";

import { SchedulerLike } from "@reactive-js/scheduler";

import {
  createVirtualTimeScheduler,
} from "@reactive-js/schedulers";

import {AbstractSubscriber} from "../src/internal/abstractSubscriber";

class MockSubscriber<T> extends AbstractSubscriber<T> {
  readonly isConnected = true;
  next= jest.fn();
  complete= jest.fn();

  constructor(scheduler: SchedulerLike) {
    super(scheduler, createDisposable());
  }
}

describe("rx", () => {
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

  describe("createObservable", () => {
    test("completes the subscriber if onSubscribe throws", () => {
      const scheduler = createVirtualTimeScheduler();
      const subscriber = new MockSubscriber(scheduler);
      const cause = new Error();
      const observable = createObservable(_ => { throw cause; })
      
      observable.subscribe(subscriber);
      scheduler.run();

      expect(subscriber.complete).toBeCalledWith({ cause });
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

  describe("createSubject", () => {
    test("when subject is completed", () => {
      const subject = createSubject(2);
  
      subject.next(1);
      subject.next(2);
      subject.next(3);
      subject.complete();
  
      const scheduler = createVirtualTimeScheduler();
      const subscriber = new MockSubscriber(scheduler);
      subject.subscribe(subscriber);
      scheduler.run();
  
      expect(subscriber.next).toHaveBeenNthCalledWith(1, 3);
      expect(subscriber.complete).toHaveBeenCalled();
    });
    test("when subject is not completed", () => {
      const subject = createSubject(2);
  
      subject.next(1);
      subject.next(2);
      subject.next(3);
  
      const scheduler = createVirtualTimeScheduler();
      const subscriber = new MockSubscriber(scheduler);
      subject.subscribe(subscriber);
      scheduler.schedule(_ => {
        subject.next(4);
        subject.complete();
      });
      scheduler.run();
  
      expect(subscriber.next).toHaveBeenNthCalledWith(1, 2);
      expect(subscriber.next).toHaveBeenNthCalledWith(2, 3);
      expect(subscriber.next).toHaveBeenNthCalledWith(3, 4);
      expect(subscriber.complete).toHaveBeenCalled();
    });
  
    test("subscribe and dispose the subscription remove the observer", () => {
      const subject = createSubject(2);
  
      subject.next(1);
      subject.next(2);
      subject.next(3);
  
      const scheduler = createVirtualTimeScheduler();
      const subscriber = new MockSubscriber(scheduler);
      subject.subscribe(subscriber);;
      subscriber.dispose();
      scheduler.run();
  
      expect(subscriber.next).toHaveBeenCalledTimes(0);
    });
  });
});