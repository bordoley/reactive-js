import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  useAnimate,
  useScroll,
} from "@reactive-js/core/integrations/react/web";
import {
  useAnimation,
  useEventPublisher,
  useEventSource,
} from "@reactive-js/core/integrations/react";
import {
  EventSourceLike,
} from "@reactive-js/core/util";
import { ScrollValue } from "@reactive-js/core/integrations/web";
import {
  bindMethod,
  pipeLazy,
} from "@reactive-js/core/functions";
import * as EventSource from "@reactive-js/core/util/EventSource";
import { EventListenerLike_notify } from "@reactive-js/core/util";

const AnimatedCircle = ({
  animation,
}: {
  animation: EventSourceLike<number>;
}) => {
  const circleRef = useAnimate<HTMLDivElement>(animation, progress => ({
    clipPath: `circle(${progress * 25 + 5}%)`,
  }));

  return (
    <div
      ref={circleRef}
      style={{
        backgroundColor: "orange",
        clipPath: `circle(5%)`,
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        position: "fixed",
        inset: "0",
      }}
    />
  );
};

const ScrollApp = () => {
  const scrollAnimation = useEventPublisher<{
    event: "scroll";
    value: ScrollValue;
  }>();
  const containerRef = useScroll<HTMLDivElement>(scrollAnimation);

  const [spring, dispatchSpring] = useAnimation<number, boolean>(
    direction =>
      direction
        ? [
            {
              type: "spring",
              precision: 0.1,
              from: 1,
              to: 1.2,
            },
            {
              type: "spring",
              precision: 0.1,
              from: 1.2,
              to: 1,
            },
          ]
        : [
            {
              type: "spring",
              precision: 0.1,
              from: 0,
              to: -0.01,
            },
            {
              type: "spring",
              precision: 0.1,
              from: -0.01,
              to: 0,
            },
          ],
    [],
    { mode: "switching" },
  );

  const publishedAnimation = useEventPublisher<number>();

  useEventSource(
    pipeLazy(
      scrollAnimation,
      EventSource.forEach(({ value }: { value: ScrollValue }) => {
        const pos = value.y.progress;
        const velocity = value.y.velocity;

        publishedAnimation[EventListenerLike_notify](pos);

        if (pos === 1 && Math.abs(velocity) > 0.5) {
          // FIXME: To make this really right, we should measure the velocity
          // and dispatch that so we can adjust the size of the overshoot
          // in the animation.
          dispatchSpring(true);
        }

        if (pos === 0 && Math.abs(velocity) > 0.5) {
          // FIXME: To make this really right, we should measure the velocity
          // and dispatch that so we can adjust the size of the overshoot
          // in the animation.
          dispatchSpring(false);
        }
      }),
      EventSource.ignoreElements(),
    ),
    [scrollAnimation, dispatchSpring],
  );

  useEventSource(
    pipeLazy(
      spring,
      EventSource.pick("value"),
      EventSource.forEach(
        bindMethod(publishedAnimation, EventListenerLike_notify),
      ),
      EventSource.ignoreElements(),
    ),
    [spring, publishedAnimation],
  );

  return (
    <div
      ref={containerRef}
      style={{
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          height: "100%",
          width: "100%",
          position: "fixed",
          inset: "0",
          pointerEvents: "none",
          zIndex: "0",
        }}
      >
        <AnimatedCircle animation={publishedAnimation} />
      </div>

      <div
        style={{
          width: "100vw",
          height: "200vh",
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<ScrollApp />);
