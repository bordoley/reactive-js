[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [functions](../README.md) / invoke

# Function: invoke()

> **invoke**\<`T`, `TKey`\>(`method`, ...`args`): [`Function1`](../type-aliases/Function1.md)\<`T`, `ReturnType`\<`T`\[`TKey`\]\>\>

Enables invoking a method on an object as a unary function within
a pipeline operation.

## Type Parameters

• **T** *extends* `Record`\<`TKey`, (...`args`) => `any`\>

• **TKey** *extends* `string` \| `number` \| `symbol`

## Parameters

### method

`TKey`

### args

...`Parameters`\<`T`\[`TKey`\]\>

## Returns

[`Function1`](../type-aliases/Function1.md)\<`T`, `ReturnType`\<`T`\[`TKey`\]\>\>
