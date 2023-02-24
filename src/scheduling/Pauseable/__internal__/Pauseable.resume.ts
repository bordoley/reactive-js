import { pipe, returns } from "../../../functions.js";
import { PauseableLike, PauseableState_running } from "../../../scheduling.js";
import Queueable_push from "../../../util/Queueable/__internal__/Queueable.push.js";

const Pauseable_resume = <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
): TPauseable =>
  pipe(pauseable, Queueable_push(returns(PauseableState_running)));

export default Pauseable_resume;
