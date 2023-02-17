import { PauseableLike_pause, PauseableLike_resume } from "../scheduling";
import Pauseable_pause from "./Pauseable/__internal__/Pauseable.pause";
import Pauseable_resume from "./Pauseable/__internal__/Pauseable.resume";

export const pause: <TPauseable extends { [PauseableLike_pause](): void }>(
  pausable: TPauseable,
) => TPauseable = Pauseable_pause;

export const resume: <TPauseable extends { [PauseableLike_resume](): void }>(
  pausable: TPauseable,
) => TPauseable = Pauseable_resume;

/** @ignore */
const Pauseable = {
  pause,
  resume,
};

export default Pauseable;
