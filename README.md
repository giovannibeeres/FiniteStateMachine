# FiniteStateMachine
JavaScript Finite State Machine ( Node.js Compatible )

# How to use

Pretty Simple

```javascript
var object = function(){
	
	this.START_STATE = "START_STATE";
	
	var customState = new State();
	customState.update = function(){ console.log("update"); };
	
	this.machine = new StateMachine();
	this.machine.addState(this.START_MACHINE, customState);
	
	this.machine.setState(this.START_MACHINE);
};
```
