export const PauseableLike_pause = Symbol("PausableLike_pause");
export const PauseableLike_resume = Symbol("PausableLike_resume");

export interface PauseableLike {
  [PauseableLike_pause](): void;
  [PauseableLike_resume](): void;
}

export const pause = (pausable: { [PauseableLike_pause](): void }): void =>
  pausable[PauseableLike_pause]();

export const resume = (pausable: { [PauseableLike_resume](): void }): void =>
  pausable[PauseableLike_resume]();
