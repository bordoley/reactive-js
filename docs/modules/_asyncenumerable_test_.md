[reactive-js](../README.md) › ["asyncEnumerable.test"](_asyncenumerable_test_.md)

# Module: "asyncEnumerable.test"

## Index

### Variables

* [tests](_asyncenumerable_test_.md#const-tests)

## Variables

### `Const` tests

• **tests**: *object* = describe(
  "async-enumerable",
  test("consume", () => {
    const enumerable = fromIterable<number>()([1, 2, 3, 4, 5, 6]);

    pipe(
      enumerable,
      consume((acc, next) => notify(acc + next), returns<number>(0)),
      toRunnable(),
      last,
      expectEquals(21),
    );

    pipe(
      enumerable,
      consume(
        (acc, next) => (acc > 0 ? done(acc + next) : notify(acc + next)),
        returns<number>(0),
      ),
      toRunnable(),
      last,
      expectEquals(3),
    );
  }),

  describe(
    "consumeAsync",
    test(
      "when the consumer early terminates",
      defer(
        [1, 2, 3, 4, 5, 6],
        fromIterable(),
        consumeAsync(
          (acc, next) =>
            fromValue()(acc > 0 ? done(acc + next) : notify(acc + next)),
          returns<number>(0),
        ),
        toRunnable(),
        last,
        expectEquals(3),
      ),
    ),
    test(
      "when the consumer never terminates",
      defer(
        [1, 2, 3, 4, 5, 6],
        fromIterable(),
        consumeAsync(
          (acc, next) => pipe(acc + next, notify, fromValue()),
          returns<number>(0),
        ),
        toRunnable(),
        last,
        expectEquals(21),
      ),
    ),
  ),

  test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3, 4, 5, 6], fromArray<number>());
    const enumerator = stream(enumerable, scheduler);

    const result: number[] = [];
    pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
    );

    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),

  test("fromIterable", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = stream(
      fromIterable<number>()([1, 2, 3, 4, 5, 6]),
      scheduler,
    );

    const result: number[] = [];
    let error: Option<Exception> = none;
    const subscription = pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
    );

    addTeardown(subscription, e => {
      error = e;
    });

    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    pipe(error, expectNone);
  }),

  test("generate", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = stream(
      generate(increment, returns<number>(0)),
      scheduler,
    );

    const result: number[] = [];
    pipe(
      enumerator,
      onNotify(x => result.push(x)),
      subscribe(scheduler),
    );

    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);

    scheduler.run();

    pipe(result, expectArrayEquals([1, 2, 3]));
  }),
)

#### Type declaration:

* **name**: *string*

* **tests**: *keyof TestGroup[]*

* **type**: *Describe*
