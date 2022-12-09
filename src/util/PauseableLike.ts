import { PauseableLike_pause, PauseableLike_resume } from "../util";
import { pause as PauseableLike__pause } from "./__internal__/PauseableLike/PauseableLike.pause";
import { resume as PauseableLike__resume } from "./__internal__/PauseableLike/PauseableLike.resume";

export const pause: <TPauseable extends { [PauseableLike_pause](): void }>(
  pausable: TPauseable,
) => TPauseable = PauseableLike__pause;

export const resume: <TPauseable extends { [PauseableLike_resume](): void }>(
  pausable: TPauseable,
) => TPauseable = PauseableLike__resume;
