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
  EventListenerLike_notify,
  ThrowBackpressureStrategy,
} from "../../utils.js";
import * as Consumer from "../Consumer.js";

testModule(
  "Consumer",

  test("drop-latest backpressure", () => {
    const consumer = Consumer.create<number>({
      capacity: 1,
      backpressureStrategy: DropLatestBackpressureStrategy,
    });

    consumer[EventListenerLike_notify](0);
    consumer[EventListenerLike_notify](1);

    pipe(consumer[CollectionEnumeratorLike_count], expectEquals(1));
    pipe(consumer, Iterable.first(), expectEquals<Optional<number>>(0));
  }),
  test("drop-oldest backpressure", () => {
    const consumer = Consumer.createDropOldestWithoutBackpressure<number>(1);

    consumer[EventListenerLike_notify](0);
    consumer[EventListenerLike_notify](1);

    pipe(consumer, Iterable.first(), expectEquals<Optional<number>>(1));
    pipe(consumer, Iterable.first(), expectEquals<Optional<number>>(1));
  }),
  test("throw backpressure", () => {
    const consumer = Consumer.create<number>({
      capacity: 1,
      backpressureStrategy: ThrowBackpressureStrategy,
    });

    consumer[EventListenerLike_notify](0);

    expectToThrow(() => {
      consumer[EventListenerLike_notify](1);
    });

    pipe(consumer[CollectionEnumeratorLike_count], expectEquals(1));
    pipe(consumer, Iterable.first(), expectEquals<Optional<number>>(0));
  }),
);
