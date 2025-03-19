import { ProducerLike } from "../../../computations.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as Repeat from "../../__internal__/operators/Repeat.js";
import Producer_lift from "./Producer.lift.js";

const Producer_repeat: Producer.Signature["repeat"] =
  <T>(shouldRepeat?: Predicate<number> | number) =>
  (producer: ProducerLike<T>) =>
    pipe(
      Repeat.createConsumer,
      partial(producer, shouldRepeat, 0),
      Producer_lift(),
    )(producer);

export default Producer_repeat;
