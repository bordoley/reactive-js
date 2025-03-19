import {
  expectEquals,
  expectToThrow,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Iterable from "../../computations/Iterable.js";
import { Optional, pipe } from "../../functions.js";
import {
  CollectionEnumeratorLike_count,
  DropLatestBackpressureStrategy,
  ListenerLike_notify,
  ThrowBackpressureStrategy,
} from "../../utils.js";
import * as Consumer from "../__internal__/Consumer.js";

testModule(
  "Consumer",
  test("drop-latest backpressure", () => {
    const consumer = Consumer.create<number>({
      capacity: 1,
      backpressureStrategy: DropLatestBackpressureStrategy,
    });

    consumer[ListenerLike_notify](0);
    consumer[ListenerLike_notify](1);

    pipe(consumer[CollectionEnumeratorLike_count], expectEquals(1));
    pipe(consumer, Iterable.first(), expectEquals<Optional<number>>(0));
  }),
  test("drop-oldest backpressure", () => {
    const consumer = Consumer.createDropOldestWithoutBackpressure<number>(1);

    consumer[ListenerLike_notify](0);
    consumer[ListenerLike_notify](1);

    pipe(consumer, Iterable.first(), expectEquals<Optional<number>>(1));
    pipe(consumer, Iterable.first(), expectEquals<Optional<number>>(1));
  }),
  test("throw backpressure", () => {
    const consumer = Consumer.create<number>({
      capacity: 1,
      backpressureStrategy: ThrowBackpressureStrategy,
    });

    consumer[ListenerLike_notify](0);

    expectToThrow(() => {
      consumer[ListenerLike_notify](1);
    });

    pipe(consumer[CollectionEnumeratorLike_count], expectEquals(1));
    pipe(consumer, Iterable.first(), expectEquals<Optional<number>>(0));
  }),
);
