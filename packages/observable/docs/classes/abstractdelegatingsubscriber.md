[@reactive-js/observable](../README.md) › [AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)

# Class: AbstractDelegatingSubscriber <**TA, TB**>

Abstract base class for implementing instances of the `SubscriberLike` interface
which delegate notifications to a parent `SubscriberLike` instance

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* [AbstractSubscriber](abstractsubscriber.md)‹TA›

  ↳ **AbstractDelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](abstractdelegatingsubscriber.md#constructor)

### Properties

* [delegate](abstractdelegatingsubscriber.md#delegate)

## Constructors

###  constructor

\+ **new AbstractDelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

*Overrides [AbstractSubscriber](abstractsubscriber.md).[constructor](abstractsubscriber.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *[SubscriberLike](../interfaces/subscriberlike.md)‹TB›*
