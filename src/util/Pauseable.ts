import { PauseableLike_pause, PauseableLike_resume } from "../util";
import Pauseable_pause from "./__internal__/Pauseable/Pauseable.pause";
import Pauseable_resume from "./__internal__/Pauseable/Pauseable.resume";

export const pause: <TPauseable extends { [PauseableLike_pause](): void }>(
  pausable: TPauseable,
) => TPauseable = Pauseable_pause;

export const resume: <TPauseable extends { [PauseableLike_resume](): void }>(
  pausable: TPauseable,
) => TPauseable = Pauseable_resume;
