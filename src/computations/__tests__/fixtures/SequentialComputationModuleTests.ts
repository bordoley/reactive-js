import { Array_push } from "../../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrowErrorAsync,
  testAsync,
} from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import {
  ComputationModule,
  SequentialComputationModule,
} from "../../../computations.js";
import {
  Optional,
  ignore,
  none,
  pipe,
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
  returns,
} from "../../../functions.js";
import * as Computation from "../../Computation.js";

const SequentialComputationModuleTests = <
  TComputationModule extends ComputationModule &
    Pick<
      SequentialComputationModule,
      "catchError" | "concat" | "forEach" | "gen" | "throwIfEmpty"
    >,
>(
  m: TComputationModule,
) =>
  describe(
    "SequentialComputationModule",
    describe(
      "catchError",
      testAsync(
        "when the source does not throw",
        pipeLazyAsync(
          [1, 2, 3, 4],
          Computation.fromReadonlyArray(m)<number>(),
          m.catchError<number>(ignore),
          Computation.toReadonlyArrayAsync(m)<number>(),
          expectArrayEquals([1, 2, 3, 4]),
        ),
      ),
      testAsync("when the source throws", async () => {
        const e1 = "e1";
        let result: Optional<string> = none;
        await pipeAsync(
          Computation.raise(m)<number>({ raise: () => e1 }),
          m.catchError<number>((e: Error) => {
            result = e.message;
          }),
          Computation.toReadonlyArrayAsync(m)<number>(),
        );

        pipe(result, expectEquals<Optional<string>>(e1));
      }),
      testAsync("when the error handler throws an error", async () => {
        const e1 = "e1";
        const e2 = "e2";

        let result: Optional<unknown> = none;

        await pipeAsync(
          Computation.raise(m)<number>({ raise: () => e1 }),
          m.catchError<number>(_ => {
            throw e2;
          }),
          m.catchError<number>(e => {
            result = e.cause;
          }),
          Computation.toReadonlyArrayAsync(m)<number>(),
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
          Computation.fromReadonlyArray(m)(),
          Computation.concatWith(m)<number>(Computation.raise(m)()),
          m.catchError<number>(
            pipeLazy([4, 5, 6], Computation.fromReadonlyArray(m)()),
          ),
          Computation.toReadonlyArrayAsync(m)<number>(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
    ),

    describe(
      "forEach",
      testAsync("invokes the effect for each notified value", async () => {
        const result: number[] = [];

        await pipeAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(m)(),
          m.forEach((x: number) => {
            result[Array_push](x + 10);
          }),
          Computation.toReadonlyArrayAsync(m)<number>(),
        ),
          pipe(result, expectArrayEquals([11, 12, 13]));
      }),
      testAsync("when the effect function throws", async () => {
        const err = new Error();
        await pipeAsync(
          pipeLazy(
            [1, 1],
            Computation.fromReadonlyArray(m)(),
            m.forEach(_ => {
              throw err;
            }),
            Computation.toReadonlyArrayAsync(m)<number>(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "throwIfEmpty",
      testAsync("when source is empty", async () => {
        const error = new Error();
        await pipe(
          pipeLazy(
            Computation.empty(m)(),
            m.throwIfEmpty(() => error),
            Computation.toReadonlyArrayAsync(m)<number>(),
          ),
          expectToThrowErrorAsync(error),
        );
      }),
      testAsync("when factory throw", async () => {
        const error = new Error();
        await pipe(
          pipeLazy(
            Computation.empty(m)(),
            m.throwIfEmpty(() => {
              throw error;
            }),
            Computation.toReadonlyArrayAsync(m)<number>(),
          ),
          expectToThrowErrorAsync(error),
        );
      }),
      testAsync(
        "when source is not empty",
        pipeLazyAsync(
          [1],
          Computation.fromReadonlyArray(m)(),
          m.throwIfEmpty<number>(returns(none)),
          Computation.toReadonlyArrayAsync(m)<number>(),
          expectArrayEquals([1]),
        ),
      ),
    ),
  );

export default SequentialComputationModuleTests;
