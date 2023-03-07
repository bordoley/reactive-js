import { returns } from "../../../functions.js";
import { PauseableLike, PauseableState_paused } from "../../../scheduling.js";
import { QueueLike_push } from "../../../util.js";

const Pauseable_pause = <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
): void => pauseable[QueueLike_push](returns(PauseableState_paused));

export default Pauseable_pause;
