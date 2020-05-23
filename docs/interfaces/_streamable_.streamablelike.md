[reactive-js](../README.md) › ["streamable"](../modules/_streamable_.md) › [StreamableLike](_streamable_.streamablelike.md)

# Interface: StreamableLike <**TReq, T**>

## Type parameters

▪ **TReq**

▪ **T**

## Hierarchy

* **StreamableLike**

  ↳ [AsyncEnumerableLike](_asyncenumerable_.asyncenumerablelike.md)

  ↳ [FlowableLike](_flowable_.flowablelike.md)

  ↳ [IOSinkLike](_io_.iosinklike.md)

  ↳ [StateStoreLike](_statestore_.statestorelike.md)

## Index

### Methods

* [stream](_streamable_.streamablelike.md#stream)

## Methods

###  stream

▸ **stream**(`scheduler`: [SchedulerLike](_scheduler_.schedulerlike.md), `options?`: object): *[StreamLike](_observable_.streamlike.md)‹TReq, T›*

**Parameters:**

▪ **scheduler**: *[SchedulerLike](_scheduler_.schedulerlike.md)*

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`replay` | number |

**Returns:** *[StreamLike](_observable_.streamlike.md)‹TReq, T›*
