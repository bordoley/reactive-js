[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [collections/Collection](../README.md) / keySet

# Function: keySet()

> **keySet**\<`C`\>(`m`): \<`TKey`\>(`collection`) => `ReadonlySet`\<`TKey`\>

## Type Parameters

• **C** *extends* [`CollectionType`](../../interfaces/CollectionType.md)\<`unknown`\>

## Parameters

### m

`Pick`\<[`CollectionModule`](../../interfaces/CollectionModule.md)\<`C`\>, `"keys"`\>

## Returns

`Function`

### Type Parameters

• **TKey** *extends* `object` = [`KeyOf`](../../type-aliases/KeyOf.md)\<`C`\>

### Parameters

#### collection

[`CollectionOf`](../../type-aliases/CollectionOf.md)\<`C`, `unknown`, `TKey`\>

### Returns

`ReadonlySet`\<`TKey`\>
