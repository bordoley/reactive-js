import React, { useEffect } from "react";
import ReactDOMClient from "react-dom/client";
import {
  useAnimate,
  useScroll,
} from "@reactive-js/core/integrations/react/web";
import {
  useAnimation,
  useEventPublisher,
} from "@reactive-js/core/integrations/react";
import {
  DisposableLike_dispose,
  EventSourceLike,
  EventSourceLike_addListener,
} from "@reactive-js/core/util";
import { ScrollValue } from "@reactive-js/core/integrations/web";
import { bindMethod, invoke, pipe } from "@reactive-js/core/functions";
import * as EventSource from "@reactive-js/core/util/EventSource";
import * as EventListener from "@reactive-js/core/util/EventListener";
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

  useEffect(() => {
    const eventListener = EventListener.create<number>(x => {
      publishedAnimation[EventListenerLike_notify](x);

      if (x === 1) {
        // FIXME: To make this really right, we should measure the velocity
        // and dispatch that so we can adjust the size of the overshoot
        // in the animation.
        dispatchSpring(true);
      }

      if (x === 0) {
        // FIXME: To make this really right, we should measure the velocity
        // and dispatch that so we can adjust the size of the overshoot
        // in the animation.
        dispatchSpring(false);
      }
    });

    pipe(
      scrollAnimation,
      EventSource.map(x => x.value.y.progress),
      invoke(EventSourceLike_addListener, eventListener),
    );

    pipe(
      spring,
      EventSource.map(x => x.value),
      invoke(EventSourceLike_addListener, publishedAnimation),
    );

    return bindMethod(eventListener, DisposableLike_dispose);
  }, [scrollAnimation, publishedAnimation, spring]);

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
