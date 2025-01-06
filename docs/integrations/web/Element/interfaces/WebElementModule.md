[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/web/Element](../README.md) / WebElementModule

# Interface: WebElementModule

## Methods

### addEventHandler()

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `AbortSignal`

• **K** *extends* `"abort"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`AbortSignalEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `Animation`

• **K** *extends* keyof `AnimationEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`AnimationEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `AbstractWorker`

• **K** *extends* `"error"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`AbstractWorkerEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `AudioScheduledSourceNode`

• **K** *extends* `"ended"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`AudioScheduledSourceNodeEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `BaseAudioContext`

• **K** *extends* `"statechange"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`BaseAudioContextEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `AudioWorkletNode`

• **K** *extends* `"processorerror"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`AudioWorkletNodeEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `BroadcastChannel`

• **K** *extends* keyof `BroadcastChannelEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`BroadcastChannelEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `Document`

• **K** *extends* keyof `DocumentEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`DocumentEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `Element`

• **K** *extends* keyof `ElementEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`ElementEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `MediaStreamTrack`

• **K** *extends* keyof `MediaStreamTrackEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`MediaStreamTrackEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `EventSource`

• **K** *extends* keyof `EventSourceEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`EventSourceEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `FileReader`

• **K** *extends* keyof `FileReaderEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`FileReaderEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `FontFaceSet`

• **K** *extends* keyof `FontFaceSetEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`FontFaceSetEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `GlobalEventHandlers`

• **K** *extends* keyof `GlobalEventHandlersEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`GlobalEventHandlersEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `IDBDatabase`

• **K** *extends* keyof `IDBDatabaseEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`IDBDatabaseEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `HTMLBodyElement`

• **K** *extends* keyof `HTMLBodyElementEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`HTMLBodyElementEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `HTMLElement`

• **K** *extends* keyof `HTMLElementEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`HTMLElementEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `HTMLMediaElement`

• **K** *extends* keyof `HTMLMediaElementEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`HTMLMediaElementEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `HTMLVideoElement`

• **K** *extends* keyof `HTMLVideoElementEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`HTMLVideoElementEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `IDBOpenDBRequest`

• **K** *extends* keyof `IDBOpenDBRequestEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`IDBOpenDBRequestEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`, `TDBObject`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `IDBRequest`\<`TDBObject`\>

• **K** *extends* keyof `IDBRequestEventMap`

• **TDBObject** = `any`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`IDBRequestEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `IDBTransaction`

• **K** *extends* keyof `IDBTransactionEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`IDBTransactionEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `MathMLElement`

• **K** *extends* keyof `MathMLElementEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`MathMLElementEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `MediaDevices`

• **K** *extends* `"devicechange"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`MediaDevicesEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `MediaKeySession`

• **K** *extends* keyof `MediaKeySessionEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`MediaKeySessionEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `MediaQueryList`

• **K** *extends* `"change"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`MediaQueryListEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `MediaRecorder`

• **K** *extends* keyof `MediaRecorderEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`MediaRecorderEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `MediaStream` \| `MediaSource`

• **K** *extends* keyof `MediaSourceEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`MediaSourceEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `MediaStream`

• **K** *extends* keyof `MediaStreamEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`MediaStreamEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `MessagePort`

• **K** *extends* keyof `MessagePortEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`MessagePortEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `Notification`

• **K** *extends* keyof `NotificationEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`NotificationEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `OfflineAudioContext`

• **K** *extends* keyof `OfflineAudioContextEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`OfflineAudioContextEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `OffscreenCanvas`

• **K** *extends* keyof `OffscreenCanvasEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`OffscreenCanvasEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `PaymentRequest`

• **K** *extends* keyof `PaymentRequestEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`PaymentRequestEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `Performance`

• **K** *extends* `"resourcetimingbufferfull"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`PerformanceEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `PermissionStatus`

• **K** *extends* `"change"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`PermissionStatusEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `PictureInPictureWindow`

• **K** *extends* `"resize"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`PictureInPictureWindowEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `RTCDTMFSender`

• **K** *extends* `"tonechange"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`RTCDTMFSenderEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `RTCDataChannel`

• **K** *extends* keyof `RTCDataChannelEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`RTCDataChannelEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `RTCDtlsTransport`

• **K** *extends* keyof `RTCDtlsTransportEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`RTCDtlsTransportEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `RTCIceTransport`

• **K** *extends* keyof `RTCIceTransportEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`RTCIceTransportEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `RTCPeerConnection`

