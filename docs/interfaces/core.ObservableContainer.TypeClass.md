[Reactive-JS](../README.md) / [core](../modules/core.md) / [ObservableContainer](../modules/core.ObservableContainer.md) / TypeClass

# Interface: TypeClass

[core](../modules/core.md).[ObservableContainer](../modules/core.ObservableContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](core.ObservableContainers.TypeClass.md)<[`ObservableContainer`](core.ObservableContainer-1.md)\>

- [`TypeClass`](core.AsynchronousContainers.TypeClass.md)<[`ObservableContainer`](core.ObservableContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [exhaust](core.ObservableContainer.TypeClass.md#exhaust)
- [exhaustMap](core.ObservableContainer.TypeClass.md#exhaustmap)
- [mergeAll](core.ObservableContainer.TypeClass.md#mergeall)
- [mergeMap](core.ObservableContainer.TypeClass.md#mergemap)
- [mergeWith](core.ObservableContainer.TypeClass.md#mergewith)
- [scanMany](core.ObservableContainer.TypeClass.md#scanmany)
- [switchAll](core.ObservableContainer.TypeClass.md#switchall)
- [switchMap](core.ObservableContainer.TypeClass.md#switchmap)

### Constructor Methods

- [combineLatest](core.ObservableContainer.TypeClass.md#combinelatest)
- [fromAsyncIterable](core.ObservableContainer.TypeClass.md#fromasynciterable)
- [merge](core.ObservableContainer.TypeClass.md#merge)
- [never](core.ObservableContainer.TypeClass.md#never)
- [zipLatest](core.ObservableContainer.TypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](core.ObservableContainer.TypeClass.md#backpressurestrategy)
- [dispatchTo](core.ObservableContainer.TypeClass.md#dispatchto)
- [enqueue](core.ObservableContainer.TypeClass.md#enqueue)
- [forkCombineLatest](core.ObservableContainer.TypeClass.md#forkcombinelatest)
- [forkMerge](core.ObservableContainer.TypeClass.md#forkmerge)
- [forkZipLatest](core.ObservableContainer.TypeClass.md#forkziplatest)
- [takeUntil](core.ObservableContainer.TypeClass.md#takeuntil)
- [throttle](core.ObservableContainer.TypeClass.md#throttle)
- [timeout](core.ObservableContainer.TypeClass.md#timeout)
- [withCurrentTime](core.ObservableContainer.TypeClass.md#withcurrenttime)
- [withLatestFrom](core.ObservableContainer.TypeClass.md#withlatestfrom)
- [zipWithLatestFrom](core.ObservableContainer.TypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](core.ObservableContainer.TypeClass.md#firstasync)
- [lastAsync](core.ObservableContainer.TypeClass.md#lastasync)

## Operator Properties

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), [`ObservableLike`](core.ObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), [`ObservableLike`](core.ObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), [`ObservableLike`](core.ObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[exhaust](core.ObservableContainers.TypeClass.md#exhaust)

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](core.ObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](core.ObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[exhaustMap](core.ObservableContainers.TypeClass.md#exhaustmap)

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), [`ObservableLike`](core.ObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), [`ObservableLike`](core.ObservableLike.md)<`T`\>, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), [`ObservableLike`](core.ObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[mergeAll](core.ObservableContainers.TypeClass.md#mergeall)

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](core.ObservableLike.md)<`TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](core.ObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[mergeMap](core.ObservableContainers.TypeClass.md#mergemap)

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`ObservableLike`](core.ObservableLike.md)<`T`\>, ...`tail`: readonly [`ObservableLike`](core.ObservableLike.md)<`T`\>[]) => [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](core.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](core.ObservableLike.md)<`T`\>[] |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[mergeWith](core.ObservableContainers.TypeClass.md#mergewith)

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](core.ObservableLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](core.ObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[scanMany](core.ObservableContainers.TypeClass.md#scanmany)

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), [`ObservableLike`](core.ObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), [`ObservableLike`](core.ObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), [`ObservableLike`](core.ObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[switchAll](core.ObservableContainers.TypeClass.md#switchall)

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](core.ObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](core.ObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[switchMap](core.ObservableContainers.TypeClass.md#switchmap)

## Constructor Methods

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[combineLatest](core.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[combineLatest](core.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[combineLatest](core.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[combineLatest](core.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](core.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[combineLatest](core.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](core.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[combineLatest](core.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](core.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[combineLatest](core.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](core.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](core.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[combineLatest](core.ObservableContainers.TypeClass.md#combinelatest)

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.AsynchronousContainers.TypeClass.md).[fromAsyncIterable](core.AsynchronousContainers.TypeClass.md#fromasynciterable)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](core.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](core.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](core.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](core.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<`T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[merge](core.ObservableContainers.TypeClass.md#merge)

___

### never

▸ **never**<`T`\>(): [`ObservableLike`](core.ObservableLike.md)<`T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<`T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[never](core.ObservableContainers.TypeClass.md#never)

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[zipLatest](core.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[zipLatest](core.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[zipLatest](core.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[zipLatest](core.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](core.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[zipLatest](core.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](core.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[zipLatest](core.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](core.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[zipLatest](core.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](core.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](core.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](core.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](core.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](core.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](core.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](core.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](core.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](core.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[zipLatest](core.ObservableContainers.TypeClass.md#ziplatest)

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[backpressureStrategy](core.ObservableContainers.TypeClass.md#backpressurestrategy)

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](core.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[dispatchTo](core.ObservableContainers.TypeClass.md#dispatchto)

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](core.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[enqueue](core.ObservableContainers.TypeClass.md#enqueue)

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkCombineLatest](core.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkCombineLatest](core.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkCombineLatest](core.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkCombineLatest](core.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkCombineLatest](core.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkCombineLatest](core.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkCombineLatest](core.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkCombineLatest](core.ObservableContainers.TypeClass.md#forkcombinelatest)

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkMerge](core.ObservableContainers.TypeClass.md#forkmerge)

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkZipLatest](core.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkZipLatest](core.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkZipLatest](core.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkZipLatest](core.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkZipLatest](core.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkZipLatest](core.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkZipLatest](core.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[forkZipLatest](core.ObservableContainers.TypeClass.md#forkziplatest)

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](core.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[takeUntil](core.ObservableContainers.TypeClass.md#takeuntil)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`ObservableLike`](core.ObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[throttle](core.ObservableContainers.TypeClass.md#throttle)

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[throttle](core.ObservableContainers.TypeClass.md#throttle)

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[timeout](core.ObservableContainers.TypeClass.md#timeout)

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`ObservableLike`](core.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[timeout](core.ObservableContainers.TypeClass.md#timeout)

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TOut`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `T`, `TOut`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[withCurrentTime](core.ObservableContainers.TypeClass.md#withcurrenttime)

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[withLatestFrom](core.ObservableContainers.TypeClass.md#withlatestfrom)

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](core.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ObservableContainer`](core.ObservableContainer-1.md), `TA`, `T`\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[zipWithLatestFrom](core.ObservableContainers.TypeClass.md#zipwithlatestfrom)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[firstAsync](core.ObservableContainers.TypeClass.md#firstasync)

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[firstAsync](core.ObservableContainers.TypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[lastAsync](core.ObservableContainers.TypeClass.md#lastasync)

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](core.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](core.ObservableContainers.TypeClass.md).[lastAsync](core.ObservableContainers.TypeClass.md#lastasync)
