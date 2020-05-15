import { SinkLike } from "./interfaces";
import { ignore, SideEffect1 } from "../../functions";
import { __DEV__ } from "../env";

export abstract class AbstractDelegatingSink<TA, TB> implements SinkLike<TA> {
  isDone = false;

  constructor(readonly delegate: SinkLike<TB>) {}

  abstract notify(next: TA): void;

  done(): void {
    this.isDone = true;
    this.delegate.done();
  }
}

const assertSinkStateProduction = ignore;
const assertSinkStateDev = <T>(
  sink: SinkLike<T>,
) => {
  if (sink.isDone) {
    throw new Error(
      "Sink is done"
    );
  }
};

const _asserSinkState = __DEV__
  ? assertSinkStateDev
  : assertSinkStateProduction;

export const assertSinkState: SideEffect1<SinkLike<
  unknown
>> = _asserSinkState;