[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [functions](../README.md) / pick

# Function: pick()

Returns a function that can be used to pick deeply nested properties
from an Object.

## pick(key)

> **pick**\<`T`, `TKey`\>(`key`): [`Function1`](../type-aliases/Function1.md)\<`T`, `T`\[`TKey`\]\>

Returns a function that can be used to pick deeply nested properties
from an Object.

### Type Parameters

• **T**

• **TKey** *extends* `string` \| `number` \| `symbol`

### Parameters

• **key**: `TKey`

### Returns

[`Function1`](../type-aliases/Function1.md)\<`T`, `T`\[`TKey`\]\>

## pick(keyA, keyB)

> **pick**\<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Function1`](../type-aliases/Function1.md)\<`T`, `T`\[`TKeyA`\]\[`TKeyB`\]\>

Returns a function that can be used to pick deeply nested properties
from an Object.

### Type Parameters

• **T**

• **TKeyA** *extends* `string` \| `number` \| `symbol`

• **TKeyB** *extends* `string` \| `number` \| `symbol`

### Parameters

• **keyA**: `TKeyA`

• **keyB**: `TKeyB`

### Returns

[`Function1`](../type-aliases/Function1.md)\<`T`, `T`\[`TKeyA`\]\[`TKeyB`\]\>

## pick(keyA, keyB, keyC)

> **pick**\<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Function1`](../type-aliases/Function1.md)\<`T`, `T`\[`TKeyA`\]\[`TKeyB`\]\[`TKeyC`\]\>

Returns a function that can be used to pick deeply nested properties
from an Object.

### Type Parameters

• **T**

• **TKeyA** *extends* `string` \| `number` \| `symbol`

• **TKeyB** *extends* `string` \| `number` \| `symbol`

• **TKeyC** *extends* `string` \| `number` \| `symbol`

### Parameters

• **keyA**: `TKeyA`

• **keyB**: `TKeyB`

• **keyC**: `TKeyC`

### Returns

[`Function1`](../type-aliases/Function1.md)\<`T`, `T`\[`TKeyA`\]\[`TKeyB`\]\[`TKeyC`\]\>

## pick(keyA, keyB, keyC, keyD)

> **pick**\<`T`, `TKeyA`, `TKeyB`, `TKeyC`, `TKeyD`\>(`keyA`, `keyB`, `keyC`, `keyD`): [`Function1`](../type-aliases/Function1.md)\<`T`, `T`\[`TKeyA`\]\[`TKeyB`\]\[`TKeyC`\]\[`TKeyD`\]\>

Returns a function that can be used to pick deeply nested properties
from an Object.

### Type Parameters

• **T**

• **TKeyA** *extends* `string` \| `number` \| `symbol`

• **TKeyB** *extends* `string` \| `number` \| `symbol`

• **TKeyC** *extends* `string` \| `number` \| `symbol`

• **TKeyD** *extends* `string` \| `number` \| `symbol`

### Parameters

• **keyA**: `TKeyA`

• **keyB**: `TKeyB`

• **keyC**: `TKeyC`

• **keyD**: `TKeyD`

### Returns

[`Function1`](../type-aliases/Function1.md)\<`T`, `T`\[`TKeyA`\]\[`TKeyB`\]\[`TKeyC`\]\[`TKeyD`\]\>
