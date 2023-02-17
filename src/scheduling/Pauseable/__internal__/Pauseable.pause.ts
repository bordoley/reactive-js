import { pipe, returns } from "../../../functions";
import { PauseableLike, PauseableState_paused } from "../../../scheduling";
import Dispatcher_dispatch from "../../Dispatcher/__internal__/Dispatcher.dispatch";

const Pauseable_pause = <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
): TPauseable =>
  pipe(pauseable, Dispatcher_dispatch(returns(PauseableState_paused)));

export default Pauseable_pause;
