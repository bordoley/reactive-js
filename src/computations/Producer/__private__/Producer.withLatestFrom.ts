import { ComputationLike_isPure, ProducerLike } from "../../../computations.js";
import {
  Function2,
  SideEffect1,
  compose,
  partial,
  pipe,
  tuple,
} from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import * as WithLatestFromSink from "../../__internal__/sinks/WithLatestFromSink.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_lift from "./Producer.lift.js";
import Producer_subscribe from "./Producer.subscribe.js";

const addEventListener = <TB>(_: ConsumerLike, effect: SideEffect1<TB>) =>
  compose(Producer_forEach(effect), Producer_subscribe());

const Producer_withLatestFrom: Producer.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: ProducerLike<TB>,
  selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
) =>
  pipe(
    WithLatestFromSink.create<ConsumerLike, ProducerLike<TB>, TA, TB, T>,
    partial(other, selector, addEventListener),
    Producer_lift<TA, T>({
      [ComputationLike_isPure]: Computation.isPure(other),
    }),
  )) as Producer.Signature["withLatestFrom"];

export default Producer_withLatestFrom;
