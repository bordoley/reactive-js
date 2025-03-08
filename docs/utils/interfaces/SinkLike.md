[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / SinkLike

# Interface: SinkLike\<T\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[SinkLike\_isComplete\]

> `readonly` **\[SinkLike\_isComplete\]**: `boolean`

## Methods

### \[SinkLike\_complete\]()

> **\[SinkLike\_complete\]**(): `void`

#### Returns

`void`

***

### \[SinkLike\_next\]()

> **\[SinkLike\_next\]**(`next`): `void`

Notifies the EventListener of the next notification produced by the source.

#### Parameters

##### next

`T`

The next notification value.

#### Returns

`void`
