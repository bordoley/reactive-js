import { ObservableOperator } from "../observable";
import { createDecodeWithCharset } from "../sink";
import { fromArrayT } from "./fromArray";
import { liftT } from "./lift";
import { Observer, sinkT } from "./observer";

export const decodeWithCharset: (
  charset?: string,
) => ObservableOperator<ArrayBuffer, string> = createDecodeWithCharset(
  { ...liftT, ...fromArrayT, ...sinkT },
  class DecodeWithCharsetObserver extends Observer<ArrayBuffer> {
    constructor(
      readonly delegate: Observer<string>,
      readonly textDecoder: TextDecoder,
    ) {
      super(delegate);
    }
  },
);
