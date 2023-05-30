[Reactive-JS](../README.md) / Containers

# Module: Containers

## Table of contents

### Interfaces

- [ContainersModule](../interfaces/Containers.ContainersModule.md)

### Type Aliases

- [Signature](Containers.md#signature)

### Functions

- [keepType](Containers.md#keeptype)
- [mapTo](Containers.md#mapto)
- [pick](Containers.md#pick)

## Type Aliases

### Signature

Ƭ **Signature**: [`ContainersModule`](../interfaces/Containers.ContainersModule.md)

## Functions

### keepType

▸ **keepType**<`C`, `TA`, `TB`, `TKey`\>(`m`, `predicate`): [`ContainerOperator`](types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/types.Container.md)<`unknown`, `C`\> |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](../interfaces/types.ContainerModule.md)<`C`\>, ``"keep"``\> |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<`C`, `TA`, `TB`, `TKey`\>

___

### mapTo

▸ **mapTo**<`C`, `T`, `TKey`\>(`m`, `value`): [`ContainerOperator`](types.md#containeroperator)<`C`, `unknown`, `T`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/types.Container.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](../interfaces/types.ContainerModule.md)<`C`\>, ``"map"``\> |
| `value` | `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<`C`, `unknown`, `T`, `TKey`\>

___

### pick

▸ **pick**<`C`, `T`, `TKeyOfT`, `TKey`\>(`m`, `key`): [`ContainerOperator`](types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfT`], `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/types.Container.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TKeyOfT` | extends `string` \| `number` \| `symbol` |
| `TKey` | extends `Object` = [`KeyOf`](types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](../interfaces/types.ContainerModule.md)<`C`\>, ``"map"``\> |
| `key` | `TKeyOfT` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfT`], `TKey`\>

▸ **pick**<`C`, `T`, `TKeyOfTA`, `TKeyOfTB`, `TKey`\>(`m`, `keyA`, `keyB`): [`ContainerOperator`](types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`], `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/types.Container.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |
| `TKey` | extends `Object` = [`KeyOf`](types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](../interfaces/types.ContainerModule.md)<`C`\>, ``"map"``\> |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`], `TKey`\>

▸ **pick**<`C`, `T`, `TKeyOfTA`, `TKeyOfTB`, `TKeyOfTC`, `TKey`\>(`m`, `keyA`, `keyB`, `keyC`): [`ContainerOperator`](types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`], `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/types.Container.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TKeyOfTA` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTB` | extends `string` \| `number` \| `symbol` |
| `TKeyOfTC` | extends `string` \| `number` \| `symbol` |
| `TKey` | extends `Object` = [`KeyOf`](types.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Pick`<[`ContainerModule`](../interfaces/types.ContainerModule.md)<`C`\>, ``"map"``\> |
| `keyA` | `TKeyOfTA` |
| `keyB` | `TKeyOfTB` |
| `keyC` | `TKeyOfTC` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<`C`, `T`, `T`[`TKeyOfTA`][`TKeyOfTB`][`TKeyOfTC`], `TKey`\>
