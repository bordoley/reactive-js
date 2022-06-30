[Reactive-JS](../README.md) / node

# Module: node

## Table of contents

### Functions

- [bindNodeCallback](node.md#bindnodecallback)
- [brotliCompress](node.md#brotlicompress)
- [brotliDecompress](node.md#brotlidecompress)
- [createDisposableNodeStream](node.md#createdisposablenodestream)
- [createReadableIOSource](node.md#createreadableiosource)
- [createWritableIOSink](node.md#createwritableiosink)
- [deflate](node.md#deflate)
- [gunzip](node.md#gunzip)
- [gzip](node.md#gzip)
- [inflate](node.md#inflate)
- [readFileIOSource](node.md#readfileiosource)
- [transform](node.md#transform)

## Functions

### bindNodeCallback

▸ **bindNodeCallback**<`T`\>(`callbackFunc`): [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect1`](functions.md#sideeffect1)<[`SideEffect2`](functions.md#sideeffect2)<`unknown`, `T`\>\> |

#### Returns

[`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**(`callbackFunc`): [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect1`](functions.md#sideeffect1)<[`SideEffect1`](functions.md#sideeffect1)<`unknown`\>\> |

#### Returns

[`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `T`\>(`callbackFunc`): [`Function1`](functions.md#function1)<`A1`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`A1`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`\>(`callbackFunc`): [`Function1`](functions.md#function1)<`A1`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `A1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFunc` | [`SideEffect2`](functions.md#sideeffect2)<`A1`, [`SideEffect1`](functions.md#sideeffect1)<`unknown`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`A1`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `T`\>(`callbackFunc`): [`Function2`](functions.md#function2)<`A1`, `A2`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

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

[`Function2`](functions.md#function2)<`A1`, `A2`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`, `A2`\>(`callbackFunc`): [`Function2`](functions.md#function2)<`A1`, `A2`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

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

[`Function2`](functions.md#function2)<`A1`, `A2`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `T`\>(`callbackFunc`): [`Function3`](functions.md#function3)<`A1`, `A2`, `A3`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

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

[`Function3`](functions.md#function3)<`A1`, `A2`, `A3`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`\>(`callbackFunc`): [`Function3`](functions.md#function3)<`A1`, `A2`, `A3`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

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

[`Function3`](functions.md#function3)<`A1`, `A2`, `A3`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `A4`, `T`\>(`callbackFunc`): [`Function4`](functions.md#function4)<`A1`, `A2`, `A3`, `A4`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

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

[`Function4`](functions.md#function4)<`A1`, `A2`, `A3`, `A4`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `A4`\>(`callbackFunc`): [`Function4`](functions.md#function4)<`A1`, `A2`, `A3`, `A4`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

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

[`Function4`](functions.md#function4)<`A1`, `A2`, `A3`, `A4`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `A4`, `A5`, `T`\>(`callbackFunc`): [`Function5`](functions.md#function5)<`A1`, `A2`, `A3`, `A4`, `A5`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

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

[`Function5`](functions.md#function5)<`A1`, `A2`, `A3`, `A4`, `A5`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

▸ **bindNodeCallback**<`A1`, `A2`, `A3`, `A4`, `A5`\>(`callbackFunc`): [`Function5`](functions.md#function5)<`A1`, `A2`, `A3`, `A4`, `A5`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

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

[`Function5`](functions.md#function5)<`A1`, `A2`, `A3`, `A4`, `A5`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>\>

___

### brotliCompress

▸ **brotliCompress**(`options?`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `BrotliOptions` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

___

### brotliDecompress

▸ **brotliDecompress**(`options?`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `BrotliOptions` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

___

### createDisposableNodeStream

▸ **createDisposableNodeStream**<`T`\>(`stream`): [`DisposableValueLike`](../interfaces/disposable.DisposableValueLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Writable` \| `Readable` \| `Transform` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `T` |

#### Returns

[`DisposableValueLike`](../interfaces/disposable.DisposableValueLike.md)<`T`\>

___

### createReadableIOSource

▸ **createReadableIOSource**(`factory`): [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`DisposableValueLike`](../interfaces/disposable.DisposableValueLike.md)<`Readable`\>\> |

#### Returns

[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>

___

### createWritableIOSink

▸ **createWritableIOSink**(`factory`): [`FlowableSinkLike`](../interfaces/streamable.FlowableSinkLike.md)<`Uint8Array`, [`FlowableSinkStreamLike`](../interfaces/streamable.FlowableSinkStreamLike.md)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`DisposableValueLike`](../interfaces/disposable.DisposableValueLike.md)<`Writable`\>\> |

#### Returns

[`FlowableSinkLike`](../interfaces/streamable.FlowableSinkLike.md)<`Uint8Array`, [`FlowableSinkStreamLike`](../interfaces/streamable.FlowableSinkStreamLike.md)<`Uint8Array`\>\>

___

### deflate

▸ **deflate**(`options?`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ZlibOptions` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

___

### gunzip

▸ **gunzip**(`options?`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ZlibOptions` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

___

### gzip

▸ **gzip**(`options?`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ZlibOptions` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

___

### inflate

▸ **inflate**(`options?`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ZlibOptions` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

___

### readFileIOSource

▸ **readFileIOSource**(`path`, `options?`): [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>

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

[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>

___

### transform

▸ **transform**(`factory`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`DisposableValueLike`](../interfaces/disposable.DisposableValueLike.md)<`Transform`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`Uint8Array`, [`FlowableStreamLike`](../interfaces/streamable.FlowableStreamLike.md)<`Uint8Array`\>\>\>
