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

### Properties

- [ContainerLike\_type](rx.ZipLatest.md#containerlike_type)
- [zipLatest](rx.ZipLatest.md#ziplatest)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

___

### zipLatest

• **zipLatest**: <TA, TB\>(`a`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>) => [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`]\><TA, TB, TC\>(`a`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\>) => [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\><TA, TB, TC, TD\>(`a`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\>) => [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\><TA, TB, TC, TD, TE\>(`a`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\>) => [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\><TA, TB, TC, TD, TE, TF\>(`a`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\>) => [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\><TA, TB, TC, TD, TE, TF, TG\>(`a`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TG`\>) => [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\><TA, TB, TC, TD, TE, TF, TG, TH\>(`a`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TG`\>, `h`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TH`\>) => [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\><TA, TB, TC, TD, TE, TF, TG, TH, TI\>(`a`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\>, `b`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\>, `c`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\>, `d`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\>, `e`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\>, `f`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\>, `g`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TG`\>, `h`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TH`\>, `i`: [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TI`\>) => [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type declaration

▸ <`TA`, `TB`\>(`a`, `b`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`]\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |

##### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`]\>

▸ <`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |

##### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ <`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |

##### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ <`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\> |

##### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ <`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\> |

##### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ <`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TG`\> |

##### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ <`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

##### Type parameters

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

##### Parameters

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

##### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ <`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

##### Type parameters

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

##### Parameters

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

##### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>
