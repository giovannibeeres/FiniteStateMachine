/* www.giovannibeeres.de */
var 
exports,
StateMachine = function(){
	this.previous = null;
	this.current = null;
	this.next = null;
	this.state = null;
	this.states = {};
	this.update = this._nil;
};

StateMachine.prototype = {
	_nil:function(){},
	
	_enter:function(){
		if( this.state.enter() == true )
		{
			this.update = this.state.update;
		}
	},
	
	_exit:function(){
		if( this.state.exit() == true ) 
		{
			this.previous = this.current;
			this.current = this.next;
			this.next = null;
			
			this.state = this.states[this.current];
			this.update = this._enter;
		}
	},
	
	addState:function(_stateName, _state, _constraints){
		if( this.states[_stateName] == null )
		{
			_state.NEXT = true;
			_state.HOLD = false;
			
			this.states[_stateName] = _state;
			
			return true;
		}else{
			return false;
		}
	},
	
	setState:function(_stateName){
		if(this.current != _stateName)
		{
			if( this.current == null )
			{
				this.current = _stateName;
				this.state = this.states[_stateName];
				this.update = this._enter;
			}else{
				this.next = _stateName;
				this.update = this._exit;
			}
		}
	},
};

var State = function(){};

State.prototype = {
	enter:function(){ return this.NEXT; },
	update:function(){},
	exit:function(){ return this.NEXT; },
};

if(exports){
	exports.StateMachine = StateMachine;
	
	exports.State = State;
}