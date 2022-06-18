import { DoneEvent, DoneEventWithData, NotifyEvent } from "../streamable";

export const notify = <T>(data: T): NotifyEvent<T> => ({
  type: "notify",
  data,
});

const doneEvent: DoneEvent = { type: "done", hasData: false };

export function done<T>(data: T): DoneEventWithData<T>;
export function done(): DoneEvent;
export function done<T>(
  ...args: readonly T[]
): DoneEvent | DoneEventWithData<T> {
  return args.length > 0
    ? { type: "done", hasData: true, data: args[0] }
    : doneEvent;
}
