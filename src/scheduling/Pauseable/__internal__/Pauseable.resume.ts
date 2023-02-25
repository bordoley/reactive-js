import { pipe, returns } from "../../../functions.js";
import { PauseableLike, PauseableState_running } from "../../../scheduling.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";

const Pauseable_resume = <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
): TPauseable => pipe(pauseable, Queue_push(returns(PauseableState_running)));

export default Pauseable_resume;
