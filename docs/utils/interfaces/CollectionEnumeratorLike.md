[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / CollectionEnumeratorLike

# Interface: CollectionEnumeratorLike\<T\>

## Extends

- [`EnumeratorLike`](EnumeratorLike.md)\<`T`\>.`Iterable`\<`T`\>

## Extended by

- [`QueueEnumeratorLike`](QueueEnumeratorLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[CollectionEnumeratorLike\_count\]

> `readonly` **\[CollectionEnumeratorLike\_count\]**: `number`

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`EnumeratorLike`](EnumeratorLike.md).[`[DisposableLike_error]`](EnumeratorLike.md#disposablelike_error)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`EnumeratorLike`](EnumeratorLike.md).[`[DisposableLike_isDisposed]`](EnumeratorLike.md#disposablelike_isdisposed)

***

### \[EnumeratorLike\_current\]

> `readonly` **\[EnumeratorLike\_current\]**: `T`

#### Inherited from

[`EnumeratorLike`](EnumeratorLike.md).[`[EnumeratorLike_current]`](EnumeratorLike.md#enumeratorlike_current)

***

### \[EnumeratorLike\_hasCurrent\]

> `readonly` **\[EnumeratorLike\_hasCurrent\]**: `boolean`

#### Inherited from

[`EnumeratorLike`](EnumeratorLike.md).[`[EnumeratorLike_hasCurrent]`](EnumeratorLike.md#enumeratorlike_hascurrent)

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

[`EnumeratorLike`](EnumeratorLike.md).[`[dispose]`](EnumeratorLike.md#dispose)

***

### \[EnumeratorLike\_moveNext\]()

> **\[EnumeratorLike\_moveNext\]**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`EnumeratorLike`](EnumeratorLike.md).[`[EnumeratorLike_moveNext]`](EnumeratorLike.md#enumeratorlike_movenext)
