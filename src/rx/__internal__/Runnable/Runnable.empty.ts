import { Empty } from "../../../containers";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Runnable$create from "./Runnable.create";

const Runnable$empty: Empty<RunnableLike>["empty"] = <T>() =>
  Runnable$create<T>(sink => {
    pipe(sink, Disposable$dispose());
  });

export default Runnable$empty;
