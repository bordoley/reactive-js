import { DoneEvent, DoneEventWithData, NotifyEvent } from "../streamable";

export const notifyEvent = <T>(data: T): NotifyEvent<T> => ({
  type: "notify",
  data,
});

export const doneEventWithData = <T>(data: T): DoneEventWithData<T> => ({
  type: "done",
  data,
});

export const doneEvent: DoneEvent = { type: "done" };
