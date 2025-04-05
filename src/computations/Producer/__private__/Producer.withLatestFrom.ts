import { ComputationLike_isPure, ProducerLike } from "../../../computations.js";
import {
  Function2,
  SideEffect1,
  partial,
  pipe,
  tuple,
} from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import type * as Producer from "../../Producer.js";
import * as WithLatestFromSink from "../../__internal__/sinks/WithLatestFromSink.js";
import Producer_lift from "./Producer.lift.js";

const addEventListener = <T>(effect: SideEffect1<T>) =>
  EventSource.subscribe(effect);

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
