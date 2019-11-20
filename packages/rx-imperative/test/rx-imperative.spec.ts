import { observe, Observable, ObserverLike } from "@reactive-js/rx-core";
import { Disposable } from "@reactive-js/disposables";
import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";

import { shareReplayLast, EventResource } from "../src/index";

const createMockObserver = <T>(): ObserverLike<T> => ({
  next: jest.fn(),
  complete: jest.fn(),
});

test("shareReplayLast", () => {
  const scheduler = VirtualTimeScheduler.create();

  const source = Observable.create(observer => {
    observer.next(0);
    observer.next(1);
    observer.next(2);

    return scheduler.schedule(_ => observer.complete(), 2);
  });

  const replayed = shareReplayLast(source, scheduler);
  const replayedSubscription = Observable.connect(replayed, scheduler);

  const liftedObserver = createMockObserver();
  let liftedSubscription = Disposable.disposed;
  scheduler.schedule(_ => {
    liftedSubscription = Observable.connect(
      Observable.lift(replayed, observe(liftedObserver)),
      scheduler,
    );
  }, 1);

  const anotherLiftedSubscriptionObserver = createMockObserver();
  let anotherLiftedSubscription = Disposable.disposed;
  scheduler.schedule(_ => {
    replayedSubscription.dispose();
    liftedSubscription.dispose();

    anotherLiftedSubscription = Observable.connect(
      Observable.lift(replayed, observe(anotherLiftedSubscriptionObserver)),
      scheduler,
    );
  }, 3);

  scheduler.run();

  anotherLiftedSubscription.dispose();

  expect(liftedObserver.next).toBeCalledTimes(1);
  expect(liftedObserver.next).toBeCalledWith(2);
  expect(liftedObserver.complete).toBeCalledTimes(1);

  expect(anotherLiftedSubscriptionObserver.next).toBeCalledTimes(3);
  expect(anotherLiftedSubscriptionObserver.complete).toBeCalledTimes(1);
});

test("EventResource", () => {
  const event = EventResource.create();
  const scheduler = VirtualTimeScheduler.create();

  const observer = createMockObserver();
  Observable.connect(Observable.lift(event, observe(observer)), scheduler);

  scheduler.schedule(_ => {
    event.dispatch(1);
    event.dispatch(2);
    event.dispatch(3);
  }, 1);

  scheduler.run();

  expect(observer.next).toBeCalledTimes(3);
  expect(observer.next).toHaveBeenNthCalledWith(1, 1);
  expect(observer.next).toHaveBeenNthCalledWith(2, 2);
  expect(observer.next).toHaveBeenNthCalledWith(3, 3);
});
