import {
  describe,
  expectArrayEquals,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ComputationTypeLike,
  InteractiveComputationModule,
} from "../../../computations.js";
import {
  Tuple3,
  arrayEquality,
  pipeLazyAsync,
  tuple,
} from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";

const InteractiveComputationModuleTests = <
  TComputationType extends ComputationTypeLike,
>(
  m: ComputationModule<TComputationType> &
    InteractiveComputationModule<TComputationType>,
) =>
  describe(
    "InteractiveComputationModuleTests",
    describe(
      "toObservable",
      testAsync(
        "The observable publishes all the values from the source",
        pipeLazyAsync(
          [0, 1, 2, 3, 4],
          Computation.fromReadonlyArray(m),
          m.toProducer<number>(),
          EventSource.toReadonlyArrayAsync<number>(),
          expectArrayEquals([0, 1, 2, 3, 4]),
        ),
      ),
    ),
    describe(
      "zip",
      testAsync(
        "different length iterables",
        pipeLazyAsync(
          m.zip<number, number, number>(
            Computation.ofValues(m, 0, 1, 2, 3, 4),
            Computation.ofValues(m, 0, 1, 2),
            Computation.ofValues(m, 0, 1, 2, 3),
          ),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<Tuple3<number, number, number>>(),
          expectArrayEquals([tuple(0, 0, 0), tuple(1, 1, 1), tuple(2, 2, 2)], {
            valuesEquality: arrayEquality(),
          }),
        ),
      ),
      testAsync(
        "with empty iterable",
        pipeLazyAsync(
          m.zip<number, number, number>(
            Computation.ofValues(m, 0, 1, 2, 3, 4),
            Computation.empty(m),
            Computation.ofValues(m, 0, 1, 2, 3),
          ),
          m.toProducer(),
          EventSource.toReadonlyArrayAsync<Tuple3<number, number, number>>(),
          expectArrayEquals([], {
            valuesEquality: arrayEquality(),
          }),
        ),
      ),
    ),
  );

export default InteractiveComputationModuleTests;
