import { Empty } from "../../../containers";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import RunnableLike__create from "./RunnableLike.create";

const RunnableLike__empty: Empty<RunnableLike>["empty"] = <T>() =>
  RunnableLike__create<T>(sink => {
    pipe(sink, DisposableLike__dispose());
  });

export default RunnableLike__empty;
