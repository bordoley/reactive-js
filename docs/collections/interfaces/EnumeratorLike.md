[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [collections](../README.md) / EnumeratorLike

# Interface: EnumeratorLike\<T\>

An interactive mutable enumerator that can be used to iterate
over an underlying source of data.

## Type Parameters

• **T** = `unknown`

## Properties

### \[EnumeratorLike\_current\]

> `readonly` **\[EnumeratorLike\_current\]**: `T`

Returns the element if present.

***

### \[EnumeratorLike\_hasCurrent\]

> `readonly` **\[EnumeratorLike\_hasCurrent\]**: `boolean`

Indicates if the `EnumeratorLike` has a current value.

***

### \[EnumeratorLike\_isCompleted\]

> `readonly` **\[EnumeratorLike\_isCompleted\]**: `boolean`

Indicates if the `EnumeratorLike` is completed.

## Methods

### \[EnumeratorLike\_move\]()

> **\[EnumeratorLike\_move\]**(): `boolean`

Advances the enumerator to the next value, if present.

#### Returns

`boolean`

true if successful, otherwise false.
