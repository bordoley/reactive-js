import {
  AsyncFactory,
  Equality,
  Factory,
  Function1,
  Optional,
  Predicate,
  SideEffect,
  arrayEquality,
  ignore,
  isNone,
  isSome,
  none,
  pipeLazy,
  raise,
  strictEquality,
} from "../functions.js";
import { Array_length, Array_push, globalObject } from "./constants.js";

export const __DENO__ = isSome(globalObject.Deno);

export const DescribeType = 1;
export const TestType = 2;
export const TestAsyncType = 3;
export const TestDebugType = 4;

export type Describe = {
  readonly type: typeof DescribeType;
  readonly name: string;
  readonly tests: readonly TestGroup[];
};

export type Test = {
  readonly type: typeof TestType;
  readonly name: string;
  readonly f: Function1<string, SideEffect>;
};

export type TestDebug = {
  readonly type: typeof TestDebugType;
  readonly name: string;
  readonly f: Function1<string, SideEffect>;
};

export type TestAsync = {
  readonly type: typeof TestAsyncType;
  readonly name: string;
  readonly f: Function1<string, AsyncFactory<void>>;
};

export type TestGroup = Describe | Test | TestAsync | TestDebug;

export const describe = (
  name: string,
  ...tests: Optional<TestGroup>[]
): Describe => ({
  type: DescribeType,
  name,
  tests: tests.filter(isSome),
});

export const test = (name: string, f: SideEffect): Test => ({
  type: TestType,
  name,
  f: (ctx: string) => () => {
    ignore(ctx);
    f();
  },
});

export const testDebug = (name: string, f: SideEffect): TestDebug => ({
  type: TestDebugType,
  name,
  f: (ctx: string) => () => {
    ignore(ctx);
    f();
  },
});

export const testPredicateExpectingTrue = <T>(
  input: T,
  predicate: Predicate<T>,
): any =>
  test(
    `returns true when input is ${input}`,
    pipeLazy(input, predicate, expectTrue("expected predicate to return true")),
  );

export const testPredicateExpectingFalse = <T>(
  input: T,
  predicate: Predicate<T>,
): any =>
  test(
    `returns false when input is ${input}`,
    pipeLazy(
      input,
      predicate,
      expectFalse("expected predicate to return false"),
    ),
  );

export const testAsync = (name: string, f: AsyncFactory<any>): TestAsync => ({
  type: TestAsyncType,
  name,
  f: (ctx: string) => async () => {
    ignore(ctx);
    await f();
  },
});

export const expectToThrow = (f: SideEffect) => {
  let didThrow = false;
  try {
    f();
  } catch (_e) {
    didThrow = true;
  }

  if (!didThrow) {
    raise("expected function to throw");
  }

  return f;
};

export const expectToThrowAsync = async (f: Factory<Promise<unknown>>) => {
  let didThrow = false;
  try {
    await f();
  } catch (_e) {
    didThrow = true;
  }

  if (!didThrow) {
    raise("expected function to throw");
  }
  return f;
};

export const expectToThrowError = (error: unknown) => (f: SideEffect) => {
  let didThrow = false;
  let errorThrown: Optional = none;
  try {
    f();
  } catch (e) {
    didThrow = true;
    errorThrown = e;
  }

  if (!didThrow) {
    raise("expected function to throw");
  } else if (errorThrown !== error) {
    raise(
      `expected ${JSON.stringify(error)}\nreceieved: ${JSON.stringify(
        errorThrown,
      )}`,
    );
  }

  return f;
};

export const expectToThrowErrorAsync =
  (error: unknown) => async (f: Factory<Promise<unknown>>) => {
    let didThrow = false;
    let errorThrown: Optional = none;
    try {
      await f();
    } catch (e) {
      didThrow = true;
      errorThrown = e;
    }

    if (!didThrow) {
      raise("expected function to throw");
    } else if (errorThrown !== error) {
      raise(
        `expected ${JSON.stringify(error)}\nreceieved: ${JSON.stringify(
          errorThrown,
        )}`,
      );
    }

    return f;
  };

export const expectEquals =
  <T>(b: T, valueEquality = strictEquality) =>
  (a: T) => {
    if (!valueEquality(a, b)) {
      raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }

    return a;
  };

export const expectArrayEquals =
  <T>(
    b: readonly T[],
    {
      valuesEquality,
    }: {
      valuesEquality: Equality<T>;
    } = {
      valuesEquality: strictEquality,
    },
  ) =>
  <U extends T>(a: readonly U[]) => {
    const equals = arrayEquality(valuesEquality);
    if (!equals(a, b)) {
      raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }

    return a;
  };

