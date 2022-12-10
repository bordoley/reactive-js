import { PauseableLike_pause } from "../../../util";

const pause = <TPauseable extends { [PauseableLike_pause](): void }>(
  pausable: TPauseable,
): TPauseable => {
  pausable[PauseableLike_pause]();
  return pausable;
};

export default pause;
