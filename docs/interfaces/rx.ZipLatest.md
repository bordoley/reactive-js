[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ZipLatest

# Interface: ZipLatest<C\>

[rx](../modules/rx.md).ZipLatest

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ZipLatest`**

## Table of contents

### Constructor Methods

- [zipLatest](rx.ZipLatest.md#ziplatest)

## Constructor Methods

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`]\>

Returns a container that zips the latest values from
multiple sources.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
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
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TG`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
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
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TG`\> |
| `h` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TH`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
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
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TG`\> |
| `h` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TH`\> |
| `i` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TI`\> |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>
