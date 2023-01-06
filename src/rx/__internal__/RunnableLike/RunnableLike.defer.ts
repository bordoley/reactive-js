import { Defer } from "../../../containers";
import { ReactiveContainerLike_sinkInto, RunnableLike } from "../../../rx";
import RunnableLike__create from "./RunnableLike.create";

const RunnableLike__defer: Defer<RunnableLike>["defer"] = f =>
  RunnableLike__create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
  });

export default RunnableLike__defer;
