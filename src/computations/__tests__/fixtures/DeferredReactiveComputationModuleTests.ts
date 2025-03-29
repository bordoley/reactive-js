import { describe } from "../../../__internal__/testing.js";
import {
  ComputationModule,
  DeferredReactiveComputationModule,
} from "../../../computations.js";

const DeferredReactiveComputationModuleTests = <
  TComputationModule extends ComputationModule &
    Pick<DeferredReactiveComputationModule, "withBackpressure">,
>(
  _m: TComputationModule,
) =>
  describe(
    "ComputationModule",
    /*
    describe(
      "withBackpressure",
      testAsync(
        "with a capacity of 0",
        pipeLazyAsync(
          [1, 2, 3, 4],
          Computation.fromReadonlyArray(m)(),
          m.withBackpressure({
            capacity: 0,
            backpressureStrategy: DropLatestBackpressureStrategy,
          }),
          m.withBackpressure({
            capacity: 10000,
            backpressureStrategy: DropLatestBackpressureStrategy,
          }),
          m.toProducer(),
          Source.lastAsync(),
          expectIsNone,
        ),
      ),
      testAsync(
        "with a capacity of 0 and throw backpressure strategy",
        pipeLazyAsync(
          pipeLazyAsync(
            [1, 2, 3, 4],
            Computation.fromReadonlyArray(m)(),
            m.map(ignore),
            m.withBackpressure({
              capacity: 0,
              backpressureStrategy: ThrowBackpressureStrategy,
            }),
            m.toProducer(),
            Source.lastAsync(),
          ),
          expectToThrowAsync,
        ),
      ),
      testAsync(
        "with a throw backpressure strategy",
        pipeLazyAsync(
          pipeLazyAsync(
            [1, 2, 3, 4],
            Computation.fromReadonlyArray(m)(),
            m.map(ignore),
            m.withBackpressure({
              capacity: 2,
              backpressureStrategy: ThrowBackpressureStrategy,
            }),
            m.toProducer(),
            Source.lastAsync(),
          ),
          expectToThrowAsync,
        ),
      ),
      testAsync("with a drop latest backpressure strategy", async () => {
        using scheduler = HostScheduler.create();
        await pipeAsync(
          Observable.create(async observer => {
            await Promise.resolve();
            for (let i = 0; i < 10; i++) {
              observer[EventListenerLike_notify](i);
            }
            observer[SinkLike_complete]();
          }),
          Observable.backpressureStrategy({
            capacity: 1,
            backpressureStrategy: DropLatestBackpressureStrategy,
          }),
          Observable.toReadonlyArrayAsync<number>({ scheduler }),
          expectArrayEquals([0]),
        );
      }),
      testAsync("with a drop-oldest latest backpressure strategy", async () => {
        using scheduler = HostScheduler.create();
        await pipeAsync(
          Observable.create(async observer => {
            await Promise.resolve();

            for (let i = 0; i < 10; i++) {
              observer[EventListenerLike_notify](i);
            }
            observer[SinkLike_complete]();
          }),
          Observable.backpressureStrategy({
            capacity: 1,
            backpressureStrategy: DropOldestBackpressureStrategy,
          }),
          Observable.toReadonlyArrayAsync<number>({ scheduler }),
          expectArrayEquals([9]),
        );
      }),
      test(
        "it passes through notifications",
        pipeLazy(
          [1, 2, 3],
          Observable.fromReadonlyArray(),
          Observable.backpressureStrategy({
            capacity: 1,
            backpressureStrategy: DropLatestBackpressureStrategy,
          }),
          Observable.toReadonlyArray<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
    ),*/
  );

export default DeferredReactiveComputationModuleTests;
