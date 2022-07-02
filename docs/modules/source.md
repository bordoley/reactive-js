[Reactive-JS](../README.md) / source

# Module: source

## Table of contents

### Classes

- [AbstractSource](../classes/source.AbstractSource.md)
- [AbtractDisposableSource](../classes/source.AbtractDisposableSource.md)

### Interfaces

- [SinkLike](../interfaces/source.SinkLike.md)
- [SourceLike](../interfaces/source.SourceLike.md)

### Functions

- [assertState](source.md#assertstate)
- [notify](source.md#notify)
- [notifySink](source.md#notifysink)
- [sinkInto](source.md#sinkinto)
- [sourceFrom](source.md#sourcefrom)

## Functions

### assertState

▸ **assertState**<`C`\>(`sink`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `unknown`\> |

#### Returns

`void`

___

### notify

▸ **notify**<`C`, `T`, `TSink`\>(`v`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>

___

### notifySink

▸ **notifySink**<`C`, `T`, `TSink`\>(`sink`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>

___

### sinkInto

▸ **sinkInto**<`C`, `T`, `TSink`\>(`sink`): [`Function1`](functions.md#function1)<`C`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`Function1`](functions.md#function1)<`C`, `C`\>

___

### sourceFrom

▸ **sourceFrom**<`C`, `T`, `TSink`\>(`source`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>
