import { EventSourceLike } from "../../../computations.js";
import { Factory, Reducer, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

const EventSource_reduceAsync: EventSource.Signature["reduceAsync"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  async (eventSource: EventSourceLike<T>) => {
    let result: TAcc = initialValue();

    const subscription = pipe(
      eventSource,
      EventSource_addEventHandler(v => {
        result = reducer(result, v);
      }),
    );

    await DisposableContainer.toPromise(subscription);

    return result;
  };

export default EventSource_reduceAsync;
