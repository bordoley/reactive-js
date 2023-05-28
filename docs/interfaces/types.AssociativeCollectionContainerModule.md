[Reactive-JS](../README.md) / [types](../modules/types.md) / AssociativeCollectionContainerModule

# Interface: AssociativeCollectionContainerModule<C\>

[types](../modules/types.md).AssociativeCollectionContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`CollectionContainerModule`](types.CollectionContainerModule.md)<`C`\>

- [`ConcreteContainerModule`](types.ConcreteContainerModule.md)<`C`\>

  ↳ **`AssociativeCollectionContainerModule`**

  ↳↳ [`DictionaryModule`](Dictionary.DictionaryModule.md)

  ↳↳ [`ReadonlyMapModule`](ReadonlyMap.ReadonlyMapModule.md)

  ↳↳ [`ReadonlyObjectMapModule`](ReadonlyObjectMap.ReadonlyObjectMapModule.md)

## Table of contents

### Constructor Methods

- [empty](types.AssociativeCollectionContainerModule.md#empty)
- [fromDictionary](types.AssociativeCollectionContainerModule.md#fromdictionary)
- [fromEntries](types.AssociativeCollectionContainerModule.md#fromentries)
- [fromReadonlyMap](types.AssociativeCollectionContainerModule.md#fromreadonlymap)
- [fromReadonlyObjectMap](types.AssociativeCollectionContainerModule.md#fromreadonlyobjectmap)

### Operator Methods

- [forEach](types.AssociativeCollectionContainerModule.md#foreach)
- [forEachWithKey](types.AssociativeCollectionContainerModule.md#foreachwithkey)
- [keep](types.AssociativeCollectionContainerModule.md#keep)
- [keepType](types.AssociativeCollectionContainerModule.md#keeptype)
- [keepWithKey](types.AssociativeCollectionContainerModule.md#keepwithkey)
- [map](types.AssociativeCollectionContainerModule.md#map)
- [mapWithKey](types.AssociativeCollectionContainerModule.md#mapwithkey)

### Transform Methods

- [entries](types.AssociativeCollectionContainerModule.md#entries)
- [keySet](types.AssociativeCollectionContainerModule.md#keyset)
- [keys](types.AssociativeCollectionContainerModule.md#keys)
- [reduce](types.AssociativeCollectionContainerModule.md#reduce)
- [reduceWithKey](types.AssociativeCollectionContainerModule.md#reducewithkey)
- [toDictionary](types.AssociativeCollectionContainerModule.md#todictionary)
- [toReadonlyMap](types.AssociativeCollectionContainerModule.md#toreadonlymap)
- [toReadonlyObjectMap](types.AssociativeCollectionContainerModule.md#toreadonlyobjectmap)
- [values](types.AssociativeCollectionContainerModule.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>

#### Inherited from

[ConcreteContainerModule](types.ConcreteContainerModule.md).[empty](types.ConcreteContainerModule.md#empty)

___

### fromDictionary

▸ **fromDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>\>

___

### fromReadonlyMap

▸ **fromReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>\>

___

### fromReadonlyObjectMap

▸ **fromReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>\> : `never`

___

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

#### Inherited from

[CollectionContainerModule](types.CollectionContainerModule.md).[forEach](types.CollectionContainerModule.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

#### Inherited from

[CollectionContainerModule](types.CollectionContainerModule.md).[forEachWithKey](types.CollectionContainerModule.md#foreachwithkey)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

#### Inherited from

[ConcreteContainerModule](types.ConcreteContainerModule.md).[keep](types.ConcreteContainerModule.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

#### Inherited from

[ConcreteContainerModule](types.ConcreteContainerModule.md).[keepType](types.ConcreteContainerModule.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, `TKey`\>

#### Inherited from

[ConcreteContainerModule](types.ConcreteContainerModule.md).[keepWithKey](types.ConcreteContainerModule.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

#### Inherited from

[ConcreteContainerModule](types.ConcreteContainerModule.md).[map](types.ConcreteContainerModule.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

#### Inherited from

[ConcreteContainerModule](types.ConcreteContainerModule.md).[mapWithKey](types.ConcreteContainerModule.md#mapwithkey)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[CollectionContainerModule](types.CollectionContainerModule.md).[entries](types.CollectionContainerModule.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `unknown`, `TKey`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `unknown`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `unknown`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, `TAcc`\>

#### Inherited from

[CollectionContainerModule](types.CollectionContainerModule.md).[reduce](types.CollectionContainerModule.md#reduce)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, `TAcc`\>

#### Inherited from

[CollectionContainerModule](types.CollectionContainerModule.md).[reduceWithKey](types.CollectionContainerModule.md#reducewithkey)

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### toReadonlyObjectMap

▸ **toReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, `TKey`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[CollectionContainerModule](types.CollectionContainerModule.md).[values](types.CollectionContainerModule.md#values)
