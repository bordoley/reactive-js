[Reactive-JS](../README.md) / [types](../modules/types.md) / ConcreteContainerModule

# Interface: ConcreteContainerModule<C\>

[types](../modules/types.md).ConcreteContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`ContainerModule`](types.ContainerModule.md)<`C`\>

  ↳ **`ConcreteContainerModule`**

  ↳↳ [`ConcreteIndexedContainerModule`](types.ConcreteIndexedContainerModule.md)

  ↳↳ [`CollectionContainerModule`](types.CollectionContainerModule.md)

  ↳↳ [`AssociativeCollectionContainerModule`](types.AssociativeCollectionContainerModule.md)

## Table of contents

### Constructor Methods

- [empty](types.ConcreteContainerModule.md#empty)

### Operator Methods

- [keep](types.ConcreteContainerModule.md#keep)
- [keepType](types.ConcreteContainerModule.md#keeptype)
- [keepWithKey](types.ConcreteContainerModule.md#keepwithkey)
- [map](types.ConcreteContainerModule.md#map)
- [mapWithKey](types.ConcreteContainerModule.md#mapwithkey)

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

___

## Operator Methods

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

[ContainerModule](types.ContainerModule.md).[keep](types.ContainerModule.md#keep)

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

[ContainerModule](types.ContainerModule.md).[keepType](types.ContainerModule.md#keeptype)

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

[ContainerModule](types.ContainerModule.md).[keepWithKey](types.ContainerModule.md#keepwithkey)

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

[ContainerModule](types.ContainerModule.md).[map](types.ContainerModule.md#map)

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

[ContainerModule](types.ContainerModule.md).[mapWithKey](types.ContainerModule.md#mapwithkey)
