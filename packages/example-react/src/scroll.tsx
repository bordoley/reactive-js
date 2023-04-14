import React, { useMemo } from "react";
import ReactDOMClient from "react-dom/client";
import {
  useAnimate,
  useScroll,
} from "@reactive-js/core/integrations/react/web";
import { useEventPublisher } from "@reactive-js/core/integrations/react";
import { EventSourceLike } from "@reactive-js/core/util";
import { ScrollValue } from "@reactive-js/core/integrations/web";
import { pipeLazy } from "@reactive-js/core/functions";
import * as EventSource from "@reactive-js/core/util/EventSource";

const AnimatedCircle = ({
  animation,
}: {
  animation: EventSourceLike<number>;
}) => {
  const circleRef = useAnimate<HTMLDivElement>(
    animation,
    progress => ({
      clipPath: `circle(${progress * 25 + 5}%)`,
    }),
  );

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

  const animation = useMemo(
    pipeLazy(
      scrollAnimation,
      EventSource.map(x => x.value.y.progress),
    ),
    [scrollAnimation],
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
        <AnimatedCircle animation={animation} />
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
