[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / AsyncEnumeratorLike

# Interface: AsyncEnumeratorLike\<T\>

## Extends

- [`DisposableLike`](DisposableLike.md)

## Extended by

- [`ConsumableEnumeratorLike`](ConsumableEnumeratorLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[AsyncEnumeratorLike\_current\]

> `readonly` **\[AsyncEnumeratorLike\_current\]**: `T`

***

### \[AsyncEnumeratorLike\_hasCurrent\]

> `readonly` **\[AsyncEnumeratorLike\_hasCurrent\]**: `boolean`

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`DisposableLike`](DisposableLike.md).[`[DisposableLike_error]`](DisposableLike.md#disposablelike_error)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`DisposableLike`](DisposableLike.md).[`[DisposableLike_isDisposed]`](DisposableLike.md#disposablelike_isdisposed)

## Methods

### \[AsyncEnumeratorLike\_moveNext\]()

> **\[AsyncEnumeratorLike\_moveNext\]**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

***

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

[`DisposableLike`](DisposableLike.md).[`[dispose]`](DisposableLike.md#dispose)
