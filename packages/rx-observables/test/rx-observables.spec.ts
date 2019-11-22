import {
  observe,
  ObserverLike,
  Observable,
  SubscriberLike,
  Subscriber,
} from "@reactive-js/rx-core";
import { Disposable } from "@reactive-js/disposables";
import { VirtualTimeScheduler } from "@reactive-js/virtualtime-scheduler";

import { throws } from "../src/index";

describe("throws", () => {
  test("completes with an exception when subscribed", () => {
    const scheduler = VirtualTimeScheduler.create();
    const err = new Error();

    const observer: ObserverLike<number> = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    Observable.connect(
      Observable.lift(throws(err), observe(observer)),
      scheduler,
    );

    scheduler.run();

    expect(observer.next).toBeCalledTimes(0);
    expect(observer.complete).toBeCalledWith(err);
  });
});
