import { connect, lift } from "@reactive-js/rx-observable";
import { observe } from "@reactive-js/rx-subscriber";
import { create as virtualTimeSchedulerCreate } from "@reactive-js/virtualtime-scheduler";
import { createWithReplay } from "../src/index";

describe("replay", () => {
  test("when subject is completed", () => {
    const subject = createWithReplay(2);

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.complete();

    const scheduler = virtualTimeSchedulerCreate();
    const observer = {
      next: jest.fn(),
      complete: jest.fn(),
    };
    connect(lift(subject, observe(observer)), scheduler);
    scheduler.run();

    expect(observer.next).toHaveBeenNthCalledWith(1, 3);
    expect(observer.complete).toHaveBeenCalled();
  });
  test("when subject is not completed", () => {
    const subject = createWithReplay(2);

    subject.next(1);
    subject.next(2);
    subject.next(3);

    const scheduler = virtualTimeSchedulerCreate();
    const observer = {
      next: jest.fn(),
      complete: jest.fn(),
    };
    connect(lift(subject, observe(observer)), scheduler);
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
    const subject = createWithReplay(2);

    subject.next(1);
    subject.next(2);
    subject.next(3);

    const scheduler = virtualTimeSchedulerCreate();
    const observer = {
      next: jest.fn(),
      complete: jest.fn(),
    };

    const subscription = connect(lift(subject, observe(observer)), scheduler);
    subscription.dispose();
    scheduler.run();

    expect(observer.next).toHaveBeenCalledTimes(0);
  });
});
