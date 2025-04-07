[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousObservableWithSideEffectsLike

# Interface: SynchronousObservableWithSideEffectsLike\<T\>

## Extends

- [`SynchronousObservableLike`](SynchronousObservableLike.md)\<`T`\>.[`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md).[`[ComputationLike_isDeferred]`](ObservableWithSideEffectsLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false`

#### Overrides

[`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md).[`[ComputationLike_isPure]`](ObservableWithSideEffectsLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Overrides

[`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md).[`[ComputationLike_isSynchronous]`](ObservableWithSideEffectsLike.md#computationlike_issynchronous)

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(`options`?): `AsyncIterator`\<`T`\>

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

#### Returns

`AsyncIterator`\<`T`\>

#### Inherited from

[`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md).[`[asyncIterator]`](ObservableWithSideEffectsLike.md#asynciterator)

***

### \[EventSourceLike\_subscribe\]()

> **\[EventSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`ObserverLike`](../../utils/interfaces/ObserverLike.md)

#### Returns

`void`

#### Inherited from

[`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md).[`[EventSourceLike_subscribe]`](ObservableWithSideEffectsLike.md#eventsourcelike_subscribe)
