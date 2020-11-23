/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

import { run } from "@most/core";
import { newDefaultScheduler } from "@most/scheduler";
import { Time, Stream, Sink } from "@most/types";

export const reduce = <A, B>(
  f: (b: B, a: A) => B,
  initial: B,
  stream: Stream<A>,
): B => {
  let result: B = undefined as any;
  const reject = (e: unknown) => {
    throw e;
  };
  const resolve = (v: B) => {
    result = v;
  };

  run(
    new ReduceSink(f, initial, resolve, reject),
    newDefaultScheduler(),
    stream,
  );

  return result;
};

class ReduceSink<A, B> implements Sink<A> {
  private readonly f: (b: B, a: A) => B;
  private value: B;
  private readonly resolve: (b: B) => void;
  private readonly reject: (e: Error) => void;

  constructor(
    f: (b: B, a: A) => B,
    value: B,
    resolve: (b: B) => void,
    reject: (e: Error) => void,
  ) {
    this.f = f;
    this.value = value;
    this.resolve = resolve;
    this.reject = reject;
  }
  event(_t: Time, x: A): void {
    this.value = this.f(this.value, x);
  }
  error(_t: Time, e: Error): void {
    this.reject(e);
  }
  end(): void {
    this.resolve(this.value);
  }
}
