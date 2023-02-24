import { pipe, returns } from "../../../functions.js";
import { PauseableLike, PauseableState_paused } from "../../../scheduling.js";
import Queueable_push from "../../../util/Queueable/__internal__/Queueable.push.js";

const Pauseable_pause = <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
): TPauseable =>
  pipe(pauseable, Queueable_push(returns(PauseableState_paused)));

export default Pauseable_pause;
