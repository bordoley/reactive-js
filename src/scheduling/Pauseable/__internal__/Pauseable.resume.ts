import { pipe, returns } from "../../../functions.js";
import { PauseableLike, PauseableState_running } from "../../../scheduling.js";
import Dispatcher_dispatch from "../../Dispatcher/__internal__/Dispatcher.dispatch.js";

const Pauseable_resume = <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
): TPauseable =>
  pipe(pauseable, Dispatcher_dispatch(returns(PauseableState_running)));

export default Pauseable_resume;
