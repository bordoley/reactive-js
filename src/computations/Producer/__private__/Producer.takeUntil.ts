import { ProducerLike } from "../../../computations.js";
import { SideEffect, compose, partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as ReactiveSource from "../../ReactiveSource.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_lift from "./Producer.lift.js";

const addEventListener = (_: ConsumerLike, effect: SideEffect) =>
  compose(Producer_forEach(effect), ReactiveSource.subscribe());

const Producer_takeUntil: Producer.Signature["takeUntil"] = (<T>(
  notifier: ProducerLike,
) =>
  pipe(
    TakeUntilSink.create<ConsumerLike, T, ProducerLike>,
    partial(notifier, addEventListener),
    Producer_lift(),
  )) as Producer.Signature["takeUntil"];

export default Producer_takeUntil;
