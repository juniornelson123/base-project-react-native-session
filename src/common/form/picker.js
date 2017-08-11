import React, { Component } from 'react'
import { View, Picker, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCity } from '../../parking/parkingActions'

class PickerInput extends Component{
	constructor(props) {
		super(props);
		
		this.state = {state: null}
	}
	
	valueChange(value){
		this.setState({...this.state, state: value})
		this.props.changeCity(value)
	}
	render(){

		return(
			<View>
				<Picker
					{...this.props.inputProps}
		  		{ ...this.props.pickerProps }
		      selectedValue={ this.props.input.value }
		      onValueChange={ value => this.props.input.onChange(value) } >
		      { this.props.children }

				</Picker>
			</View>
		)
			
	}
		
}

const mapDispatchToProps = dispatch => bindActionCreators({changeCity}, dispatch)
export default connect(null, mapDispatchToProps)(PickerInput)

