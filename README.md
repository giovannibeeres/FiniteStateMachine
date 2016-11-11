# FiniteStateMachine
JavaScript Finite State Machine ( Node.js Compatible )

## How to use

Pretty Simple

```javascript
var START_STATE = function(){
	
	this.id = "START_STATE";
	
	// generic State
	var customState = new State();
	
	// custom update State
	customState.update = function(){ console.log("updated"); };
	
	// init Machine
	this.machine = new StateMachine();
	
	// add State
	this.machine.addState(this.id, customState);
	
	// set Machine onto this State
	this.machine.setState(this.id);
};
```

On Updating the StateMachine..

```javascript
object.machine.update();
```

..the Machine will at it's first update init the default enter function.
After that the custom update function will be initiated until a new State will be set.
Which would mean the generic exit function would be executed.

Visual example which would be executed on machine.update() :
- enter
- update
- update
- ..

## Enter & Exit State Functions

It is possible to control the *enter* & *exit* functions with the right *returns*.
To leave the *enter* substate you **need** to return **true** else it will stay on that substate forever.
It is also possible to do that this way:

```javascript
state.enter = function(){
	return state.NEXT;
}
```
