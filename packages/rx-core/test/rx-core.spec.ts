import {
  notify,
  observe,
  NotificationKind,
  Observable,
  SubscriberLike,
} from "../src/index";
import { CompositeDisposable, Disposable } from "@reactive-js/disposables";
import { SchedulerLike } from "@reactive-js/scheduler";

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

test("observe", () => {
  const scheduler: SchedulerLike = {
    now: 0,
    schedule: (c, d?, p?) => Disposable.disposed,
  };

  const subscriber: SubscriberLike<number> = {
    isConnected: true,
    scheduler,
    subscription: CompositeDisposable.create(),
    next: jest.fn(),
    complete: jest.fn(),
  };

  const observer = {
    next: jest.fn(),
    complete: jest.fn(),
  };

  const observeSubscriber = observe(observer)(subscriber);

  observeSubscriber.next("a");
  expect(observer.next).toBeCalledWith("a");
  expect(subscriber.next).toBeCalledWith("a");

  const error = new Error();
  observeSubscriber.complete(error);
  expect(observer.complete).toBeCalledWith(error);
  expect(subscriber.complete).toBeCalledWith(error);
});
