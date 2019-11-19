import {
  connect,
  observe,
  Observable,
  ObserverLike,
} from "@reactive-js/rx-core";
import { Disposable } from "@reactive-js/disposables";
import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";

import { shareReplayLast } from "../src/index";

const createMockObserver = <T>(): ObserverLike<T> => ({
  next: jest.fn(),
  complete: jest.fn(),
});

test("shareReplayLast", () => {
  const source = Observable.create(observer => {
    observer.next(0);
    observer.next(1);
    observer.next(2);
  });
  const scheduler = VirtualTimeScheduler.create();
  const replayed = shareReplayLast(source, scheduler);

  const replayedSubscription = connect(replayed, scheduler);

  const liftedObserver = createMockObserver();
  let liftedSubscription = Disposable.disposed;
  scheduler.schedule(_ => {
    liftedSubscription = connect(
      Observable.lift(replayed, observe(liftedObserver)),
      scheduler,
    );
  }, 1);

  const anotherLiftedSubscriptionObserver = createMockObserver();
  let anotherLiftedSubscription = Disposable.disposed;
  scheduler.schedule(_ => {
    replayedSubscription.dispose();
    liftedSubscription.dispose();

    anotherLiftedSubscription = connect(
      Observable.lift(replayed, observe(anotherLiftedSubscriptionObserver)),
      scheduler,
    );
  }, 3);

  scheduler.run();

  anotherLiftedSubscription.dispose();

  expect(liftedObserver.next).toBeCalledTimes(1);
  expect(liftedObserver.next).toBeCalledWith(2);
  expect(anotherLiftedSubscriptionObserver.next).toBeCalledTimes(3);
});
