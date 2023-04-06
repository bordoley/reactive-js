[Reactive-JS](../README.md) / integrations/web

# Module: integrations/web

## Table of contents

### Container Interfaces

- [WindowLocationStreamLike](../interfaces/integrations_web.WindowLocationStreamLike.md)

### Other Interfaces

- [WindowLocationURI](../interfaces/integrations_web.WindowLocationURI.md)

### Type Aliases

- [CSSStyleKey](integrations_web.md#cssstylekey)

### Variables

- [windowLocation](integrations_web.md#windowlocation)

### Functions

- [addEventListener](integrations_web.md#addeventlistener)
- [createEventSource](integrations_web.md#createeventsource)

## Type Aliases

### CSSStyleKey

Ƭ **CSSStyleKey**: keyof `Omit`<`CSSStyleDeclaration`, ``"item"`` \| ``"length"`` \| ``"parentRule"`` \| ``"getPropertyPriority"`` \| ``"getPropertyValue"`` \| ``"removeProperty"`` \| ``"setProperty"`` \| `number` \| typeof `Symbol.iterator`\>

## Variables

### windowLocation

• `Const` **windowLocation**: [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<[`Updater`](functions.md#updater)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\> \| [`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md), [`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md), [`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)\>

## Functions

### addEventListener

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbortSignal`<`TEventTarget`\> |
| `K` | extends ``"abort"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AbortSignalEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Animation`<`TEventTarget`\> |
| `K` | extends keyof `AnimationEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AnimationEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbstractWorker` |
| `K` | extends ``"error"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AbstractWorkerEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioScheduledSourceNode`<`TEventTarget`\> |
| `K` | extends ``"ended"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AudioScheduledSourceNodeEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BaseAudioContext`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`BaseAudioContextEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioWorkletNode`<`TEventTarget`\> |
| `K` | extends ``"processorerror"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AudioWorkletNodeEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BroadcastChannel`<`TEventTarget`\> |
| `K` | extends keyof `BroadcastChannelEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`BroadcastChannelEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Document`<`TEventTarget`\> |
| `K` | extends keyof `DocumentEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`DocumentEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStreamTrack`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamTrackEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaStreamTrackEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `EventSource`<`TEventTarget`\> |
| `K` | extends keyof `EventSourceEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`EventSourceEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FileReader`<`TEventTarget`\> |
| `K` | extends keyof `FileReaderEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`FileReaderEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FontFaceSet`<`TEventTarget`\> |
| `K` | extends keyof `FontFaceSetEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`FontFaceSetEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `GlobalEventHandlers` |
| `K` | extends keyof `GlobalEventHandlersEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`GlobalEventHandlersEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBDatabase`<`TEventTarget`\> |
| `K` | extends keyof `IDBDatabaseEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`IDBDatabaseEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLBodyElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLBodyElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`HTMLBodyElementEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`HTMLElementEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLMediaElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLMediaElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`HTMLMediaElementEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLVideoElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLVideoElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`HTMLVideoElementEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBOpenDBRequest`<`TEventTarget`\> |
| `K` | extends keyof `IDBOpenDBRequestEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`IDBOpenDBRequestEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBRequest`<`T`, `TEventTarget`\> |
| `K` | extends keyof `IDBRequestEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`IDBRequestEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBTransaction`<`TEventTarget`\> |
| `K` | extends keyof `IDBTransactionEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`IDBTransactionEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MathMLElement`<`TEventTarget`\> |
| `K` | extends keyof `MathMLElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MathMLElementEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaDevices`<`TEventTarget`\> |
| `K` | extends ``"devicechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaDevicesEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaKeySession`<`TEventTarget`\> |
| `K` | extends keyof `MediaKeySessionEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaKeySessionEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaQueryList`<`TEventTarget`\> |
| `K` | extends ``"change"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaQueryListEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaRecorder`<`TEventTarget`\> |
| `K` | extends keyof `MediaRecorderEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaRecorderEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream` \| `MediaSource` |
| `K` | extends keyof `MediaSourceEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaSourceEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaStreamEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MessagePort`<`TEventTarget`\> |
| `K` | extends keyof `MessagePortEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MessagePortEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Notification`<`TEventTarget`\> |
| `K` | extends keyof `NotificationEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`NotificationEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OfflineAudioContext`<`TEventTarget`\> |
| `K` | extends keyof `OfflineAudioContextEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`OfflineAudioContextEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OffscreenCanvas`<`TEventTarget`\> |
| `K` | extends keyof `OffscreenCanvasEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`OffscreenCanvasEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PaymentRequest`<`TEventTarget`\> |
| `K` | extends ``"paymentmethodchange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`PaymentRequestEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Performance`<`TEventTarget`\> |
| `K` | extends ``"resourcetimingbufferfull"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`PerformanceEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PermissionStatus`<`TEventTarget`\> |
| `K` | extends ``"change"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`PermissionStatusEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PictureInPictureWindow`<`TEventTarget`\> |
| `K` | extends ``"resize"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`PictureInPictureWindowEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDTMFSender`<`TEventTarget`\> |
| `K` | extends ``"tonechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCDTMFSenderEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDataChannel`<`TEventTarget`\> |
| `K` | extends keyof `RTCDataChannelEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCDataChannelEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDtlsTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCDtlsTransportEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCDtlsTransportEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCIceTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCIceTransportEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCIceTransportEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCPeerConnection`<`TEventTarget`\> |
| `K` | extends keyof `RTCPeerConnectionEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCPeerConnectionEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCSctpTransport`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCSctpTransportEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RemotePlayback`<`TEventTarget`\> |
| `K` | extends keyof `RemotePlaybackEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RemotePlaybackEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGSVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGSVGElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SVGSVGElementEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ScreenOrientation`<`TEventTarget`\> |
| `K` | extends ``"change"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ScreenOrientationEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorker`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ServiceWorkerEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerContainer`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerContainerEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ServiceWorkerContainerEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerRegistration`<`TEventTarget`\> |
| `K` | extends ``"updatefound"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ServiceWorkerRegistrationEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ShadowRoot`<`TEventTarget`\> |
| `K` | extends ``"slotchange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ShadowRootEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBuffer`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SourceBufferEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBufferList`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferListEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SourceBufferListEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesis`<`TEventTarget`\> |
| `K` | extends ``"voiceschanged"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SpeechSynthesisEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesisUtterance`<`TEventTarget`\> |
| `K` | extends keyof `SpeechSynthesisUtteranceEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SpeechSynthesisUtteranceEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SVGElementEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrack`<`TEventTarget`\> |
| `K` | extends ``"cuechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`TextTrackEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackCue`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackCueEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`TextTrackCueEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackList`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackListEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`TextTrackListEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `VisualViewport`<`TEventTarget`\> |
| `K` | extends keyof `VisualViewportEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`VisualViewportEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `WebSocket`<`TEventTarget`\> |
| `K` | extends keyof `WebSocketEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`WebSocketEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Window`<`TEventTarget`\> |
| `K` | extends keyof `WindowEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`WindowEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Worker`<`TEventTarget`\> |
| `K` | extends keyof `WorkerEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`WorkerEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `XMLHttpRequestEventTarget`<`TEventTarget`\> |
| `K` | extends keyof `XMLHttpRequestEventTargetEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`XMLHttpRequestEventTargetEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### createEventSource

▸ **createEventSource**(`url`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<{ `data`: `string` ; `id`: `string` ; `type`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `options?` | `EventSourceInit` & { `events?`: readonly `string`[]  } |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<{ `data`: `string` ; `id`: `string` ; `type`: `string`  }\>
