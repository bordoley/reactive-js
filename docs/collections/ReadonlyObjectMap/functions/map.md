[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [collections/ReadonlyObjectMap](../README.md) / map

# Function: map()

> **map**\<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](../../type-aliases/CollectionOperator.md)\<[`ReadonlyObjectMapCollection`](../interfaces/ReadonlyObjectMapCollection.md)\<`string`\>, `TA`, `TB`, `TKey`\>

Returns a CollectionOperator that applies the `selector` function to each
value emitted by the source.

## Type Parameters

• **TA**

• **TB**

• **TKey** *extends* `string` = `string`

## Parameters

### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TKey`, `TB`\>

A pure map function that is applied each value emitted by the source

## Returns

[`CollectionOperator`](../../type-aliases/CollectionOperator.md)\<[`ReadonlyObjectMapCollection`](../interfaces/ReadonlyObjectMapCollection.md)\<`string`\>, `TA`, `TB`, `TKey`\>

## Typeparam

TA - The inner type of the source container

## Typeparam

TB - The inner type of the mapped container
