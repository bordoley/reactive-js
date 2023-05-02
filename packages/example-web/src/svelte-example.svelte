<script>
import * as Scheduler from "@reactive-js/core/util/Scheduler";
import * as Runnable from "@reactive-js/core/rx/Runnable";
import { subscribe } from "@reactive-js/core/integrations/svelte";
import {
  bindMethod,
  increment,
  pipe,
  returns,
} from "@reactive-js/core/functions";
import {
  PauseableLike_isPaused,
  PauseableLike_pause, 
  PauseableLike_resume
} from "@reactive-js/core/util";
import * as EventSource from "@reactive-js/core/util/EventSource";

  const scheduler = Scheduler.createHostScheduler();

  const counter = pipe(
    Runnable.generate(increment, returns(-1), { delay: 500 }),
    Runnable.flow(scheduler),
  );

  const pause = bindMethod(counter, PauseableLike_pause);
  const resume = bindMethod(counter, PauseableLike_resume);

  const isPaused = pipe(
    counter,
    EventSource.keep(ev => ev.type === "paused" || ev.type === "resumed"),
    EventSource.map(ev => ev.type === "paused"),
    EventSource.toObservable(),
    subscribe(scheduler),
  );

  const counterValue = pipe(
     counter,
     subscribe(scheduler),
  );
</script>

<main>
	<h1>{$counterValue ?? 0}</h1>
   <button 
     on:click={
      ($isPaused ?? counter[PauseableLike_isPaused]) ? resume : pause
    }>{
      ($isPaused ?? counter[PauseableLike_isPaused]) ? "Resume" : "Pause"
    }</button>
</main>