import { Empty } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_empty: Empty<RunnableLike>["empty"] = <T>() =>
  Runnable_create<T>(sink => {
    pipe(sink, Disposable_dispose());
  });

export default Runnable_empty;
