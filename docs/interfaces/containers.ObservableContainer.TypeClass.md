[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [ObservableContainer](../modules/containers.ObservableContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[ObservableContainer](../modules/containers.ObservableContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](containers.ObservableContainers.TypeClass.md)<[`ObservableContainer`](containers.ObservableContainer-1.md)\>

- [`TypeClass`](containers.AsynchronousContainers.TypeClass.md)<[`ObservableContainer`](containers.ObservableContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [exhaust](containers.ObservableContainer.TypeClass.md#exhaust)
- [exhaustMap](containers.ObservableContainer.TypeClass.md#exhaustmap)
- [mergeAll](containers.ObservableContainer.TypeClass.md#mergeall)
- [mergeMap](containers.ObservableContainer.TypeClass.md#mergemap)
- [mergeWith](containers.ObservableContainer.TypeClass.md#mergewith)
- [scanMany](containers.ObservableContainer.TypeClass.md#scanmany)
- [switchAll](containers.ObservableContainer.TypeClass.md#switchall)
- [switchMap](containers.ObservableContainer.TypeClass.md#switchmap)

### Constructor Methods

- [combineLatest](containers.ObservableContainer.TypeClass.md#combinelatest)
- [fromAsyncIterable](containers.ObservableContainer.TypeClass.md#fromasynciterable)
- [merge](containers.ObservableContainer.TypeClass.md#merge)
- [never](containers.ObservableContainer.TypeClass.md#never)
- [zipLatest](containers.ObservableContainer.TypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](containers.ObservableContainer.TypeClass.md#backpressurestrategy)
- [dispatchTo](containers.ObservableContainer.TypeClass.md#dispatchto)
- [enqueue](containers.ObservableContainer.TypeClass.md#enqueue)
- [forkCombineLatest](containers.ObservableContainer.TypeClass.md#forkcombinelatest)
- [forkMerge](containers.ObservableContainer.TypeClass.md#forkmerge)
- [forkZipLatest](containers.ObservableContainer.TypeClass.md#forkziplatest)
- [takeUntil](containers.ObservableContainer.TypeClass.md#takeuntil)
- [throttle](containers.ObservableContainer.TypeClass.md#throttle)
- [timeout](containers.ObservableContainer.TypeClass.md#timeout)
- [withCurrentTime](containers.ObservableContainer.TypeClass.md#withcurrenttime)
- [withLatestFrom](containers.ObservableContainer.TypeClass.md#withlatestfrom)
- [zipWithLatestFrom](containers.ObservableContainer.TypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](containers.ObservableContainer.TypeClass.md#firstasync)
- [lastAsync](containers.ObservableContainer.TypeClass.md#lastasync)

## Operator Properties

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[exhaust](containers.ObservableContainers.TypeClass.md#exhaust)

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[exhaustMap](containers.ObservableContainers.TypeClass.md#exhaustmap)

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[mergeAll](containers.ObservableContainers.TypeClass.md#mergeall)

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[mergeMap](containers.ObservableContainers.TypeClass.md#mergemap)

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`ObservableLike`](types.ObservableLike.md)<`T`\>, ...`tail`: readonly [`ObservableLike`](types.ObservableLike.md)<`T`\>[]) => [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](types.ObservableLike.md)<`T`\>[] |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[mergeWith](containers.ObservableContainers.TypeClass.md#mergewith)

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](types.ObservableLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](types.ObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[scanMany](containers.ObservableContainers.TypeClass.md#scanmany)

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[switchAll](containers.ObservableContainers.TypeClass.md#switchall)

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[switchMap](containers.ObservableContainers.TypeClass.md#switchmap)

## Constructor Methods

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](containers.AsynchronousContainers.TypeClass.md).[fromAsyncIterable](containers.AsynchronousContainers.TypeClass.md#fromasynciterable)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](types.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<`T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[merge](containers.ObservableContainers.TypeClass.md#merge)

___

### never

▸ **never**<`T`\>(): [`ObservableLike`](types.ObservableLike.md)<`T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<`T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[never](containers.ObservableContainers.TypeClass.md#never)

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[backpressureStrategy](containers.ObservableContainers.TypeClass.md#backpressurestrategy)

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[dispatchTo](containers.ObservableContainers.TypeClass.md#dispatchto)

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[enqueue](containers.ObservableContainers.TypeClass.md#enqueue)

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkMerge](containers.ObservableContainers.TypeClass.md#forkmerge)

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](types.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[takeUntil](containers.ObservableContainers.TypeClass.md#takeuntil)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`ObservableLike`](types.ObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[throttle](containers.ObservableContainers.TypeClass.md#throttle)

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time to wait before emitting another value after emitting the last value, measured in milliseconds. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[throttle](containers.ObservableContainers.TypeClass.md#throttle)

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time in ms within which the source must emit values. |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[timeout](containers.ObservableContainers.TypeClass.md#timeout)

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`ObservableLike`](types.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[timeout](containers.ObservableContainers.TypeClass.md#timeout)

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`number`, `T`, `TOut`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `T`, `TOut`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[withCurrentTime](containers.ObservableContainers.TypeClass.md#withcurrenttime)

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[withLatestFrom](containers.ObservableContainers.TypeClass.md#withlatestfrom)

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ObservableContainer`](containers.ObservableContainer-1.md), `TA`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipWithLatestFrom](containers.ObservableContainers.TypeClass.md#zipwithlatestfrom)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[firstAsync](containers.ObservableContainers.TypeClass.md#firstasync)

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[firstAsync](containers.ObservableContainers.TypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[lastAsync](containers.ObservableContainers.TypeClass.md#lastasync)

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[lastAsync](containers.ObservableContainers.TypeClass.md#lastasync)
