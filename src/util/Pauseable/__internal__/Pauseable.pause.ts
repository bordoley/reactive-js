import { PauseableLike_pause } from "../../../util";

const Pauseable_pause = <TPauseable extends { [PauseableLike_pause](): void }>(
  pausable: TPauseable,
): TPauseable => {
  pausable[PauseableLike_pause]();
  return pausable;
};

export default Pauseable_pause;
