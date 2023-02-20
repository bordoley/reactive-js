[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ForkZip

# Interface: ForkZip<C\>

[containers](../modules/containers.md).ForkZip

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ForkZip`**

## Table of contents

### Operator Methods

- [forkZip](containers.ForkZip.md#forkzip)

## Operator Methods

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TC`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TD`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TE`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TE`\> |
| `f` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TF`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TE`\> |
| `f` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TF`\> |
| `g` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TG`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TE`\> |
| `f` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TF`\> |
| `g` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TG`\> |
| `h` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TH`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TE`\> |
| `f` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TF`\> |
| `g` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TG`\> |
| `h` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TH`\> |
| `i` | [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TI`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>
