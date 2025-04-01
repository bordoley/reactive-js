[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / PureSynchronousObservableLike

# Interface: PureSynchronousObservableLike\<T\>

## Extends

- [`SynchronousObservableLike`](SynchronousObservableLike.md)\<`T`\>.[`PureObservableLike`](PureObservableLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `true`

#### Inherited from

[`PureObservableLike`](PureObservableLike.md).[`[ComputationLike_isDeferred]`](PureObservableLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Overrides

[`PureObservableLike`](PureObservableLike.md).[`[ComputationLike_isPure]`](PureObservableLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Overrides

[`PureObservableLike`](PureObservableLike.md).[`[ComputationLike_isSynchronous]`](PureObservableLike.md#computationlike_issynchronous)

## Methods

### \[EventSourceLike\_subscribe\]()

> **\[EventSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`ObserverLike`](../../utils/interfaces/ObserverLike.md)

#### Returns

`void`

#### Inherited from

[`PureObservableLike`](PureObservableLike.md).[`[EventSourceLike_subscribe]`](PureObservableLike.md#eventsourcelike_subscribe)
