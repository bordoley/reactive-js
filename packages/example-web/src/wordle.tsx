import React, { useEffect, useRef, useState } from "react";
import { useAnimate, useSpring } from "@reactive-js/core/react/web";
import { Property } from "csstype";
import { useEventSource } from "@reactive-js/core/react";
import { Optional } from "@reactive-js/core/functions";
import { BroadcasterLike } from "@reactive-js/core/computations";
import { clamp } from "@reactive-js/core/math";
import { AnimationLike_isRunning } from "@reactive-js/core/computations/Streamable";
import { EventListenerLike_notify } from "@reactive-js/core/utils";

const items = ["W", "O", "R", "D", "L", "E"];

const SharedStyles = {
  width: "100%",
  height: "100%",
  position: "absolute" as Property.Position,
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontWeight: 800,
  backfaceVisibility: "hidden" as Property.BackfaceVisibility,
  transformStyle: "preserve-3d" as Property.TransformStyle,
};

const Box = (props: any) => (
  <div
    {...{ ...props }}
    style={{
      position: "relative",
      height: 50,
      width: 50,
    }}
  />
);

const calcXRotation = (v: number, i: number) => clamp(0, v / (i + 1), 180);

const AnimatedBox = ({
  label,
  animation,
  index,
  direction,
}: {
  label: string;
  animation: Optional<BroadcasterLike<number>>;
  index: number;
  direction: boolean;
}) => {
  const frontBox: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    value => ({
      transform: `perspective(600px) rotateX(${
        direction
          ? 180 - calcXRotation(value, index)
          : calcXRotation(value, index)
      }deg)`,
    }),
    [index, direction],
  );

  const backBox: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    value => ({
      transform: `perspective(600px) rotateX(${
        direction
          ? calcXRotation(value, index)
          : 180 - calcXRotation(value, index)
      }deg)`,
    }),
    [index, direction],
  );

  return (
    <Box>
      <div
        ref={frontBox}
        style={{
          ...SharedStyles,
          backgroundColor: "#fafafa",
          border: "solid 2px #1a1a1a",
        }}
      >
        {"?"}
      </div>

      <div
        ref={backBox}
        style={{
          ...SharedStyles,
          backgroundColor: "#6cab64",
          border: "solid 2px #6cab64",
          color: "#fafafa",
        }}
      >
        {label}
      </div>
    </Box>
  );
};

export const Wordle = () => {
  const [state, updateState] = useState(false);

  const spring = useSpring({
    stiffness: 0.0005,
    damping: 0.0026,
    precision: 0.1,
  });

  const prevState = useRef(state);

  useEffect(() => {
    if (prevState.current === state) {
      return;
    }
    prevState.current = state;
    spring?.[EventListenerLike_notify]({ from: 0, to: 180 * items.length });
  }, [spring, state]);

  const isAnimationRunning =
    useEventSource(spring?.[AnimationLike_isRunning]) ?? false;

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginBottom: 80,
      }}
      onClick={() => {
        !isAnimationRunning && updateState(x => !x);
      }}
    >
      {items.map((x, i) => (
        <AnimatedBox
          key={x}
          label={x}
          animation={spring}
          index={i}
          direction={state}
        />
      ))}
    </div>
  );
};
