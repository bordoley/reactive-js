import { PauseableLike_resume } from "../../../util";

const Pauseable$resume = <
  TPauseable extends { [PauseableLike_resume](): void },
>(
  pausable: TPauseable,
): TPauseable => {
  pausable[PauseableLike_resume]();
  return pausable;
};

export default Pauseable$resume;
