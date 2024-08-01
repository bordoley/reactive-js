[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [collections/ReadonlyArray](../README.md) / ReadonlyArrayModule

# Interface: ReadonlyArrayModule

## Extends

- [`CollectionModule`](../../interfaces/CollectionModule.md)\<[`ReadonlyArrayCollection`](ReadonlyArrayCollection.md)\>

## Methods

### empty()

> **empty**\<`T`, `TKey`\>(): readonly `T`[]

Return an Collection that emits no items.

#### Type Parameters

• **T**

• **TKey** *extends* `number` = `number`

#### Returns

readonly `T`[]

#### Inherited from

[`CollectionModule`](../../interfaces/CollectionModule.md).[`empty`](../../interfaces/CollectionModule.md#empty)

***

### entries()

> **entries**\<`T`, `TKey`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TKey`, `T`\>\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `number` = `number`

#### Parameters

• **options?**

• **options.count?**: `number`

• **options.start?**: `number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TKey`, `T`\>\>\>

#### Overrides

[`CollectionModule`](../../interfaces/CollectionModule.md).[`entries`](../../interfaces/CollectionModule.md#entries)

***

### forEach()

> **forEach**\<`T`, `TKey`\>(`selector`): [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<readonly `T`[]\>

#### Type Parameters

• **T**

• **TKey** *extends* `number` = `number`

#### Parameters

• **selector**: [`SideEffect2`](../../../functions/type-aliases/SideEffect2.md)\<`T`, `TKey`\>

#### Returns

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<readonly `T`[]\>

#### Inherited from

[`CollectionModule`](../../interfaces/CollectionModule.md).[`forEach`](../../interfaces/CollectionModule.md#foreach)

***

### keep()

> **keep**\<`T`, `TKey`\>(`predicate`): [`CollectionOperator`](../../type-aliases/CollectionOperator.md)\<[`ReadonlyArrayCollection`](ReadonlyArrayCollection.md), `T`, `T`, `TKey`\>

#### Type Parameters

• **T**

• **TKey** *extends* `number` = `number`

#### Parameters

• **predicate**: [`Function2`](../../../functions/type-aliases/Function2.md)\<`T`, `TKey`, `boolean`\>

#### Returns

[`CollectionOperator`](../../type-aliases/CollectionOperator.md)\<[`ReadonlyArrayCollection`](ReadonlyArrayCollection.md), `T`, `T`, `TKey`\>

#### Inherited from

[`CollectionModule`](../../interfaces/CollectionModule.md).[`keep`](../../interfaces/CollectionModule.md#keep)

***

### keys()

> **keys**\<`TKey`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `unknown`[], [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TKey`\>\>

#### Type Parameters

• **TKey** *extends* `number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `unknown`[], [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TKey`\>\>

#### Inherited from

[`CollectionModule`](../../interfaces/CollectionModule.md).[`keys`](../../interfaces/CollectionModule.md#keys)

***

### map()

> **map**\<`TA`, `TB`, `TKey`\>(`selector`): [`CollectionOperator`](../../type-aliases/CollectionOperator.md)\<[`ReadonlyArrayCollection`](ReadonlyArrayCollection.md), `TA`, `TB`, `TKey`\>

Returns a CollectionOperator that applies the `selector` function to each
value emitted by the source.

#### Type Parameters

• **TA**

• **TB**

• **TKey** *extends* `number` = `number`

#### Parameters

• **selector**: [`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TKey`, `TB`\>

A pure map function that is applied each value emitted by the source

#### Returns

[`CollectionOperator`](../../type-aliases/CollectionOperator.md)\<[`ReadonlyArrayCollection`](ReadonlyArrayCollection.md), `TA`, `TB`, `TKey`\>

#### Typeparam

TA - The inner type of the source container

#### Typeparam

TB - The inner type of the mapped container

#### Inherited from

[`CollectionModule`](../../interfaces/CollectionModule.md).[`map`](../../interfaces/CollectionModule.md#map)

***

### reduce()

> **reduce**\<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

• **TKey** *extends* `number` = `number`

#### Parameters

• **reducer**: [`Function3`](../../../functions/type-aliases/Function3.md)\<`TAcc`, `T`, `TKey`, `TAcc`\>

• **initialValue**: [`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `TAcc`\>

#### Inherited from

[`CollectionModule`](../../interfaces/CollectionModule.md).[`reduce`](../../interfaces/CollectionModule.md#reduce)

***

### slice()

> **slice**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

• **options?**

• **options.count?**: `number`

• **options.start?**: `number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], readonly `T`[]\>

***

### toDictionary()

> **toDictionary**\<`T`, `TKey`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`DictionaryLike`](../../interfaces/DictionaryLike.md)\<`TKey`, `T`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`DictionaryLike`](../../interfaces/DictionaryLike.md)\<`TKey`, `T`\>\>

#### Inherited from

[`CollectionModule`](../../interfaces/CollectionModule.md).[`toDictionary`](../../interfaces/CollectionModule.md#todictionary)

***

### toReadonlyMap()

> **toReadonlyMap**\<`T`, `TKey`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `ReadonlyMap`\<`TKey`, `T`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], `ReadonlyMap`\<`TKey`, `T`\>\>

#### Inherited from

[`CollectionModule`](../../interfaces/CollectionModule.md).[`toReadonlyMap`](../../interfaces/CollectionModule.md#toreadonlymap)

***

### values()

> **values**\<`T`, `TKey`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

• **TKey** *extends* `number` = `number`

#### Parameters

• **options?**

• **options.count?**: `number`

• **options.start?**: `number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

#### Overrides

[`CollectionModule`](../../interfaces/CollectionModule.md).[`values`](../../interfaces/CollectionModule.md#values)
