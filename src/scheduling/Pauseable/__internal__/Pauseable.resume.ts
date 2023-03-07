import { returns } from "../../../functions.js";
import { PauseableLike, PauseableState_running } from "../../../scheduling.js";
import { QueueLike_push } from "../../../util.js";

const Pauseable_resume = <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
): void => pauseable[QueueLike_push](returns(PauseableState_running));

export default Pauseable_resume;
