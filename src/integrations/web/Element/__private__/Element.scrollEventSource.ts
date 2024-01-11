import * as CurrentTime from "../../../../__internal__/CurrentTime.js";
import { MAX_VALUE, MIN_VALUE } from "../../../../__internal__/constants.js";
import { clamp } from "../../../../__internal__/math.js";
import { EventListenerLike_notify } from "../../../../events.js";
import * as EventSource from "../../../../events/EventSource.js";
import { pipe } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
import { ScrollValue } from "../../../web.js";
import type * as Element from "../../Element.js";
import Element_eventSource from "./Element.eventSource.js";
import Element_windowResizeEventSource from "./Element.windowResizeEventSource.js";

const calcProgress = (min: number, max: number, value: number) =>
  max - min === 0 ? 1 : (value - min) / (max - min);

const createInitialScrollValue = (): ScrollValue => ({
  time: MIN_VALUE,
  x: {
    current: 0,
    progress: 0,
    scrollLength: 0,
    velocity: 0,
    acceleration: 0,
  },
  y: {
    current: 0,
    progress: 0,
    scrollLength: 0,
    velocity: 0,
    acceleration: 0,
  },
});

const Element_scrollEventSource: Element.Signature["scrollEventSource"] =
  () => element =>
    EventSource.create(listener => {
      let prev = createInitialScrollValue();

      pipe(
        element,
        Element_eventSource("scroll"),
        EventSource.mergeWith(Element_windowResizeEventSource()),
        EventSource.addEventHandler(ev => {
          const {
            x: prevX,
            y: prevY,
            time: prevTime,
          } = ev.type === "resize" ? createInitialScrollValue() : prev;

          const now = CurrentTime.now();
          const dt = clamp(0, now - prevTime, MAX_VALUE);

          const xCurrent = element.scrollLeft;
          const xScrollLength = element.scrollWidth - element.clientWidth;
          const xVelocity = (xCurrent - prevX.current) / dt;
          const xAcceleration = dt > 0 ? (xVelocity - prevX.velocity) / dt : 0;

          const yCurrent = element.scrollTop;
          const yScrollLength = element.scrollHeight - element.clientHeight;
          const yVelocity = (yCurrent - prevY.current) / dt;
          const yAcceleration = dt > 0 ? (yVelocity - prevY.velocity) / dt : 0;

          const x = {
            current: xCurrent,
            scrollLength: xScrollLength,
            progress: calcProgress(0, xScrollLength, xCurrent),
            velocity: xVelocity,
            acceleration: xAcceleration,
          };

          const y = {
            current: yCurrent,
            scrollLength: yScrollLength,
            progress: calcProgress(0, yScrollLength, yCurrent),
            velocity: yVelocity,
            acceleration: yAcceleration,
          };

          prev = { x, y, time: now };

          listener[EventListenerLike_notify](prev);
        }),
        Disposable.bindTo(listener),
      );
    });

export default Element_scrollEventSource;
