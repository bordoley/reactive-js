[Reactive-JS](../README.md) / integrations/web

# Module: integrations/web

## Table of contents

### Container Interfaces

- [WindowLocationStreamLike](../interfaces/integrations_web.WindowLocationStreamLike.md)

### Other Interfaces

- [RectReadOnly](../interfaces/integrations_web.RectReadOnly.md)
- [ScrollState](../interfaces/integrations_web.ScrollState.md)
- [ScrollValue](../interfaces/integrations_web.ScrollValue.md)
- [WindowLocationURI](../interfaces/integrations_web.WindowLocationURI.md)

### Type Aliases

- [CSSStyleKey](integrations_web.md#cssstylekey)

### Variables

- [windowLocation](integrations_web.md#windowlocation)

### Functions

- [addEventListener](integrations_web.md#addeventlistener)
- [addMeasureListener](integrations_web.md#addmeasurelistener)
- [addResizeListener](integrations_web.md#addresizelistener)
- [addScrollListener](integrations_web.md#addscrolllistener)
- [createEventSource](integrations_web.md#createeventsource)
- [observeEvent](integrations_web.md#observeevent)
- [observeMeasure](integrations_web.md#observemeasure)

## Type Aliases

### CSSStyleKey

Ƭ **CSSStyleKey**: keyof `Omit`<`CSSStyleDeclaration`, ``"item"`` \| ``"length"`` \| ``"parentRule"`` \| ``"getPropertyPriority"`` \| ``"getPropertyValue"`` \| ``"removeProperty"`` \| ``"setProperty"`` \| `number` \| typeof `Symbol.iterator`\>

## Variables

### windowLocation

• `Const` **windowLocation**: [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<[`Updater`](functions.md#updater)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\> \| [`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md), [`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md), [`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)\>

## Functions

### addEventListener

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbortSignal`<`TEventTarget`\> |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`AbortSignalEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Animation`<`TEventTarget`\> |
| `K` | extends keyof `AnimationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`AnimationEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbstractWorker` |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`AbstractWorkerEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioScheduledSourceNode`<`TEventTarget`\> |
| `K` | extends ``"ended"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`AudioScheduledSourceNodeEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BaseAudioContext`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`BaseAudioContextEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioWorkletNode`<`TEventTarget`\> |
| `K` | extends ``"processorerror"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`AudioWorkletNodeEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BroadcastChannel`<`TEventTarget`\> |
| `K` | extends keyof `BroadcastChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`BroadcastChannelEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Document`<`TEventTarget`\> |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`DocumentEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Element`<`TEventTarget`\> |
| `K` | extends keyof `ElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`ElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStreamTrack`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamTrackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`MediaStreamTrackEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `EventSource`<`TEventTarget`\> |
| `K` | extends keyof `EventSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`EventSourceEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FileReader`<`TEventTarget`\> |
| `K` | extends keyof `FileReaderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`FileReaderEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FontFaceSet`<`TEventTarget`\> |
| `K` | extends keyof `FontFaceSetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`FontFaceSetEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `GlobalEventHandlers` |
| `K` | extends keyof `GlobalEventHandlersEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`GlobalEventHandlersEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBDatabase`<`TEventTarget`\> |
| `K` | extends keyof `IDBDatabaseEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`IDBDatabaseEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLBodyElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLBodyElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`HTMLBodyElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`HTMLElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLMediaElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLMediaElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`HTMLMediaElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLVideoElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLVideoElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`HTMLVideoElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBOpenDBRequest`<`TEventTarget`\> |
| `K` | extends keyof `IDBOpenDBRequestEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`IDBOpenDBRequestEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`, `TDBObject`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBRequest`<`TDBObject`, `TEventTarget`\> |
| `K` | extends keyof `IDBRequestEventMap` |
| `TDBObject` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`IDBRequestEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBTransaction`<`TEventTarget`\> |
| `K` | extends keyof `IDBTransactionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`IDBTransactionEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MathMLElement`<`TEventTarget`\> |
| `K` | extends keyof `MathMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`MathMLElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaDevices`<`TEventTarget`\> |
| `K` | extends ``"devicechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`MediaDevicesEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaKeySession`<`TEventTarget`\> |
| `K` | extends keyof `MediaKeySessionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`MediaKeySessionEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaQueryList`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`MediaQueryListEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaRecorder`<`TEventTarget`\> |
| `K` | extends keyof `MediaRecorderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`MediaRecorderEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream` \| `MediaSource` |
| `K` | extends keyof `MediaSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`MediaSourceEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`MediaStreamEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MessagePort`<`TEventTarget`\> |
| `K` | extends keyof `MessagePortEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`MessagePortEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Notification`<`TEventTarget`\> |
| `K` | extends keyof `NotificationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`NotificationEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OfflineAudioContext`<`TEventTarget`\> |
| `K` | extends keyof `OfflineAudioContextEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`OfflineAudioContextEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OffscreenCanvas`<`TEventTarget`\> |
| `K` | extends keyof `OffscreenCanvasEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`OffscreenCanvasEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PaymentRequest`<`TEventTarget`\> |
| `K` | extends ``"paymentmethodchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`PaymentRequestEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Performance`<`TEventTarget`\> |
| `K` | extends ``"resourcetimingbufferfull"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`PerformanceEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PermissionStatus`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`PermissionStatusEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PictureInPictureWindow`<`TEventTarget`\> |
| `K` | extends ``"resize"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`PictureInPictureWindowEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDTMFSender`<`TEventTarget`\> |
| `K` | extends ``"tonechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`RTCDTMFSenderEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDataChannel`<`TEventTarget`\> |
| `K` | extends keyof `RTCDataChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`RTCDataChannelEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDtlsTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCDtlsTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`RTCDtlsTransportEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCIceTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCIceTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`RTCIceTransportEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCPeerConnection`<`TEventTarget`\> |
| `K` | extends keyof `RTCPeerConnectionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`RTCPeerConnectionEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCSctpTransport`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`RTCSctpTransportEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RemotePlayback`<`TEventTarget`\> |
| `K` | extends keyof `RemotePlaybackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`RemotePlaybackEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGSVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGSVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`SVGSVGElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ScreenOrientation`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`ScreenOrientationEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorker`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`ServiceWorkerEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerContainer`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerContainerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`ServiceWorkerContainerEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerRegistration`<`TEventTarget`\> |
| `K` | extends ``"updatefound"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`ServiceWorkerRegistrationEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ShadowRoot`<`TEventTarget`\> |
| `K` | extends ``"slotchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`ShadowRootEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBuffer`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`SourceBufferEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBufferList`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`SourceBufferListEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesis`<`TEventTarget`\> |
| `K` | extends ``"voiceschanged"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`SpeechSynthesisEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesisUtterance`<`TEventTarget`\> |
| `K` | extends keyof `SpeechSynthesisUtteranceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`SpeechSynthesisUtteranceEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`SVGElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrack`<`TEventTarget`\> |
| `K` | extends ``"cuechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`TextTrackEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackCue`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackCueEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`TextTrackCueEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackList`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`TextTrackListEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `VisualViewport`<`TEventTarget`\> |
| `K` | extends keyof `VisualViewportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`VisualViewportEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `WebSocket`<`TEventTarget`\> |
| `K` | extends keyof `WebSocketEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`WebSocketEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

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
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`WindowEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

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
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`WorkerEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `XMLHttpRequestEventTarget`<`TEventTarget`\> |
| `K` | extends keyof `XMLHttpRequestEventTargetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`XMLHttpRequestEventTargetEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

___

### addMeasureListener

▸ **addMeasureListener**<`TElement`\>(`listener`): [`Function1`](functions.md#function1)<`TElement`, `TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement` \| `SVGElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<[`RectReadOnly`](../interfaces/integrations_web.RectReadOnly.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, `TElement`\>

___

### addResizeListener

▸ **addResizeListener**<`TElement`\>(`listener`, `options?`): [`Function1`](functions.md#function1)<`TElement`, `TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `Element`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`ResizeObserverEntry`\> |
| `options?` | `ResizeObserverOptions` |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, `TElement`\>

___

### addScrollListener

▸ **addScrollListener**<`TElement`\>(`listener`): [`Function1`](functions.md#function1)<`TElement`, `TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<{ `event`: ``"scroll"`` ; `value`: [`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)  }\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, `TElement`\>

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

___

### observeEvent

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Element`<`TEventTarget`\> |
| `K` | extends keyof `ElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ElementEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`, `TDBObject`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBRequest`<`TDBObject`, `TEventTarget`\> |
| `K` | extends keyof `IDBRequestEventMap` |
| `T` | `T` |
| `TDBObject` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`IDBRequestEventMap`[`K`], `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

### observeMeasure

▸ **observeMeasure**<`TElement`\>(): [`Function1`](functions.md#function1)<`TElement`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<[`RectReadOnly`](../interfaces/integrations_web.RectReadOnly.md)\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement` \| `SVGElement` |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<[`RectReadOnly`](../interfaces/integrations_web.RectReadOnly.md)\>\>
