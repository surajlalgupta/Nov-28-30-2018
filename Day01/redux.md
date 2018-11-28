#Notes on Redux

* Flux design pattern

## State
* Externalize the state of the React components
* Maintain a separate data store where all the data of your application is stored
* All the components share the state
* You can get into synchronization issues
* State is **IMMUTABLE**

## Logic

* You maintain a pool of functions called **reducers**
* Reducers is just a collection of functions
* Reducers manipulate the state

## Communication

* Component(C1) needs X
* C1 talks to the Store by passing a message say "I want X"
* Store dispatches the message to the reducers
* Reducers process the information and change the state
* The state information(X) is supplied to the C1 as props















