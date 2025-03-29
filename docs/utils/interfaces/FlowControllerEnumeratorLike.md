[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / FlowControllerEnumeratorLike

# Interface: FlowControllerEnumeratorLike\<T\>

## Extends

- [`CollectionEnumeratorLike`](CollectionEnumeratorLike.md)\<`T`\>.`Iterable`\<`T`\>

## Extended by

- [`FlowControllerQueueLike`](FlowControllerQueueLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[CollectionEnumeratorLike\_count\]

> `readonly` **\[CollectionEnumeratorLike\_count\]**: `number`

#### Inherited from

[`CollectionEnumeratorLike`](CollectionEnumeratorLike.md).[`[CollectionEnumeratorLike_count]`](CollectionEnumeratorLike.md#collectionenumeratorlike_count)

***

### \[CollectionEnumeratorLike\_peek\]

> `readonly` **\[CollectionEnumeratorLike\_peek\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

#### Inherited from

[`CollectionEnumeratorLike`](CollectionEnumeratorLike.md).[`[CollectionEnumeratorLike_peek]`](CollectionEnumeratorLike.md#collectionenumeratorlike_peek)

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`CollectionEnumeratorLike`](CollectionEnumeratorLike.md).[`[DisposableLike_error]`](CollectionEnumeratorLike.md#disposablelike_error)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`CollectionEnumeratorLike`](CollectionEnumeratorLike.md).[`[DisposableLike_isDisposed]`](CollectionEnumeratorLike.md#disposablelike_isdisposed)

***

### \[EnumeratorLike\_current\]

> `readonly` **\[EnumeratorLike\_current\]**: `T`

#### Inherited from

[`CollectionEnumeratorLike`](CollectionEnumeratorLike.md).[`[EnumeratorLike_current]`](CollectionEnumeratorLike.md#enumeratorlike_current)

***

### \[EnumeratorLike\_hasCurrent\]

> `readonly` **\[EnumeratorLike\_hasCurrent\]**: `boolean`

#### Inherited from

[`CollectionEnumeratorLike`](CollectionEnumeratorLike.md).[`[EnumeratorLike_hasCurrent]`](CollectionEnumeratorLike.md#enumeratorlike_hascurrent)

***

### \[FlowControllerEnumeratorLike\_isDataAvailable\]

> `readonly` **\[FlowControllerEnumeratorLike\_isDataAvailable\]**: `boolean`

## Methods

### \[dispose\]()

> **\[dispose\]**(`error`?): `void`

Dispose the resource.

#### Parameters

##### error?

`Error`

An optional error that signals the resource is being disposed due to an error.

#### Returns

`void`

#### Inherited from

[`CollectionEnumeratorLike`](CollectionEnumeratorLike.md).[`[dispose]`](CollectionEnumeratorLike.md#dispose)

***

### \[EnumeratorLike\_moveNext\]()

> **\[EnumeratorLike\_moveNext\]**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`CollectionEnumeratorLike`](CollectionEnumeratorLike.md).[`[EnumeratorLike_moveNext]`](CollectionEnumeratorLike.md#enumeratorlike_movenext)

***

### \[FlowControllerEnumeratorLike\_addOnDataAvailableListener\]()

> **\[FlowControllerEnumeratorLike\_addOnDataAvailableListener\]**(`callback`): [`DisposableLike`](DisposableLike.md)

#### Parameters

##### callback

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`void`\>

#### Returns

[`DisposableLike`](DisposableLike.md)
