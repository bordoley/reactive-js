import * as CurrentTime from "../../../__internal__/CurrentTime.js";
import { MAX_VALUE, MIN_VALUE } from "../../../__internal__/constants.js";
import * as Broadcaster from "../../../computations/Broadcaster.js";
import * as Computation from "../../../computations/Computation.js";
import * as Publisher from "../../../computations/Publisher.js";
import {
  BroadcasterLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { invoke, newInstance, pipe, returns } from "../../../functions.js";
import { clamp } from "../../../math.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
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
  done: false,
});

const Element_scrollEventSource: Element.Signature["scrollEventSource"] =
  /*@__PURE__*/ (() => {
    const BroadcasterModule = Computation.makeModule<Broadcaster.Computation>()(
      {
        merge: Broadcaster.merge,
      },
    );

    const eventSourceCache =
      newInstance<WeakMap<HTMLElement, BroadcasterLike<ScrollValue>>>(WeakMap);

    return returns(
      element =>
        eventSourceCache.get(element) ??
        (() => {
          let prev = createInitialScrollValue();

          // Need to have a stable sink setup to avoid
          // issues with autoDispose behavior on the "scroll"
          // event below causing the source event to be disposed
          const sink = pipe(
            Publisher.create({
              autoDispose: true,
            }),
            DisposableContainer.onDisposed(_ => {
              eventSourceCache.delete(element);
            }),
          );

          pipe(
            element,
            Element_eventSource<HTMLElement, "scroll">("scroll", {
              autoDispose: true,
            }),
            Computation.mergeWith(BroadcasterModule)(
              Element_windowResizeEventSource(),
              pipe(
                element,
                Element_eventSource<HTMLElement, "scrollend">("scrollend", {
                  autoDispose: true,
                }),
              ),
            ),
            Broadcaster.map<Event, ScrollValue>(ev => {
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
              const xAcceleration =
                dt > 0 ? (xVelocity - prevX.velocity) / dt : 0;

              const yCurrent = element.scrollTop;
              const yScrollLength = element.scrollHeight - element.clientHeight;
              const yVelocity = (yCurrent - prevY.current) / dt;
              const yAcceleration =
                dt > 0 ? (yVelocity - prevY.velocity) / dt : 0;

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

              prev = { x, y, time: now, done: ev.type === "scrollend" };

              return prev;
            }),
            invoke(SourceLike_subscribe, sink),
          );

          eventSourceCache.set(element, sink);
          return sink;
        })(),
    );
  })();

export default Element_scrollEventSource;
