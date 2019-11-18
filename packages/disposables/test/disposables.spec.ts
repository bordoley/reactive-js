import {
  CompositeDisposable,
  Disposable,
  SerialDisposable,
  throwIfDisposed,
} from "../src/index";

test("throwIfDisposed", () => {
  expect(() => throwIfDisposed(Disposable.disposed)).toThrow();
});

describe("Disposable", () => {
  test("compose", () => {
    const children = [
      Disposable.create(),
      Disposable.create(),
      Disposable.create(),
      Disposable.create(),
    ];

    const disposable = Disposable.compose.apply(undefined, children as any);

    expect(disposable.isDisposed).toBeFalsy();
    for (let child of children) {
      expect(child.isDisposed).toBeFalsy();
    }

    disposable.dispose();

    expect(disposable.isDisposed).toBeTruthy();
    for (let child of children) {
      expect(child.isDisposed).toBeTruthy();
    }
  });

  describe("create", () => {
    test("with teardown", () => {
      const teardown = jest.fn();

      const disposable = Disposable.create(teardown);
      expect(disposable.isDisposed).toBeFalsy();

      disposable.dispose();
      expect(disposable.isDisposed).toBeTruthy();

      disposable.dispose();
      disposable.dispose();
      disposable.dispose();

      expect(teardown).toBeCalledTimes(1);
    });

    test("empty", () => {
      const disposable = Disposable.create();
      expect(disposable.isDisposed).toBeFalsy();
      disposable.dispose();
      expect(disposable.isDisposed).toBeTruthy();
    });
  });

  test("disposed", () => {
    expect(Disposable.disposed.isDisposed).toBeTruthy();
  });
});

describe("CompositeDisposable", () => {
  test("create", () => {
    const disposable = CompositeDisposable.create();
    expect(disposable.isDisposed).toBeFalsy();
    disposable.dispose();
    expect(disposable.isDisposed).toBeTruthy();
  });

  test("add", () => {
    const compositeDisposable = CompositeDisposable.create();

    const children = [
      Disposable.create(),
      Disposable.create(),
      Disposable.create(),
      Disposable.create(),
    ];

    for (let child of children) {
      compositeDisposable.add(child);
    }

    for (let child of children) {
      expect(child.isDisposed).toBeFalsy();
    }

    compositeDisposable.dispose();

    for (let child of children) {
      expect(child.isDisposed).toBeTruthy();
    }

    const anotherDisposable = Disposable.create();
    compositeDisposable.add(anotherDisposable);
    expect(anotherDisposable.isDisposed).toBeTruthy();
  });

  test("remove", () => {
    const compositeDisposable = CompositeDisposable.create();
    const child = Disposable.create();

    compositeDisposable.add(child);
    compositeDisposable.remove(child);
    expect(child.isDisposed).toBeTruthy();
  });
});

describe("SerialDisposable", () => {
  test("create", () => {
    const serialDisposable = SerialDisposable.create();
    expect(serialDisposable.isDisposed).toBeFalsy();
    serialDisposable.dispose();
    expect(serialDisposable.isDisposed).toBeTruthy();
  });

  test("set disposable", () => {
    const serialDisposable = SerialDisposable.create();
    const disposable = Disposable.create();

    serialDisposable.disposable = disposable;
    expect(serialDisposable.disposable).toEqual(disposable);

    const anotherDisposable = Disposable.create();
    serialDisposable.disposable = anotherDisposable;
    expect(serialDisposable.disposable).toEqual(anotherDisposable);
    expect(disposable.isDisposed).toBeTruthy();

    expect(anotherDisposable.isDisposed).toBeFalsy();
    serialDisposable.dispose();
    expect(anotherDisposable.isDisposed).toBeTruthy();

    const yetAnotherDisposable = Disposable.create();
    serialDisposable.disposable = yetAnotherDisposable;
    expect(yetAnotherDisposable.isDisposed).toBeTruthy();
  });
});
