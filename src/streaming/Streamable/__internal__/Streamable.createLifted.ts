import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_create from "./Streamable.create.js";

const Streamable_createLifted = <TReq, T>(
  op: ContainerOperator<ObservableLike, TReq, T>,
): StreamableLike<TReq, T> =>
  Streamable_create((scheduler, options) =>
    Stream_create(op, scheduler, options),
  );

export default Streamable_createLifted;
