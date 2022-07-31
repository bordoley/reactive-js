export const tests = describe(
  "runnable",
  describe(
    "contains",
    test(
      "source is empty",
      pipeLazy(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        contains(someSatisfyT, 1),
        first(),
        expectFalse,
      ),
    ),
    test(
      "source contains value",
      pipeLazy(
        generate(increment, returns<number>(0)),
        contains(someSatisfyT, 1),
        first(),
        expectTrue,
      ),
    ),
    test(
      "source does not contain value",
      pipeLazy(
        [2, 3, 4],
        fromArray(),
        contains(someSatisfyT, 1),
        first(),
        expectFalse,
      ),
    ),
  ),

  describe(
    "everySatisfy",
    test(
      "source is empty",
      pipeLazy(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        everySatisfy(alwaysFalse),
        first(),
        expectTrue,
      ),
    ),
    test(
      "source values pass predicate",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        everySatisfy(alwaysTrue),
        first(),
        expectTrue,
      ),
    ),
    test(
      "source values fail predicate",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        everySatisfy(alwaysFalse),
        first(),
        expectFalse,
      ),
    ),
  ),

  describe(
    "noneSatisfy",
    test(
      "source is empty",
      pipeLazy(
        empty<RunnableLike<unknown>, number>({ fromArray }),
        noneSatisfy(everySatisfyT, alwaysFalse),
        first(),
        expectTrue,
      ),
    ),
    test(
      "source values pass predicate",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        noneSatisfy(everySatisfyT, alwaysTrue),
        first(),
        expectFalse,
      ),
    ),
    test(
      "source values fail predicate",
      pipeLazy(
        [1, 2, 3],
        fromArray(),
        noneSatisfy(everySatisfyT, alwaysFalse),
        first(),
        expectTrue,
      ),
    ),
  ),
);
