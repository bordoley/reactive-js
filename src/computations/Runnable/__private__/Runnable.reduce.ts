import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { Factory, Reducer } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

const Runnable_reduce: Runnable.Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (runnable: RunnableLike<T>) => {
    const acc: [TAcc] = [initialValue()];
    const sink = Sink.reducer(reducer, acc);
    runnable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
    return acc[0];
  };

export default Runnable_reduce;
