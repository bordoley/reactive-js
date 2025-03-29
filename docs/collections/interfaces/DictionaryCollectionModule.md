[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [collections](../README.md) / DictionaryCollectionModule

# Interface: DictionaryCollectionModule\<C\>

## Extends

- [`CollectionModule`](CollectionModule.md)\<`C`\>

## Type Parameters

• **C** *extends* [`CollectionType`](CollectionType.md)

## Methods

### fromEntries()

> **fromEntries**\<`T`, `TKey`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`Iterable`\<[`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TKey`, `T`\>, `any`, `any`\>, [`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `object`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`Iterable`\<[`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TKey`, `T`\>, `any`, `any`\>, [`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>\>

***

### union()

> **union**\<`TKey`, `T`\>(`m2`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, [`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>\>

#### Type Parameters

• **TKey** *extends* `string` \| `symbol`

• **T**

#### Parameters

##### m2

[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, [`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>\>
