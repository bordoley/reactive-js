[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ObservableWithSideEffectsLike

# Interface: ObservableWithSideEffectsLike\<T\>

## Extends

- [`ObservableLike`](ObservableLike.md)\<`T`\>

## Extended by

- [`SynchronousObservableWithSideEffectsLike`](SynchronousObservableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `true`

#### Inherited from

[`ObservableLike`](ObservableLike.md).[`[ComputationLike_isDeferred]`](ObservableLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false`

#### Overrides

[`ObservableLike`](ObservableLike.md).[`[ComputationLike_isPure]`](ObservableLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`ObservableLike`](ObservableLike.md).[`[ComputationLike_isSynchronous]`](ObservableLike.md#computationlike_issynchronous)

## Methods

### \[EventSourceLike\_subscribe\]()

> **\[EventSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`ObserverLike`](../../utils/interfaces/ObserverLike.md)

#### Returns

`void`

#### Inherited from

[`ObservableLike`](ObservableLike.md).[`[EventSourceLike_subscribe]`](ObservableLike.md#eventsourcelike_subscribe)
