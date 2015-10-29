(function(){
	
	const
	START_STATE = "START_STATE",
	TARGET_STATE = "TARGET_STATE",
	
	StartState = new State(),
	TargetState = new State(),
	Machine = new StateMachine();
	
	Machine.addState(START_STATE,StartState,[TARGET_STATE]);
	Machine.addState(TARGET_STATE,TargetState,[START_STATE]);
	
	Machine.setState(START_STATE);
	
	/* 
	* working..
	*/
	
})()