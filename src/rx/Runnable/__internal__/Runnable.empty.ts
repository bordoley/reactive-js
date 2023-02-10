import { Empty } from "../../../containers";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Runnable_create from "./Runnable.create";

const Runnable_empty: Empty<RunnableLike>["empty"] = <T>() =>
  Runnable_create<T>(sink => {
    pipe(sink, Disposable_dispose());
  });

export default Runnable_empty;
