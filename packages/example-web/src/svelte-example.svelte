<script>
import * as Scheduler from "@reactive-js/core/Scheduler";
import * as Observable from "@reactive-js/core/Observable";
import * as Runnable from "@reactive-js/core/Runnable";
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
} from "@reactive-js/core/types";
import * as Store from "@reactive-js/core/Store";
  const scheduler = Scheduler.createHostScheduler();

  const counter = pipe(
    Observable.generate(increment, returns(-1), { delay: 500 }),
    Runnable.flow(scheduler),
  );

  const pause = bindMethod(counter, PauseableLike_pause);
  const resume = bindMethod(counter, PauseableLike_resume);

  const isPaused = pipe(
    counter[PauseableLike_isPaused],
    // FIXME: Maybe we should add a function to avoid the need for scheduling?
    Store.toObservable(),
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