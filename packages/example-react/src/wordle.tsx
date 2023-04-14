import React, { useEffect, useState } from "react";
import { useAnimation } from "@reactive-js/core/integrations/react";
import { EventSourceLike } from "@reactive-js/core/util";
import { useAnimate } from "@reactive-js/core/integrations/react/web";
import { Property } from "csstype";

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

const clamp = (min: number, v: number, max: number): number =>
  v > max ? max : v < min ? min : v;

const calcXRotation = (state: boolean, value: number, i: number) => {
  const clamped = clamp(0, value / (i + 1), 180);
  return state ? clamped : 180 - clamped;
};

const AnimatedBox = ({
  label,
  animation,
  index,
}: {
  label: string;
  animation: EventSourceLike<{ event: boolean; value: number }>;
  index: number;
}) => {
  const frontBox = useAnimate<HTMLDivElement, number, boolean>(
    animation,
    ({ event, value }) => ({
      transform: `perspective(600px) rotateX(${
        180 - calcXRotation(event, value, index)
      }deg)`,
    }),
    [index],
  );

  const backBox = useAnimate<HTMLDivElement, number, boolean>(
    animation,
    ({ event, value }) => ({
      transform: `perspective(600px) rotateX(${calcXRotation(
        event,
        value,
        index,
      )}deg)`,
    }),
    [index],
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

  const [animation, dispatch, isAnimationRunning] = useAnimation<
    number,
    boolean
  >(
    () => ({
      type: "spring",
      stiffness: 0.0005,
      damping: 0.0026,
      precision: 0.1,
      from: 0,
      to: 180 * items.length,
    }),
    [],
    { mode: "blocking" },
  );

  useEffect(() => {
    dispatch(state);
  }, [state]);

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginBottom: 80,
      }}
      onClick={() => {
        if (!isAnimationRunning) {
          updateState(x => !x);
        }
      }}
    >
      {items.map((x, i) => (
        <AnimatedBox key={x} label={x} animation={animation} index={i} />
      ))}
    </div>
  );
};
