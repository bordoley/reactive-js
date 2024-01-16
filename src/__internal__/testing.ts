import {
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
import { Array_length, Array_push, __DENO__ } from "./constants.js";

export const DescribeType = 1;
export const TestType = 2;
export const TestAsyncType = 3;

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

export type TestAsync = {
  readonly type: typeof TestAsyncType;
  readonly name: string;
  readonly f: Function1<string, Factory<Promise<void>>>;
};

export type TestGroup = Describe | Test | TestAsync;

const createDescribe = (name: string, ...tests: TestGroup[]): Describe => ({
  type: DescribeType,
  name,
  tests,
});

export { createDescribe as describe };

const createTest = (name: string, f: SideEffect): Test => ({
  type: TestType,
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
  createTest(
    `returns true when input is ${input}`,
    pipeLazy(input, predicate, expectTrue),
  );

export const testPredicateExpectingFalse = <T>(
  input: T,
  predicate: Predicate<T>,
): any =>
  createTest(
    `returns false when input is ${input}`,
    pipeLazy(input, predicate, expectFalse),
  );

export { createTest as test };

export const testAsync = (
  name: string,
  f: Factory<Promise<void>>,
): TestAsync => ({
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
};

export const expectEquals =
  <T>(b: T, valueEquality = strictEquality) =>
  (a: T) => {
    if (!valueEquality(a, b)) {
      raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
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
  (a: readonly T[]) => {
    const equals = arrayEquality(valuesEquality);
    if (!equals(a, b)) {
      raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
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
  };

export const expectTrue = (v: boolean) => {
  if (!v) {
    raise("expected true");
  }
};

export const expectFalse = (v: boolean) => {
  if (v) {
    raise("expected false");
  }
};

export const expectIsNone = (v: Optional) => {
  if (isSome(v)) {
    raise(`expected none but recieved ${v}`);
  }
};

export const expectIsSome = (v: Optional) => {
  if (isNone(v)) {
    raise(`expected Some(?) but recieved None`);
  }
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
};

declare const Deno: {
  test(name: string, f: () => void): void;
};

const createTests = (testGroup: TestGroup, parents: readonly string[]) => {
  const path = [...parents, testGroup.name];

  if (testGroup.type === DescribeType) {
    const forEachCreateTests = () => {
      const { tests } = testGroup;

      for (const test of tests) {
        createTests(test, path);
      }
    };

    if (__DENO__) {
      forEachCreateTests();
    } else {
      describe(testGroup.name, () => {
        forEachCreateTests();
      });
    }
  } else {
    const name = path.join(":");

    if (__DENO__) {
      Deno.test(name, testGroup.f(name));
    } else {
      test(testGroup.name, testGroup.f(name));
    }
  }
};

export const testModule = (name: string, ...testGroups: TestGroup[]): void => {
  createTests(createDescribe(name, ...testGroups), []);
};
