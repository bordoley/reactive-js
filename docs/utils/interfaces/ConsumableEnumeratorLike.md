[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / ConsumableEnumeratorLike

# Interface: ConsumableEnumeratorLike\<T\>

## Extends

- [`AsyncEnumeratorLike`](AsyncEnumeratorLike.md)\<`T`\>

## Extended by

- [`FlowControlQueueLike`](FlowControlQueueLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ConsumableEnumeratorLike\_isDataAvailable\]

> `readonly` **\[ConsumableEnumeratorLike\_isDataAvailable\]**: `boolean`

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`AsyncEnumeratorLike`](AsyncEnumeratorLike.md).[`[DisposableLike_error]`](AsyncEnumeratorLike.md#disposablelike_error)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`AsyncEnumeratorLike`](AsyncEnumeratorLike.md).[`[DisposableLike_isDisposed]`](AsyncEnumeratorLike.md#disposablelike_isdisposed)

***

### \[EnumeratorLike\_current\]

> `readonly` **\[EnumeratorLike\_current\]**: `T`

#### Inherited from

[`AsyncEnumeratorLike`](AsyncEnumeratorLike.md).[`[EnumeratorLike_current]`](AsyncEnumeratorLike.md#enumeratorlike_current)

***

### \[EnumeratorLike\_hasCurrent\]

> `readonly` **\[EnumeratorLike\_hasCurrent\]**: `boolean`

#### Inherited from

[`AsyncEnumeratorLike`](AsyncEnumeratorLike.md).[`[EnumeratorLike_hasCurrent]`](AsyncEnumeratorLike.md#enumeratorlike_hascurrent)

## Methods

### \[AsyncEnumeratorLike\_moveNext\]()

> **\[AsyncEnumeratorLike\_moveNext\]**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`AsyncEnumeratorLike`](AsyncEnumeratorLike.md).[`[AsyncEnumeratorLike_moveNext]`](AsyncEnumeratorLike.md#asyncenumeratorlike_movenext)

***

### \[ConsumableEnumeratorLike\_addOnDataAvailableListener\]()

> **\[ConsumableEnumeratorLike\_addOnDataAvailableListener\]**(`callback`): [`DisposableLike`](DisposableLike.md)

#### Parameters

##### callback

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`void`\>

#### Returns

[`DisposableLike`](DisposableLike.md)

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

[`AsyncEnumeratorLike`](AsyncEnumeratorLike.md).[`[dispose]`](AsyncEnumeratorLike.md#dispose)
