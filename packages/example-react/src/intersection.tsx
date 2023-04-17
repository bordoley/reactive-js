import React, { useState } from "react";
import ReactDOMClient from "react-dom/client";
import { intersectionWith } from "@reactive-js/core/integrations/web";
import {
  Optional,
  incrementBy,
  isTrue,
  none,
  pipeLazy,
  pipeSome,
} from "@reactive-js/core/functions";
import { useEventSource } from "@reactive-js/core/integrations/react";
import * as EventSource from "@reactive-js/core/util/EventSource";

const IntersectionApp = () => {
  const [count, updateCount] = useState(10);
  const [endOfPageRef, setEndOfPage] = useState<Optional<HTMLDivElement>>();

  useEventSource(
    () =>
      pipeSome(
        endOfPageRef,
        intersectionWith(document, { replay: 1 }),
        EventSource.pick("isIntersecting"),
        EventSource.keep(isTrue),
        EventSource.forEach(pipeLazy(incrementBy(10), updateCount)),
        EventSource.ignoreElements(),
      ) ?? EventSource.empty(),
    [endOfPageRef],
  );

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      {Array(count)
        .fill(none)
        .map((_, i) => (
          <div
            key={i}
            style={{
              background: "#FFF",
              border: "1px solid #666",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >{`Item ${i}`}</div>
        ))}
      <div
        ref={setEndOfPage as React.Ref<HTMLDivElement>}
        style={{
          width: "1px",
          height: "1px",
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<IntersectionApp />);
