import { Array_push } from "../../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrowAsync,
  expectToThrowErrorAsync,
  testAsync,
} from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import {
  ComputationModule,
  ComputationTypeLike,
  ComputationTypeOfModule,
  DeferredComputationModule,
} from "../../../computations.js";
import {
  Optional,
  arrayEquality,
  ignore,
  invoke,
  lessThan,
  none,
  pipe,
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
  raise,
  returns,
} from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";

const DeferredComputationModuleTests = <
  TComputationType extends ComputationTypeLike,
>(
  m: ComputationModule<TComputationType> &
    DeferredComputationModule<TComputationType>,
) =>
  describe(
    "DeferredComputationModule",
    describe(
      "buffer",
      testAsync(
        "with multiple sub buffers",
        pipeLazyAsync(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          Computation.fromReadonlyArray(m),
          m.buffer<number>({ count: 3 }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<readonly number[]>(),
          expectArrayEquals<readonly number[]>(
            [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9],
            ],
            { valuesEquality: arrayEquality() },
          ),
        ),
      ),
      testAsync(
        "last buffer is short",
        pipeLazyAsync(
          [1, 2, 3, 4, 5, 6, 7, 8],
          Computation.fromReadonlyArray(m),
          m.buffer<number>({ count: 3 }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<readonly number[]>(),
          expectArrayEquals<readonly number[]>(
            [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8],
            ],
            { valuesEquality: arrayEquality() },
          ),
        ),
      ),
      testAsync(
        "buffers all values when no count is provided",
        pipeLazyAsync(
          [1, 2, 3, 4, 5, 6, 7, 8],
          Computation.fromReadonlyArray(m),
          m.buffer<number>(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<readonly number[]>(),
          expectArrayEquals<readonly number[]>([[1, 2, 3, 4, 5, 6, 7, 8]], {
            valuesEquality: arrayEquality(),
          }),
        ),
      ),
    ),

    describe(
      "catchError",
      testAsync(
        "when the source does not throw",
        pipeLazyAsync(
          [1, 2, 3, 4],
          Computation.fromReadonlyArray(m),
          m.catchError<number>(ignore),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4]),
        ),
      ),
      testAsync("when the source throws", async () => {
        const e1 = "e1";
        let result: Optional<string> = none;
        await pipeAsync(
          Computation.raise(m, { raise: () => e1 }),
          m.catchError((e: Error) => {
            result = e.message;
          }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync(),
        );

        pipe(result, expectEquals<Optional<string>>(e1));
      }),
      testAsync("when the error handler throws an error", async () => {
        const e1 = "e1";
        const e2 = "e2";

        let result: Optional<unknown> = none;

        await pipeAsync(
          Computation.raise(m, { raise: () => e1 }),
          m.catchError(_ => {
            throw e2;
          }),
          m.catchError(e => {
            result = e.cause;
          }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync(),
        );

        pipe(
          result as ReadonlyArray<Error>,
          ReadonlyArray.map(x => x.message),
          expectArrayEquals(["e2", "e1"]),
        );
      }),
      testAsync(
        "when error handler returns a computation",
        pipeLazyAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(m),
          Computation.concatWith<ComputationTypeOfModule<typeof m>, number>(
            m,
            Computation.raise(m, none, 0),
          ),
          m.catchError<number>(
            pipeLazy([4, 5, 6], Computation.fromReadonlyArray(m)),
          ),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
    ),
    describe(
      "concatAll",
      testAsync(
        "concating inner sources",
        pipeLazyAsync(
          [Computation.ofValues(m, 1, 2, 3), Computation.ofValues(m, 4, 5, 6)],
          Computation.fromReadonlyArray(m),
          m.concatAll<number>(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
      testAsync(
        "only consume partial number of events",
        pipeLazyAsync(
          [
            Computation.ofValues(m, 1, 2, 3),
            Computation.ofValues(m, 4, 5, 6),
            Computation.ofValues(m, 7, 8, 9),
          ],
          Computation.fromReadonlyArray(m),
          m.concatAll<number>(),
          m.takeFirst<number>({ count: 5 }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4, 5]),
        ),
      ),
    ),
    describe(
      "decodeWithCharset",
      testAsync("decoding ascii", async () => {
        const str = "abcdefghijklmnsopqrstuvwxyz";

        await pipeAsync(
          [str],
          Computation.fromReadonlyArray(m),
          m.encodeUtf8(),
          m.decodeWithCharset(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<string>(),
          invoke("join"),
          expectEquals(str),
        );
      }),
      testAsync("decoding ascii", async () => {
        const str = "abcdefghijklmnsopqrstuvwxyz";

        await pipeAsync(
          [str],
          Computation.fromReadonlyArray(m),
          m.encodeUtf8(),
          m.decodeWithCharset(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<string>(),
          invoke("join"),
          expectEquals(str),
        );
      }),
      testAsync("decoding multi-byte code points", async () => {
        const str = String.fromCodePoint(8364);
        await pipeAsync(
          [str],
          Computation.fromReadonlyArray(m),
          m.encodeUtf8(),
          m.decodeWithCharset(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<string>(),
          invoke("join"),
          expectEquals(str),
        );
      }),
      testAsync(
        "multi-byte decoding divided between multiple buffers",
        pipeLazyAsync(
          [new Uint8Array([226, 153]), new Uint8Array([165])],
          Computation.fromReadonlyArray(m),
          m.decodeWithCharset(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<string>(),
          invoke("join"),
          expectEquals("♥"),
        ),
      ),
      testAsync(
        "multi-byte decoding with missing tail",
        pipeLazyAsync(
          [new Uint8Array([226])],
          Computation.fromReadonlyArray(m),
          m.decodeWithCharset(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<string>(),
          invoke("join"),
          expectEquals("�"),
        ),
      ),
    ),
    describe(
      "forEach",
      testAsync("invokes the effect for each notified value", async () => {
        const result: number[] = [];

        await pipeAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(m),
          m.forEach((x: number) => {
            result[Array_push](x + 10);
          }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
        ),
          pipe(result, expectArrayEquals([11, 12, 13]));
      }),
      testAsync("when the effect function throws", async () => {
        const err = new Error();
        await pipeAsync(
          pipeLazy(
            [1, 1],
            Computation.fromReadonlyArray(m),
            m.forEach<number>(_ => {
              throw err;
            }),
            m.toProducer(),
            EventSource.toReadonlyArrayAsync<number>(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "repeat",
      testAsync(
        "when repeating forever.",
        pipeLazyAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(m),
          m.repeat<number>(),
          m.takeFirst<number>({ count: 8 }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2]),
        ),
      ),
      testAsync(
        "when repeating a finite amount of times.",
        pipeLazyAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(m),
          m.repeat<number>(3),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
        ),
      ),
      testAsync(
        "when repeating with a predicate",
        pipeLazyAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(m),
          m.repeat<number>(lessThan(1)),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      testAsync("when the repeat function throws", async () => {
        const err = new Error();
        await pipeAsync(
          pipeLazy(
            [1, 1],
            Computation.fromReadonlyArray(m),
            m.repeat<number>(_ => {
              throw err;
            }),
            m.toProducer(),
            EventSource.toReadonlyArrayAsync<number>(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "retry",
      testAsync(
        "when the source doesn't error",
        pipeLazyAsync(
          Computation.ofValues(m, 1, 2, 3),
          m.retry<number>(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      testAsync(
        "retrys with the default predicate",
        pipeLazyAsync(
          m.concat<number>(
            Computation.ofValues(m, 1, 2, 3),
            Computation.raise(m),
          ),
          m.retry<number>(),
          m.takeFirst<number>({ count: 6 }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
      testAsync(
        "when source and the retry predicate throw",
        pipeLazyAsync(
          pipeLazyAsync(
            Computation.raise(m),
            m.retry(() => raise("")),
            m.toProducer(),
            EventSource.toReadonlyArrayAsync(),
          ),
          expectToThrowAsync,
        ),
      ),
      testAsync(
        "retrys only twice",
        pipeLazyAsync(
          pipeLazyAsync(
            m.concat<number>(
              Computation.ofValues(m, 1, 2, 3),
              Computation.raise(m),
            ),
            m.retry<number>((count, _) => count < 2),
            m.takeFirst<number>({ count: 10 }),
            m.toProducer(),
            EventSource.toReadonlyArrayAsync<number>(),
            expectArrayEquals([1, 2, 3, 1, 2, 3]),
          ),
          expectToThrowAsync,
        ),
      ),
    ),
    describe(
      "takeLast",
      testAsync(
        "with default count",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m),
          m.takeLast<number>(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([5]),
        ),
      ),
      testAsync(
        "when count is 0",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m),
          // Some implementations special case this
          m.takeLast<number>({ count: 0 }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([] as number[]),
        ),
      ),
      testAsync(
        "when count is less than the total number of elements",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m),
          m.takeLast<number>({ count: 3 }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([3, 4, 5]),
        ),
      ),
      testAsync(
        "when count is greater than the total number of elements",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m),
          m.takeLast<number>({ count: 10 }),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4, 5]),
        ),
      ),
      testAsync(
        "with default count",
        pipeLazyAsync(
          [1, 2, 3, 4, 5],
          Computation.fromReadonlyArray(m),
          m.takeLast<number>(),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([5]),
        ),
      ),
    ),
    describe(
      "throwIfEmpty",
      testAsync("when source is empty", async () => {
        const error = new Error();
        await pipe(
          pipeLazy(
            Computation.empty(m),
            m.throwIfEmpty(() => error),
            m.toProducer(),
            EventSource.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(error),
        );
      }),
      testAsync("when factory throw", async () => {
        const error = new Error();
        await pipe(
          pipeLazy(
            Computation.empty(m),
            m.throwIfEmpty(() => {
              throw error;
            }),
            m.toProducer(),
            EventSource.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(error),
        );
      }),
      testAsync(
        "when source is not empty",
        pipeLazyAsync(
          [1],
          Computation.fromReadonlyArray(m),
          m.throwIfEmpty<number>(returns(none)),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1]),
        ),
      ),
    ),
  );

export default DeferredComputationModuleTests;
