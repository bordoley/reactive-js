import { TextDecoder } from "util";
import {
  FlowEvent,
  FlowEventType,
  FlowableOperator,
  FlowMode,
} from "./flowable";
import { compose, returns } from "./functions";
import {
  withLatestFrom,
  compute,
  concatMap,
  fromIterator,
  ObservableOperator,
} from "./observable";
import { lift } from "./streamable";

export const decode = (
  charset: string = "utf-8",
  options?: TextDecoderOptions,
): FlowableOperator<ArrayBuffer, string> => {
  const op: ObservableOperator<
    FlowEvent<ArrayBuffer>,
    FlowEvent<string>
  > = compose(
    withLatestFrom(
      compute(() => new TextDecoder(charset, options)),
      function*(ev: FlowEvent<ArrayBuffer>, decoder) {
        switch (ev.type) {
          case FlowEventType.Next: {
            const data = decoder.decode(ev.data, { stream: true });
            yield { type: FlowEventType.Next, data };
            break;
          }
          case FlowEventType.Complete: {
            const data = decoder.decode();
            if (data.length > 0) {
              yield { type: FlowEventType.Next, data };
            }

            yield { type: FlowEventType.Complete };
            break;
          }
        }
      },
    ),
    concatMap(compose(returns, fromIterator)),
  );

  return lift(op);
};

const encodingOp: ObservableOperator<
  FlowEvent<string>,
  FlowEvent<Uint8Array>
> = withLatestFrom(
  compute(() => new TextEncoder()),
  (ev: FlowEvent<string>, textEncoder) => {
    switch (ev.type) {
      case FlowEventType.Next: {
        const data = textEncoder.encode(ev.data);
        return { type: FlowEventType.Next, data };
      }
      case FlowEventType.Complete: {
        return ev;
      }
    }
  },
);

export const encode = lift<FlowMode, FlowEvent<string>, FlowEvent<Uint8Array>>(
  encodingOp,
);
