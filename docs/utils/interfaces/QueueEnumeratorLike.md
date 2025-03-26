[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / QueueEnumeratorLike

# Interface: QueueEnumeratorLike\<T\>

## Extends

- [`CollectionEnumeratorLike`](CollectionEnumeratorLike.md)\<`T`\>

## Extended by

- [`QueueLike`](QueueLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[CollectionEnumeratorLike\_count\]

> `readonly` **\[CollectionEnumeratorLike\_count\]**: `number`

#### Inherited from

[`CollectionEnumeratorLike`](CollectionEnumeratorLike.md).[`[CollectionEnumeratorLike_count]`](CollectionEnumeratorLike.md#collectionenumeratorlike_count)

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

### \[QueueEnumeratorLike\_addOnDataReadyListener\]()

> **\[QueueEnumeratorLike\_addOnDataReadyListener\]**(`callback`): [`DisposableLike`](DisposableLike.md)

#### Parameters

##### callback

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`void`\>

#### Returns

[`DisposableLike`](DisposableLike.md)