export const expectArrayNotEquals =
  <T>(
    b: readonly T[],
    {
      valuesEquality,
    }: {
      valuesEquality: Equality<T>;
    } = {
      valuesEquality: strictEquality,
    },
  ) =>
  (a: readonly T[]) => {
    const equals = arrayEquality(valuesEquality);
    if (equals(a, b)) {
      raise(
        `expected ${JSON.stringify(b)}\n to not equal ${JSON.stringify(a)}`,
      );
    }

    return a;
  };

export const expectTrue = (message?: string) => (v: boolean) => {
  if (!v) {
    raise(message ?? "expected true");
  }
  return v;
};

export const expectFalse = (message?: string) => (v: boolean) => {
  if (v) {
    raise(message ?? "expected false");
  }
  return v;
};

export const expectIsNone = (v: Optional) => {
  if (isSome(v)) {
    raise(`expected none but recieved ${v}`);
  }
  return v;
};

export const expectIsSome = (v: Optional) => {
  if (isNone(v)) {
    raise(`expected Some(?) but recieved None`);
  }
  return v;
};

type MockFunction = {
  (...v: readonly unknown[]): any;
  readonly calls: readonly ReadonlyArray<any>[];
};

export const mockFn = (retval?: unknown): MockFunction => {
  const calls: ReadonlyArray<unknown>[] = [];
  const cb = (...args: readonly unknown[]) => {
    calls[Array_push](args);
    return retval;
  };
  cb.calls = calls;

  return cb;
};

export const expectToHaveBeenCalledTimes =
  (times: number) => (fn: MockFunction) => {
    const length = fn.calls[Array_length];
    if (length !== times) {
      raise(
        `expected fn to be called ${times} times, but was only called ${length} times.`,
      );
    }
    return fn;
  };

export const expectPromiseToThrow = async (promise: PromiseLike<unknown>) => {
  let didThrow = false;
  try {
    await promise;
  } catch (_) {
    didThrow = true;
  }

  if (!didThrow) {
    raise("expected function to throw");
  }
  //return promise;
};

const createTests = (
  testGroup: TestGroup,
  parents: readonly string[],
  setup: {
    beforeEach: () => void;
    afterEach: () => void;
  },
  debug = false,
) => {
  const path = [...parents, testGroup.name];

  if (testGroup.type === DescribeType) {
    const forEachCreateTests = () => {
      const { tests } = testGroup;

      for (const test of tests) {
        createTests(test, path, setup, debug);
      }
    };

    if (__DENO__) {
      forEachCreateTests();
    } else {
      globalObject.describe?.(testGroup.name, () => {
        forEachCreateTests();
      });
    }
  } else if (!debug || testGroup.type === TestDebugType) {
    const name = path.join(":");

    if (
      __DENO__ &&
      (testGroup.type === TestType || testGroup.type === TestDebugType)
    ) {
      globalObject.Deno?.test(name, () => {
        setup.beforeEach();
        testGroup.f(name)();
        setup.afterEach();
      });
    } else if (__DENO__ && testGroup.type === TestAsyncType) {
      globalObject.Deno?.test(name, async () => {
        setup.beforeEach();
        await testGroup.f(name)();
        setup.afterEach();
      });
    } else if (testGroup.type === TestType) {
      globalObject.test?.(testGroup.name, () => {
        setup.beforeEach();
        testGroup.f(name)();
        setup.afterEach();
      });
    } else if (testGroup.type === TestAsyncType) {
      globalObject.test?.(testGroup.name, async () => {
        setup.beforeEach();
        await testGroup.f(name)();
        setup.afterEach();
      });
    }
  }
};

export const testModule =
  (name: string, ...testGroups: TestGroup[]) =>
  (options?: { beforeEach?: () => void; afterEach?: () => void }) => {
    createTests(describe(name, ...testGroups), [], {
      beforeEach: options?.beforeEach ?? (() => {}),
      afterEach: options?.afterEach ?? (() => {}),
    });
  };

export const testDebugModule =
  (name: string, ...testGroups: TestGroup[]) =>
  (options?: { beforeEach?: () => void; afterEach?: () => void }) => {
    createTests(
      describe(name, ...testGroups),
      [],
      {
        beforeEach: options?.beforeEach ?? (() => {}),
        afterEach: options?.afterEach ?? (() => {}),
      },
      true,
    );
  };
