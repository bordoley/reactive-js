import { compose, returns } from "./functions";
import { withLatestFrom, compute, concatMap, fromIterator, ObservableOperator } from "./observable";
import { FlowEvent, FlowEventType, FlowableOperator } from "./flowable";
import { lift } from "./streamable";
import { TextDecoder } from "util";

export const decode = (
 charset: string = "utf-8",
 options?: TextDecoderOptions,
): FlowableOperator<ArrayBuffer, string> => {
  const op: ObservableOperator<FlowEvent<ArrayBuffer>, FlowEvent<string>> = compose(
    withLatestFrom(compute(() => new TextDecoder(charset, options)), function*(
      ev: FlowEvent<ArrayBuffer>,
      decoder,
    ) {
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
    }),
    concatMap(compose(returns, fromIterator)),
  );

  return lift(op);
};

const encodingOp: ObservableOperator<FlowEvent<string>, FlowEvent<Uint8Array>> = compose(
  withLatestFrom(compute(() => new TextEncoder()), function*(
    ev: FlowEvent<string>,
    decoder,
  ) {
    switch (ev.type) {
      case FlowEventType.Next: {
        const data = decoder.encode(ev.data);
        yield { type: FlowEventType.Next, data };
        break;
      }
      case FlowEventType.Complete: {
        yield ev;
        break;
      }
    }
  }),
  concatMap(compose(returns, fromIterator)),
);

export const encode: FlowableOperator<string, Uint8Array> = lift(encodingOp);
