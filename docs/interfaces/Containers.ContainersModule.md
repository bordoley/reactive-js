[Reactive-JS](../README.md) / [Containers](../modules/Containers.md) / ContainersModule

# Interface: ContainersModule

[Containers](../modules/Containers.md).ContainersModule

## Table of contents

### Methods

- [keepType](Containers.ContainersModule.md#keeptype)
- [mapTo](Containers.ContainersModule.md#mapto)
- [pick](Containers.ContainersModule.md#pick)

## Methods

### keepType

▸ **keepType**<`C`, `TA`, `TB`, `TKey`\>(`m`, `predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md)<`unknown`, `C`\> |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](types.ContainerModule.md)<`C`\>, ``"keep"``\> |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

___

### mapTo

▸ **mapTo**<`C`, `T`, `TKey`\>(`m`, `value`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `unknown`, `T`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](types.ContainerModule.md)<`C`\>, ``"map"``\> |
| `value` | `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `unknown`, `T`, `TKey`\>

___

### pick

▸ **pick**<`C`, `T`, `TKeyOfT`, `TKey`\>(`m`, `key`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfT`], `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TKeyOfT` | extends `string` \| `number` \| `symbol` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](types.ContainerModule.md)<`C`\>, ``"map"``\> |
| `key` | `TKeyOfT` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfT`], `TKey`\>

▸ **pick**<`C`, `T`, `TKeyOfTA`, `TKeyOfTB`, `TKey`\>(`m`, `keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`], `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](types.ContainerModule.md)<`C`\>, ``"map"``\> |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`], `TKey`\>

▸ **pick**<`C`, `T`, `TKeyOfTA`, `TKeyOfTB`, `TKeyOfTC`, `TKey`\>(`m`, `keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`], `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTC` | extends `string` \| `number` \| `symbol` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](types.ContainerModule.md)<`C`\>, ``"map"``\> |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |
| `keyC` | `TKeyOfTC` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`], `TKey`\>
