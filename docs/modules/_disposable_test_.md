[undefined - vundefined](../README.md) › ["disposable.test"](_disposable_test_.md)

# Module: "disposable.test"

## Index

### Variables

* [tests](_disposable_test_.md#const-tests)

## Variables

### `Const` tests

• **tests**: *object* = describe(
  "Disposable",

  describe(
    "AbstractDisposable",
    test("disposes child disposable when disposed", () => {
      const disposable = createDisposable();
      const child = createDisposable();

      addDisposable(disposable, child);
      dispose(disposable);

      expectTrue(child.isDisposed);
    }),

    test("adding to disposed disposable disposes the child", () => {
      const disposable = createDisposable();
      const child = createDisposable();

      dispose(disposable);
      addDisposable(disposable, child);

      expectTrue(child.isDisposed);
    }),

    test("disposes teardown function exactly once when disposed", () => {
      const teardown = mockFn();
      const disposable = createDisposable(teardown);
      addTeardown(disposable, teardown);
      dispose(disposable);

      pipe(teardown, expectToHaveBeenCalledTimes(1));
    }),

    test("catches and swallows exceptions thrown by teardown function", () => {
      const teardown = () => {
        throw new Error();
      };
      const disposable = createDisposable(teardown);

      dispose(disposable);
      pipe(disposable.error, expectNone);
    }),

    test("propogates errors when disposed with an exception", () => {
      const error = { cause: null };

      const childTeardown = mockFn();
      const disposable = createDisposable(childTeardown);

      dispose(disposable, error);

      pipe(disposable.error, expectEquals(error));
      pipe(childTeardown, expectToHaveBeenCalledTimes(1));
      pipe(childTeardown.calls[0], expectArrayEquals([error]));
    }),
  ),

  describe(
    "AbstractSerialDisposable",

    test("setting inner disposable disposes the previous inner disposable", () => {
      const serialDisposable = createSerialDisposable();
      const child = createDisposable();

      serialDisposable.inner = child;
      pipe(serialDisposable.inner, expectEquals(child));

      serialDisposable.inner = disposed;
      pipe(child.isDisposed, expectTrue);
    }),

    test("setting inner disposable with the same inner disposable has no effect", () => {
      const serialDisposable = createSerialDisposable();
      const child = createDisposable();

      serialDisposable.inner = child;
      pipe(serialDisposable.inner, expectEquals(child));
      serialDisposable.inner = child;

      pipe(child.isDisposed, expectFalse);
    }),
  ),

  describe(
    "DisposableValue",

    test("disposes the value when disposed", () => {
      const value = createDisposable();
      const disposable = createDisposableValue(value, dispose);

      dispose(disposable);

      pipe(disposable.value, expectEquals(value));
      pipe(value.isDisposed, expectTrue);
    }),
  ),
)

#### Type declaration:

* **name**: *string*

* **tests**: *keyof TestGroup[]*

* **type**: *Describe*
