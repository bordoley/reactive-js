import { ObservableLike } from "../../../computations.js";
import { pipeAsync } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_firstAsync from "./Observable.firstAsync.js";

const Observable_toReadonlyArrayAsync: Observable.Signature["toReadonlyArrayAsync"] =

    <T>(options?: { readonly scheduler?: SchedulerLike }) =>
    async (observable: ObservableLike<T>): Promise<ReadonlyArray<T>> => {
      const result = await pipeAsync(
        observable,
        Observable_buffer<T>(),
        Observable_firstAsync(options),
      );

      return result ?? [];
    };
export default Observable_toReadonlyArrayAsync;
