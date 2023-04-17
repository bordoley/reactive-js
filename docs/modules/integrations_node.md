[Reactive-JS](../README.md) / integrations/node

# Module: integrations/node

## Table of contents

### Functions

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

▸ **createWritableSink**(`factory`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`Uint8Array`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`Uint8Array`, `boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `Writable` \| [`Factory`](functions.md#factory)<`Writable`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`Uint8Array`, `boolean`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`Uint8Array`, `boolean`\>\>

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
