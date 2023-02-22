import { pipe, returns } from "../../../functions.js";
import { PauseableLike, PauseableState_paused } from "../../../scheduling.js";
import Dispatcher_dispatch from "../../Dispatcher/__internal__/Dispatcher.dispatch.js";

const Pauseable_pause = <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
): TPauseable =>
  pipe(pauseable, Dispatcher_dispatch(returns(PauseableState_paused)));

export default Pauseable_pause;
