import { Never } from "../../../containers";
import { ignore } from "../../../functions";
import { RunnableLike } from "../../../rx";
import RunnableLike__create from "./RunnableLike.create";

const RunnableLike__never: Never<RunnableLike>["never"] = () =>
  RunnableLike__create(ignore);

export default RunnableLike__never;
