[Reactive-JS](../README.md) / [types](../modules/types.md) / CollectionContainerModule

# Interface: CollectionContainerModule<C\>

[types](../modules/types.md).CollectionContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`ConcreteContainerModule`](types.ConcreteContainerModule.md)<`C`\>

  ↳ **`CollectionContainerModule`**

  ↳↳ [`IndexedCollectionContainerModule`](types.IndexedCollectionContainerModule.md)

  ↳↳ [`AssociativeCollectionContainerModule`](types.AssociativeCollectionContainerModule.md)

## Table of contents

### Constructor Methods

- [empty](types.CollectionContainerModule.md#empty)

### Operator Methods

- [forEach](types.CollectionContainerModule.md#foreach)
- [forEachWithKey](types.CollectionContainerModule.md#foreachwithkey)
- [keep](types.CollectionContainerModule.md#keep)
- [keepType](types.CollectionContainerModule.md#keeptype)
- [keepWithKey](types.CollectionContainerModule.md#keepwithkey)
- [map](types.CollectionContainerModule.md#map)
- [mapWithKey](types.CollectionContainerModule.md#mapwithkey)

### Transform Methods

- [entries](types.CollectionContainerModule.md#entries)
- [reduce](types.CollectionContainerModule.md#reduce)
- [reduceWithKey](types.CollectionContainerModule.md#reducewithkey)
- [values](types.CollectionContainerModule.md#values)

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
