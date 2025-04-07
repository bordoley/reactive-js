[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / CollectionEnumeratorLike

# Interface: CollectionEnumeratorLike\<T\>

## Extends

- [`SyncEnumeratorLike`](SyncEnumeratorLike.md)\<`T`\>

## Extended by

- [`QueueLike`](QueueLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[CollectionEnumeratorLike\_count\]

> `readonly` **\[CollectionEnumeratorLike\_count\]**: `number`

***

### \[CollectionEnumeratorLike\_peek\]

> `readonly` **\[CollectionEnumeratorLike\_peek\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`SyncEnumeratorLike`](SyncEnumeratorLike.md).[`[DisposableLike_error]`](SyncEnumeratorLike.md#disposablelike_error)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`SyncEnumeratorLike`](SyncEnumeratorLike.md).[`[DisposableLike_isDisposed]`](SyncEnumeratorLike.md#disposablelike_isdisposed)

***

### \[EnumeratorLike\_current\]

> `readonly` **\[EnumeratorLike\_current\]**: `T`

#### Inherited from

[`SyncEnumeratorLike`](SyncEnumeratorLike.md).[`[EnumeratorLike_current]`](SyncEnumeratorLike.md#enumeratorlike_current)

***

### \[EnumeratorLike\_hasCurrent\]

> `readonly` **\[EnumeratorLike\_hasCurrent\]**: `boolean`

#### Inherited from

[`SyncEnumeratorLike`](SyncEnumeratorLike.md).[`[EnumeratorLike_hasCurrent]`](SyncEnumeratorLike.md#enumeratorlike_hascurrent)

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

[`SyncEnumeratorLike`](SyncEnumeratorLike.md).[`[dispose]`](SyncEnumeratorLike.md#dispose)

***

### \[SyncEnumeratorLike\_moveNext\]()

> **\[SyncEnumeratorLike\_moveNext\]**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`SyncEnumeratorLike`](SyncEnumeratorLike.md).[`[SyncEnumeratorLike_moveNext]`](SyncEnumeratorLike.md#syncenumeratorlike_movenext)