• **K** *extends* keyof `RTCPeerConnectionEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`RTCPeerConnectionEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `RTCSctpTransport`

• **K** *extends* `"statechange"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`RTCSctpTransportEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `RemotePlayback`

• **K** *extends* keyof `RemotePlaybackEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`RemotePlaybackEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `SVGSVGElement`

• **K** *extends* keyof `SVGSVGElementEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`SVGSVGElementEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `ScreenOrientation`

• **K** *extends* `"change"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`ScreenOrientationEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `ServiceWorker`

• **K** *extends* keyof `ServiceWorkerEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`ServiceWorkerEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `ServiceWorkerContainer`

• **K** *extends* keyof `ServiceWorkerContainerEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`ServiceWorkerContainerEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `ServiceWorkerRegistration`

• **K** *extends* `"updatefound"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`ServiceWorkerRegistrationEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `ShadowRoot`

• **K** *extends* `"slotchange"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`ShadowRootEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `SourceBuffer`

• **K** *extends* keyof `SourceBufferEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`SourceBufferEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `SourceBufferList`

• **K** *extends* keyof `SourceBufferListEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`SourceBufferListEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `SpeechSynthesis`

• **K** *extends* `"voiceschanged"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`SpeechSynthesisEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `SpeechSynthesisUtterance`

• **K** *extends* keyof `SpeechSynthesisUtteranceEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`SpeechSynthesisUtteranceEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `SVGElement`

• **K** *extends* keyof `SVGElementEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`SVGElementEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `TextTrack`

• **K** *extends* `"cuechange"`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`TextTrackEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `TextTrackCue`

• **K** *extends* keyof `TextTrackCueEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`TextTrackCueEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `TextTrackList`

• **K** *extends* keyof `TextTrackListEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`TextTrackListEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `VisualViewport`

• **K** *extends* keyof `VisualViewportEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`VisualViewportEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `WebSocket`

• **K** *extends* keyof `WebSocketEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`WebSocketEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`, `T`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `Window`

• **K** *extends* keyof `WindowEventMap`

• **T**

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`WindowEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`, `T`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `Worker`

• **K** *extends* keyof `WorkerEventMap`

• **T**

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`WorkerEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **addEventHandler**\<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **TEventTarget** *extends* `XMLHttpRequestEventTarget`

• **K** *extends* keyof `XMLHttpRequestEventTargetEventMap`

##### Parameters

###### eventName

`K`

###### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`XMLHttpRequestEventTargetEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

***

### addResizeHandler()

