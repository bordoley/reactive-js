import { ProducerLike, SourceLike_subscribe } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import Iterable_first from "../../Iterable/__private__/Iterable.first.js";
import type * as Producer from "../../Producer.js";

const Producer_lastAsync: Producer.Signature["lastAsync"] =
  <T>() =>
  async (producer: ProducerLike<T>) => {
    const consumer = Consumer.createDropOldestWithoutBackpressure<T>(1, {
      autoDispose: true,
    });

    producer[SourceLike_subscribe](consumer);

    await DisposableContainer.toPromise(consumer);

    return pipe(consumer, Iterable_first<T>());
  };

export default Producer_lastAsync;
