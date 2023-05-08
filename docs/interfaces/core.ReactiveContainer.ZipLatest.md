[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / ZipLatest

# Interface: ZipLatest<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).ZipLatest

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Constructor Methods

- [zipLatest](core.ReactiveContainer.ZipLatest.md#ziplatest)

## Constructor Methods

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Container.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Container.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Container.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/core.Container.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>
