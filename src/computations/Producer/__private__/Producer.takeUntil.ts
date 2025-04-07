import { ProducerLike } from "../../../computations.js";
import { SideEffect, partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
import type * as Producer from "../../Producer.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Producer_lift from "./Producer.lift.js";

const addEventListener = (effect: SideEffect) => EventSource.subscribe(effect);

const Producer_takeUntil: Producer.Signature["takeUntil"] = (<T>(
  notifier: ProducerLike,
) =>
  pipe(
    TakeUntilSink.create<ConsumerLike, T, ProducerLike>,
    partial(notifier, addEventListener),
    Producer_lift<T, T>(),
  )) as Producer.Signature["takeUntil"];

export default Producer_takeUntil;
