import {
  describe,
  expectArrayEquals,
  testAsync,
} from "../../__internal__/testing.js";
import {
  Function1,
  alwaysTrue,
  increment,
  pipe,
  pipeLazyAsync,
  returns,
} from "../../functions.js";
import { Container, ContainerOf, StatefulTypeClass } from "../../types.js";

const StatefulTypeClassTests = <C extends Container>(
  m: StatefulTypeClass<C>,
  toReadonlyArrayAsync: <T>() => Function1<
    ContainerOf<C, T>,
    Promise<ReadonlyArray<T>>
  >,
) =>
  describe(
    "StatefulTypeClassTests",
    describe(
      "retry",
      testAsync(
        "retrys the container on an exception",
        pipeLazyAsync(
          m.concat(
            pipe(m.generate(increment, returns(0)), m.takeFirst({ count: 3 })),
            m.throws(),
          ),
          m.retry(alwaysTrue),
          m.takeFirst<number>({ count: 6 }),
          toReadonlyArrayAsync(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
    ),
  );

export default StatefulTypeClassTests;
