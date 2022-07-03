[Reactive-JS](../README.md) / source

# Module: source

## Table of contents

### Classes

- [AbtractDisposableSource](../classes/source.AbtractDisposableSource.md)

### Interfaces

- [CreateSource](../interfaces/source.CreateSource.md)
- [SourceLike](../interfaces/source.SourceLike.md)

### Functions

- [sinkInto](source.md#sinkinto)
- [sourceFrom](source.md#sourcefrom)

## Functions

### sinkInto

▸ **sinkInto**<`C`, `T`, `TSink`\>(`sink`): [`Function1`](functions.md#function1)<`C`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/sink.SinkLike.md)<`unknown`, `TSink`\> |

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
| `TSink` | extends [`SinkLike`](../interfaces/sink.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>
