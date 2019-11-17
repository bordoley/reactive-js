# @reactive-js/rx-observables

## Usage

## API

### Static Functions

*`concat<T>(head: ObservableLike<T>,...tail: Array<ObservableLike<T>>): ObservableLike<T>`*

*`empty<T>(delay?: number, priority?: number): ObservableLike<T>`*

*`fromArray<T>(values: ReadonlyArray<T>, values: ReadonlyArray<T>, delay?: number, priority?: number): ObservableLike<T>`*

*`fromPromiseFactory<T>(factory: () => Promise<T>, delay?: number, priority?: number): ObservableLike<T>`*

*`fromScheduledValues = <T>(value: [number, number, T], ...values: Array<[number, number, T]>): ObservableLike<T> `*

*`generate<T>(generator: (acc: T) => T, initialValue: T, delay?: number, priority?: number): ObservableLike<T>`*

*`merge<T>(head: ObservableLike<T>, ...tail: Array<ObservableLike<T>>): ObservableLike<T>`*

*`never<T>(): ObservableLike<T>`*

*`ofValue<T>(value: T, delay?: number, priority?: number): ObservableLike<T>`*

*`repeat<T>(observable: ObservableLike<T>, predicate?: () => boolean): ObservableLike<T>`*

*`retry<T>(observable: ObservableLike<T>, predicate?: (error: Error) => boolean): ObservableLike<T>`*

*`throws<T>(error: Error, delay?: number, priority?: number): ObservableLike<T>`*

*`use<T>(factory: () => ObservableResourceLike<T>): ObservableLike<T>`*
