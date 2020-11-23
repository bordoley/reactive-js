<script>
  import {
    pipe,
    returns,
    increment,
    compose,
  } from "@reactive-js/core/functions";
  import { generate, throttle } from "@reactive-js/core/observable";
  import { fromObservable } from "@reactive-js/core/flowable";
  import {
    createHostScheduler,
    toPriorityScheduler,
    toSchedulerWithPriority,
  } from "@reactive-js/core/scheduler";
  import { writable } from "svelte/store";
  import { stream } from "@reactive-js/core/svelte";

  const priorityScheduler = pipe(
    createHostScheduler({ yieldInterval: 15 }),
    toPriorityScheduler,
  );

  const scheduler = pipe(
    priorityScheduler,
    toSchedulerWithPriority(1),
  );

  const scheduler2 = pipe(
    priorityScheduler,
    toSchedulerWithPriority(2),
  );

  const [value, setMode] = pipe(
    generate(increment, returns(0)),
    fromObservable({ scheduler: scheduler2 }),
    stream(scheduler),
  );

  let mode = 2;
  let label = "RESUME";

  const onClick = () => {
    mode = mode === 1 ? 2 : 1;
    label = mode === 2 ? "RESUME" : "PAUSE";
    setMode(mode);
  };
</script>

<main>
  <h1>{$value || 0}</h1>

  <button on:click={onClick}>{label}</button>
</main>
