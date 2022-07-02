[Reactive-JS](../README.md) / enumerator

# Module: enumerator

## Table of contents

### Classes

- [AbstractDelegatingEnumerator](../classes/enumerator.AbstractDelegatingEnumerator.md)
- [AbstractEnumerator](../classes/enumerator.AbstractEnumerator.md)
- [AbstractPassThroughEnumerator](../classes/enumerator.AbstractPassThroughEnumerator.md)
- [Enumerator](../classes/enumerator.Enumerator.md)

### Functions

- [forEach](enumerator.md#foreach)
- [getCurrent](enumerator.md#getcurrent)
- [hasCurrent](enumerator.md#hascurrent)
- [move](enumerator.md#move)
- [reset](enumerator.md#reset)
- [zip](enumerator.md#zip)

## Functions

### forEach

▸ **forEach**<`T`, `TEnumerator`\>(`f`): [`Function1`](functions.md#function1)<`TEnumerator`, `TEnumerator`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TEnumerator` | extends [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`, `TEnumerator`\> = [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEnumerator`, `TEnumerator`\>

___

### getCurrent

▸ **getCurrent**<`T`\>(`enumerator`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\> |

#### Returns

`T`

___

### hasCurrent

▸ **hasCurrent**<`T`\>(`enumerator`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\> |

#### Returns

`boolean`

___

### move

▸ **move**<`T`\>(`enumerator`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\> |

#### Returns

`boolean`

___

### reset

▸ **reset**<`T`\>(`enumerator`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`AbstractEnumerator`](../classes/enumerator.AbstractEnumerator.md)<`T`\> |

#### Returns

`void`

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TA`\> |
| `b` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TB`\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TA`\> |
| `b` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TB`\> |
| `c` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TC`\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TA`\> |
| `b` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TB`\> |
| `c` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TC`\> |
| `d` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TD`\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TA`\> |
| `b` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TB`\> |
| `c` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TC`\> |
| `d` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TD`\> |
| `e` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TE`\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TA`\> |
| `b` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TB`\> |
| `c` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TC`\> |
| `d` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TD`\> |
| `e` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TE`\> |
| `f` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TF`\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TA`\> |
| `b` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TB`\> |
| `c` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TC`\> |
| `d` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TD`\> |
| `e` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TE`\> |
| `f` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TF`\> |
| `g` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TG`\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TA`\> |
| `b` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TB`\> |
| `c` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TC`\> |
| `d` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TD`\> |
| `e` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TE`\> |
| `f` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TF`\> |
| `g` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TG`\> |
| `h` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TH`\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TA`\> |
| `b` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TB`\> |
| `c` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TC`\> |
| `d` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TD`\> |
| `e` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TE`\> |
| `f` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TF`\> |
| `g` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TG`\> |
| `h` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TH`\> |
| `i` | [`Enumerator`](../classes/enumerator.Enumerator.md)<`TI`\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`T`\>(...`enumerators`): [`Enumerator`](../classes/enumerator.Enumerator.md)<readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...enumerators` | readonly [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\>[] |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<readonly `T`[]\>
