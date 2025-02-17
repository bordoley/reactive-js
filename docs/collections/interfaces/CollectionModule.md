[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [collections](../README.md) / CollectionModule

# Interface: CollectionModule\<C\>

## Extended by

- [`ReadonlyArrayModule`](../ReadonlyArray/interfaces/ReadonlyArrayModule.md)
- [`DictionaryCollectionModule`](DictionaryCollectionModule.md)

## Type Parameters

• **C** *extends* [`Collection`](Collection.md)

## Methods

### empty()

> **empty**\<`T`, `TKey`\>(): [`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>

Return an Collection that emits no items.

#### Type Parameters

• **T**

• **TKey** *extends* `object` = [`KeyOf`](../type-aliases/KeyOf.md)\<`C`\>

#### Returns

[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>

***

### entries()

> **entries**\<`T`, `TKey`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, `Iterable`\<[`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TKey`, `T`\>, `any`, `any`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `object` = [`KeyOf`](../type-aliases/KeyOf.md)\<`C`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, `Iterable`\<[`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TKey`, `T`\>, `any`, `any`\>\>

***

### forEach()

> **forEach**\<`T`, `TKey`\>(`selector`): [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `object` = [`KeyOf`](../type-aliases/KeyOf.md)\<`C`\>

#### Parameters

##### selector

[`SideEffect2`](../../functions/type-aliases/SideEffect2.md)\<`T`, `TKey`\>

#### Returns

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>\>

***

### keep()

> **keep**\<`T`, `TKey`\>(`predicate`): [`CollectionOperator`](../type-aliases/CollectionOperator.md)\<`C`, `T`, `T`, `TKey`\>

#### Type Parameters

• **T**

• **TKey** *extends* `object` = [`KeyOf`](../type-aliases/KeyOf.md)\<`C`\>

#### Parameters

##### predicate

[`Function2`](../../functions/type-aliases/Function2.md)\<`T`, `TKey`, `boolean`\>

#### Returns

[`CollectionOperator`](../type-aliases/CollectionOperator.md)\<`C`, `T`, `T`, `TKey`\>

***

### keys()

> **keys**\<`TKey`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `unknown`, `TKey`\>, `Iterable`\<`TKey`, `any`, `any`\>\>

#### Type Parameters

• **TKey** *extends* `object`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `unknown`, `TKey`\>, `Iterable`\<`TKey`, `any`, `any`\>\>

***

### map()

> **map**\<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](../type-aliases/CollectionOperator.md)\<`C`, `TA`, `TB`, `TKey`\>

Returns a CollectionOperator that applies the `selector` function to each
value emitted by the source.

#### Type Parameters

• **TA**

• **TB**

• **TKey** *extends* `object` = [`KeyOf`](../type-aliases/KeyOf.md)\<`C`\>

#### Parameters

##### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`TA`, `TKey`, `TB`\>

A pure map function that is applied each value emitted by the source

#### Returns

[`CollectionOperator`](../type-aliases/CollectionOperator.md)\<`C`, `TA`, `TB`, `TKey`\>

#### Typeparam

TA - The inner type of the source container

#### Typeparam

TB - The inner type of the mapped container

***

### reduce()

> **reduce**\<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

• **TKey** *extends* `object` = [`KeyOf`](../type-aliases/KeyOf.md)\<`C`\>

#### Parameters

##### reducer

[`Function3`](../../functions/type-aliases/Function3.md)\<`TAcc`, `T`, `TKey`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, `TAcc`\>

***

### toDictionary()

> **toDictionary**\<`T`, `TKey`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, [`DictionaryLike`](DictionaryLike.md)\<`TKey`, `T`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `object`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, [`DictionaryLike`](DictionaryLike.md)\<`TKey`, `T`\>\>

***

### toReadonlyMap()

> **toReadonlyMap**\<`T`, `TKey`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, `ReadonlyMap`\<`TKey`, `T`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `object`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, `ReadonlyMap`\<`TKey`, `T`\>\>

***

### values()

> **values**\<`T`, `TKey`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, `Iterable`\<`T`, `any`, `any`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `object` = [`KeyOf`](../type-aliases/KeyOf.md)\<`C`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`CollectionOf`](../type-aliases/CollectionOf.md)\<`C`, `T`, `TKey`\>, `Iterable`\<`T`, `any`, `any`\>\>
