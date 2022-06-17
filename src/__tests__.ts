import { tests as disposableTests } from "./__tests__/disposable.test";
import { tests as enumerableTests } from "./__tests__/enumerable.test";
import { tests as observableTests } from "./__tests__/observable.test";
import { tests as runnableTests } from "./__tests__/runnable.test";
import { tests as sequenceTests } from "./__tests__/sequence.test";
import { tests as streamableTests } from "./__tests__/streamable.test";

export const tests = [
  disposableTests,
  enumerableTests,
  observableTests,
  runnableTests,
  sequenceTests,
  streamableTests,
];
