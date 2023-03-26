import { Factory, Function1, SideEffect } from "@reactive-js/core/functions";

export type BenchmarkTest<TData> = {
  name: string;
  factory: Function1<TData, Promise<SideEffect>>;
};

export type BenchmarkGroup<TData> = {
  name: string;
  setup: Factory<TData>;
  tests: readonly BenchmarkTest<TData>[];
};

export const benchmarkTest = <TData>(
  name: string,
  setup: Function1<TData, Promise<SideEffect>>,
): BenchmarkTest<TData> => {
  const factory = async (data: TData) => {
    return await setup(data);
  };

  return { name, factory };
};

export const benchmarkGroup = <TData>(
  name: string,
  setup: Factory<TData>,
  ...tests: readonly BenchmarkTest<TData>[]
): BenchmarkGroup<TData> => ({ name, setup, tests });
