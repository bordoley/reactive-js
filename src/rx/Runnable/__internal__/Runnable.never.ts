import { Never } from "../../../containers";
import { ignore } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Runnable_create from "./Runnable.create";

const Runnable_never: Never<RunnableLike>["never"] = () =>
  Runnable_create(ignore);

export default Runnable_never;
