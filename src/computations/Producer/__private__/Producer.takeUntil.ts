import { ProducerLike } from "../../../computations.js";
import {
  SideEffect,
  compose,
  identity,
  partial,
  pipe,
  returns,
} from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_lift from "./Producer.lift.js";

const m = Computation.makeModule<Producer.Computation>()({
  toProducer: returns(identity),
});

const addEventListener = (_: ConsumerLike, effect: SideEffect) =>
  compose(Producer_forEach(effect), Computation.subscribe(m)());

const Producer_takeUntil: Producer.Signature["takeUntil"] = (<T>(
  notifier: ProducerLike,
) =>
  pipe(
    TakeUntilSink.create<ConsumerLike, T, ProducerLike>,
    partial(notifier, addEventListener),
    Producer_lift(),
  )) as Producer.Signature["takeUntil"];

export default Producer_takeUntil;
