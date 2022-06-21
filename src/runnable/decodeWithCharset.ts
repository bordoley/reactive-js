import { RunnableOperator } from "../runnable";
import { createDecodeWithCharset } from "../sink";
import { fromArrayT } from "./fromArray";
import { liftT } from "./lift";
import { Sink, sinkT } from "./sinks";

export const decodeWithCharset: (
  charset?: string,
) => RunnableOperator<ArrayBuffer, string> = createDecodeWithCharset(
  { ...liftT, ...fromArrayT, ...sinkT },

  class DecodeWithCharsetSink extends Sink<ArrayBuffer> {
    constructor(
      readonly delegate: Sink<string>,
      readonly textDecoder: TextDecoder,
    ) {
      super();
    }
  },
);
