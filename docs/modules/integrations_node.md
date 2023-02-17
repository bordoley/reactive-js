[Reactive-JS](../README.md) / integrations/node

# Module: integrations/node

## Table of contents

### Functions

- [bindNodeCallback](integrations_node.md#bindnodecallback)
- [brotliCompress](integrations_node.md#brotlicompress)
- [brotliDecompress](integrations_node.md#brotlidecompress)
- [createReadableSource](integrations_node.md#createreadablesource)
- [createWritableSink](integrations_node.md#createwritablesink)
- [deflate](integrations_node.md#deflate)
- [gunzip](integrations_node.md#gunzip)
- [gzip](integrations_node.md#gzip)
- [inflate](integrations_node.md#inflate)
- [readFile](integrations_node.md#readfile)
- [transform](integrations_node.md#transform)

## Functions

### bindNodeCallback

▸ **bindNodeCallback**<`T`\>(`callbackFunc`): [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect1`](functions.md#sideeffect1)<[`SideEffect2`](functions.md#sideeffect2)<`unknown`, `T`\>\> |

#### Returns

[`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**(`callbackFunc`): [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect1`](functions.md#sideeffect1)<[`SideEffect1`](functions.md#sideeffect1)<`unknown`\>\> |

#### Returns

[`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `T`\>(`callbackFunc`): [`Function1`](functions.md#function1)<`A1`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect2`](functions.md#sideeffect2)<`A1`, [`SideEffect2`](functions.md#sideeffect2)<`unknown`, `T`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`A1`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`\>(`callbackFunc`): [`Function1`](functions.md#function1)<`A1`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect2`](functions.md#sideeffect2)<`A1`, [`SideEffect1`](functions.md#sideeffect1)<`unknown`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`A1`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `T`\>(`callbackFunc`): [`Function2`](functions.md#function2)<`A1`, `A2`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |
| `A2` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect3`](functions.md#sideeffect3)<`A1`, `A2`, [`SideEffect2`](functions.md#sideeffect2)<`unknown`, `T`\>\> |

#### Returns

[`Function2`](functions.md#function2)<`A1`, `A2`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`, `A2`\>(`callbackFunc`): [`Function2`](functions.md#function2)<`A1`, `A2`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |
| `A2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect3`](functions.md#sideeffect3)<`A1`, `A2`, [`SideEffect1`](functions.md#sideeffect1)<`unknown`\>\> |

#### Returns

[`Function2`](functions.md#function2)<`A1`, `A2`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `T`\>(`callbackFunc`): [`Function3`](functions.md#function3)<`A1`, `A2`, `A3`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |
| `A2` |
| `A3` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect4`](functions.md#sideeffect4)<`A1`, `A2`, `A3`, [`SideEffect2`](functions.md#sideeffect2)<`unknown`, `T`\>\> |

#### Returns

[`Function3`](functions.md#function3)<`A1`, `A2`, `A3`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`\>(`callbackFunc`): [`Function3`](functions.md#function3)<`A1`, `A2`, `A3`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |
| `A2` |
| `A3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect4`](functions.md#sideeffect4)<`A1`, `A2`, `A3`, [`SideEffect1`](functions.md#sideeffect1)<`unknown`\>\> |

#### Returns

[`Function3`](functions.md#function3)<`A1`, `A2`, `A3`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `A4`, `T`\>(`callbackFunc`): [`Function4`](functions.md#function4)<`A1`, `A2`, `A3`, `A4`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect5`](functions.md#sideeffect5)<`A1`, `A2`, `A3`, `A4`, [`SideEffect2`](functions.md#sideeffect2)<`unknown`, `T`\>\> |

#### Returns

[`Function4`](functions.md#function4)<`A1`, `A2`, `A3`, `A4`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `A4`\>(`callbackFunc`): [`Function4`](functions.md#function4)<`A1`, `A2`, `A3`, `A4`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |
| `A2` |
| `A3` |
| `A4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect5`](functions.md#sideeffect5)<`A1`, `A2`, `A3`, `A4`, [`SideEffect1`](functions.md#sideeffect1)<`unknown`\>\> |

#### Returns

[`Function4`](functions.md#function4)<`A1`, `A2`, `A3`, `A4`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `A4`, `A5`, `T`\>(`callbackFunc`): [`Function5`](functions.md#function5)<`A1`, `A2`, `A3`, `A4`, `A5`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `A5` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect6`](functions.md#sideeffect6)<`A1`, `A2`, `A3`, `A4`, `A5`, [`SideEffect2`](functions.md#sideeffect2)<`unknown`, `T`\>\> |

#### Returns

[`Function5`](functions.md#function5)<`A1`, `A2`, `A3`, `A4`, `A5`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `A4`, `A5`\>(`callbackFunc`): [`Function5`](functions.md#function5)<`A1`, `A2`, `A3`, `A4`, `A5`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |
| `A2` |
| `A3` |
| `A4` |
| `A5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect6`](functions.md#sideeffect6)<`A1`, `A2`, `A3`, `A4`, `A5`, [`SideEffect1`](functions.md#sideeffect1)<`unknown`\>\> |

#### Returns

[`Function5`](functions.md#function5)<`A1`, `A2`, `A3`, `A4`, `A5`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

___

### brotliCompress

▸ **brotliCompress**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `BrotliOptions` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

___

### brotliDecompress

▸ **brotliDecompress**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `BrotliOptions` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

___

### createReadableSource

▸ **createReadableSource**(`factory`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `Readable` \| [`Factory`](functions.md#factory)<`Readable`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`Uint8Array`\>

___

### createWritableSink

▸ **createWritableSink**(`factory`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`Uint8Array`, [`Updater`](functions.md#updater)<[`PauseableState`](scheduling.md#pauseablestate)\>, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`Uint8Array`, [`Updater`](functions.md#updater)<[`PauseableState`](scheduling.md#pauseablestate)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `Writable` \| [`Factory`](functions.md#factory)<`Writable`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`Uint8Array`, [`Updater`](functions.md#updater)<[`PauseableState`](scheduling.md#pauseablestate)\>, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`Uint8Array`, [`Updater`](functions.md#updater)<[`PauseableState`](scheduling.md#pauseablestate)\>\>\>

___

### deflate

▸ **deflate**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ZlibOptions` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

___

### gunzip

▸ **gunzip**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ZlibOptions` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

___

### gzip

▸ **gzip**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ZlibOptions` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

___

### inflate

▸ **inflate**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ZlibOptions` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

___

### readFile

▸ **readFile**(`path`, `options?`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | `Object` |
| `options.end?` | `number` |
| `options.flags?` | `string` |
| `options.highWaterMark?` | `number` |
| `options.mode?` | `number` |
| `options.start?` | `number` |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`Uint8Array`\>

___

### transform

▸ **transform**(`factory`): [`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`Transform`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`unknown`\>, `Uint8Array`, `Uint8Array`\>
