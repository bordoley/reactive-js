import { disposed } from "@reactive-js/disposable";
import {
  concat,
  connect,
  empty,
  fromScheduledValues,
  observe,
  pipe,
} from "@reactive-js/rx-observable";
import { ObserverLike } from "@reactive-js/rx-observer";
import { create as createVirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";
import { create, share } from "../src/index";

describe("create", () => {
  test("when subject is completed", () => {
    const subject = create(2);

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.complete();

    const scheduler = createVirtualTimeScheduler();
    const observer = {
      next: jest.fn(),
      complete: jest.fn(),
    };
    connect(pipe(subject, observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 3);
    expect(observer.complete).toHaveBeenCalled();
  });
  test("when subject is not completed", () => {
    const subject = create(2);

    subject.next(1);
    subject.next(2);
    subject.next(3);

    const scheduler = createVirtualTimeScheduler();
    const observer = {
      next: jest.fn(),
      complete: jest.fn(),
    };
    connect(pipe(subject, observe(observer)), scheduler);
    scheduler.schedule(_ => {
      subject.next(4);
      subject.complete();
    });
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 2);
    expect(observer.next).toHaveBeenNthCalledWith(2, 3);
    expect(observer.next).toHaveBeenNthCalledWith(3, 4);
    expect(observer.complete).toHaveBeenCalled();
  });

  test("subscribe and dispose the subscription remove the observer", () => {
    const subject = create(2);

    subject.next(1);
    subject.next(2);
    subject.next(3);

    const scheduler = createVirtualTimeScheduler();
    const observer = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    const subscription = connect(pipe(subject, observe(observer)), scheduler);
    subscription.dispose();
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(0);
  });
});

const createMockObserver = <T>(): ObserverLike<T> => ({
  next: jest.fn(),
  complete: jest.fn(),
});

test("share", () => {
  const scheduler = createVirtualTimeScheduler();

  const replayed = pipe(
    concat(fromScheduledValues([, 0], [, 1], [, 2]), empty(2)),
    share(scheduler, 1),
  );
  const replayedSubscription = connect(replayed, scheduler);

  const liftedObserver = createMockObserver();
  let liftedSubscription = disposed;
  scheduler.schedule(_ => {
    liftedSubscription = connect(
      pipe(replayed, observe(liftedObserver)),
      scheduler,
    );
  }, 1);

  const anotherLiftedSubscriptionObserver = createMockObserver();
  let anotherLiftedSubscription = disposed;
  scheduler.schedule(_ => {
    replayedSubscription.dispose();
    liftedSubscription.dispose();

    anotherLiftedSubscription = connect(
      pipe(replayed, observe(anotherLiftedSubscriptionObserver)),
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
