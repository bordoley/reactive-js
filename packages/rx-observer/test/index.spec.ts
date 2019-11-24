import { NotificationKind, notify } from "../src/index";

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