> **addResizeHandler**\<`TElement`\>(`handler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **TElement** *extends* `Element`

#### Parameters

##### handler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`ResizeObserverEntry`\>

##### options?

`ResizeObserverOptions`

#### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

***

### addScrollHandler()

> **addScrollHandler**\<`TElement`\>(`handler`): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **TElement** *extends* `HTMLElement`

#### Parameters

##### handler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<[`ScrollValue`](../../interfaces/ScrollValue.md)\>

#### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

***

### eventSource()

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AbortSignalEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `AbortSignal`

• **K** *extends* `"abort"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AbortSignalEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AnimationEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `Animation`

• **K** *extends* keyof `AnimationEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AnimationEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AbstractWorkerEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `AbstractWorker`

• **K** *extends* `"error"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AbstractWorkerEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AudioScheduledSourceNodeEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `AudioScheduledSourceNode`

• **K** *extends* `"ended"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AudioScheduledSourceNodeEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`BaseAudioContextEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `BaseAudioContext`

• **K** *extends* `"statechange"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`BaseAudioContextEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AudioWorkletNodeEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `AudioWorkletNode`

• **K** *extends* `"processorerror"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`AudioWorkletNodeEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`BroadcastChannelEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `BroadcastChannel`

• **K** *extends* keyof `BroadcastChannelEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`BroadcastChannelEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`DocumentEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `Document`

• **K** *extends* keyof `DocumentEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`DocumentEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ElementEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `Element`

• **K** *extends* keyof `ElementEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ElementEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaStreamTrackEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `MediaStreamTrack`

• **K** *extends* keyof `MediaStreamTrackEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaStreamTrackEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`EventSourceEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)

• **K** *extends* keyof `EventSourceEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`EventSourceEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`FileReaderEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `FileReader`

• **K** *extends* keyof `FileReaderEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`FileReaderEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`FontFaceSetEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `FontFaceSet`

• **K** *extends* keyof `FontFaceSetEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`FontFaceSetEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`GlobalEventHandlersEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `GlobalEventHandlers`

• **K** *extends* keyof `GlobalEventHandlersEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`GlobalEventHandlersEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IDBDatabaseEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `IDBDatabase`

• **K** *extends* keyof `IDBDatabaseEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IDBDatabaseEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`HTMLBodyElementEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `HTMLBodyElement`

• **K** *extends* keyof `HTMLBodyElementEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`HTMLBodyElementEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`HTMLElementEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `HTMLElement`

• **K** *extends* keyof `HTMLElementEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`HTMLElementEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`HTMLMediaElementEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `HTMLMediaElement`

• **K** *extends* keyof `HTMLMediaElementEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`HTMLMediaElementEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`HTMLVideoElementEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `HTMLVideoElement`

• **K** *extends* keyof `HTMLVideoElementEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`HTMLVideoElementEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IDBOpenDBRequestEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `IDBOpenDBRequest`

• **K** *extends* keyof `IDBOpenDBRequestEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IDBOpenDBRequestEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`, `TDBObject`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IDBRequestEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `IDBRequest`\<`TDBObject`\>

• **K** *extends* keyof `IDBRequestEventMap`

• **TDBObject** = `any`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IDBRequestEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IDBTransactionEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `IDBTransaction`

• **K** *extends* keyof `IDBTransactionEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IDBTransactionEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MathMLElementEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `MathMLElement`

• **K** *extends* keyof `MathMLElementEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MathMLElementEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaDevicesEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `MediaDevices`

• **K** *extends* `"devicechange"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaDevicesEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaKeySessionEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `MediaKeySession`

• **K** *extends* keyof `MediaKeySessionEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaKeySessionEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaQueryListEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `MediaQueryList`

• **K** *extends* `"change"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaQueryListEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaRecorderEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `MediaRecorder`

• **K** *extends* keyof `MediaRecorderEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaRecorderEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaSourceEventMap`\>\>

##### Type Parameters

• **TEventTarget** *extends* `MediaStream` \| `MediaSource`

• **K** *extends* keyof `MediaSourceEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaSourceEventMap`\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaStreamEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `MediaStream`

• **K** *extends* keyof `MediaStreamEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MediaStreamEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MessagePortEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `MessagePort`

• **K** *extends* keyof `MessagePortEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`MessagePortEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`NotificationEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `Notification`

• **K** *extends* keyof `NotificationEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`NotificationEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`OfflineAudioContextEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `OfflineAudioContext`

• **K** *extends* keyof `OfflineAudioContextEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`OfflineAudioContextEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`OffscreenCanvasEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `OffscreenCanvas`

• **K** *extends* keyof `OffscreenCanvasEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`OffscreenCanvasEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`PaymentRequestEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `PaymentRequest`

• **K** *extends* keyof `PaymentRequestEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`PaymentRequestEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`PerformanceEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `Performance`

• **K** *extends* `"resourcetimingbufferfull"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`PerformanceEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`PermissionStatusEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `PermissionStatus`

• **K** *extends* `"change"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`PermissionStatusEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`PictureInPictureWindowEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `PictureInPictureWindow`

• **K** *extends* `"resize"`

##### Parameters

###### eventName

`K`

###### eventListener

[`ErrorSafeEventListenerLike`](../../../../events/interfaces/ErrorSafeEventListenerLike.md)\<`PictureInPictureWindowEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`PictureInPictureWindowEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCDTMFSenderEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `RTCDTMFSender`

• **K** *extends* `"tonechange"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCDTMFSenderEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCDataChannelEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `RTCDataChannel`

• **K** *extends* keyof `RTCDataChannelEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCDataChannelEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCDtlsTransportEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `RTCDtlsTransport`

• **K** *extends* keyof `RTCDtlsTransportEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCDtlsTransportEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCIceTransportEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `RTCIceTransport`

• **K** *extends* keyof `RTCIceTransportEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCIceTransportEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCPeerConnectionEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `RTCPeerConnection`

• **K** *extends* keyof `RTCPeerConnectionEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCPeerConnectionEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCSctpTransportEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `RTCSctpTransport`

• **K** *extends* `"statechange"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RTCSctpTransportEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RemotePlaybackEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `RemotePlayback`

• **K** *extends* keyof `RemotePlaybackEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`RemotePlaybackEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SVGSVGElementEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `SVGSVGElement`

• **K** *extends* keyof `SVGSVGElementEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SVGSVGElementEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ScreenOrientationEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `ScreenOrientation`

• **K** *extends* `"change"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ScreenOrientationEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ServiceWorkerEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `ServiceWorker`

• **K** *extends* keyof `ServiceWorkerEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ServiceWorkerEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ServiceWorkerContainerEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `ServiceWorkerContainer`

• **K** *extends* keyof `ServiceWorkerContainerEventMap`

##### Parameters

###### eventName

`K`

###### eventListener

[`ErrorSafeEventListenerLike`](../../../../events/interfaces/ErrorSafeEventListenerLike.md)\<`ServiceWorkerContainerEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ServiceWorkerContainerEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ServiceWorkerRegistrationEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `ServiceWorkerRegistration`

• **K** *extends* `"updatefound"`

##### Parameters

###### eventName

`K`

###### eventListener

[`ErrorSafeEventListenerLike`](../../../../events/interfaces/ErrorSafeEventListenerLike.md)\<`ServiceWorkerRegistrationEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ServiceWorkerRegistrationEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ShadowRootEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `ShadowRoot`

• **K** *extends* `"slotchange"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ShadowRootEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SourceBufferEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `SourceBuffer`

• **K** *extends* keyof `SourceBufferEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SourceBufferEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SourceBufferListEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `SourceBufferList`

• **K** *extends* keyof `SourceBufferListEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SourceBufferListEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SpeechSynthesisEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `SpeechSynthesis`

• **K** *extends* `"voiceschanged"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SpeechSynthesisEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SpeechSynthesisUtteranceEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `SpeechSynthesisUtterance`

• **K** *extends* keyof `SpeechSynthesisUtteranceEventMap`

##### Parameters

###### eventName

`K`

###### eventListener

[`ErrorSafeEventListenerLike`](../../../../events/interfaces/ErrorSafeEventListenerLike.md)\<`SpeechSynthesisUtteranceEventMap`\[`K`\]\>

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SpeechSynthesisUtteranceEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SVGElementEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `SVGElement`

• **K** *extends* keyof `SVGElementEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`SVGElementEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`TextTrackEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `TextTrack`

• **K** *extends* `"cuechange"`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`TextTrackEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`TextTrackCueEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `TextTrackCue`

• **K** *extends* keyof `TextTrackCueEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`TextTrackCueEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`TextTrackListEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `TextTrackList`

• **K** *extends* keyof `TextTrackListEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`TextTrackListEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`VisualViewportEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `VisualViewport`

• **K** *extends* keyof `VisualViewportEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`VisualViewportEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`WebSocketEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `WebSocket`

• **K** *extends* keyof `WebSocketEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`WebSocketEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`WindowEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `Window`

• **K** *extends* keyof `WindowEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`WindowEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`WorkerEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `Worker`

• **K** *extends* keyof `WorkerEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`WorkerEventMap`\[`K`\]\>\>

#### Call Signature

> **eventSource**\<`TEventTarget`, `K`\>(`eventName`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`XMLHttpRequestEventTargetEventMap`\[`K`\]\>\>

##### Type Parameters

• **TEventTarget** *extends* `XMLHttpRequestEventTarget`

• **K** *extends* keyof `XMLHttpRequestEventTargetEventMap`

##### Parameters

###### eventName

`K`

###### options?

###### capture

`boolean`

###### passive

`boolean`

##### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`XMLHttpRequestEventTargetEventMap`\[`K`\]\>\>

***

### intersectionEventSource()

> **intersectionEventSource**(`parent`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`Element`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IntersectionObserverEntry`\>\>

#### Parameters

##### parent?

`Element` | `Document`

#### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`Element`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`IntersectionObserverEntry`\>\>

***

### measure()

> **measure**\<`TElement`\>(): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`StoreLike`](../../../../events/interfaces/StoreLike.md)\<[`Rect`](../../interfaces/Rect.md)\> & [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **TElement** *extends* `HTMLElement` \| `SVGElement`

#### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`StoreLike`](../../../../events/interfaces/StoreLike.md)\<[`Rect`](../../interfaces/Rect.md)\> & [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

***

### resizeEventSource()

> **resizeEventSource**\<`TElement`\>(`options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ResizeObserverEntry`\>\>

#### Type Parameters

• **TElement** *extends* `Element`

#### Parameters

##### options?

`ResizeObserverOptions`

#### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`ResizeObserverEntry`\>\>

***

### scrollEventSource()

> **scrollEventSource**\<`TElement`\>(): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<[`ScrollValue`](../../interfaces/ScrollValue.md)\>\>

#### Type Parameters

• **TElement** *extends* `HTMLElement`

#### Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TElement`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<[`ScrollValue`](../../interfaces/ScrollValue.md)\>\>
