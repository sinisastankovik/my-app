import React from 'react'
import  './recepies.css'
import store from '../Redux/store.js'
import { fetchRecepies } from '../Redux/fetchRecepies.js'
import SingleRecepie from './SingleRecepie.js'
import { connect } from 'react-redux'


class Recepies extends React.Component {
    componentWillMount () {
        if(this.props.recepies.length === 0){
        store.dispatch(fetchRecepies())
    }
}
    render () {
    const components = this.props.recepies.map((element) => {
        return <SingleRecepie 
            key= {element.id} 
            description = {element.title} />
    })
    

    

if (components.length < 1) {

    return <div> Loading... </div>

} else
{
    return <div id='recepies' className='flex-container'>
        
    {components}

    </div>
}
}}


function mapStateToProps (state) { 
    return {
        recepies: state.recepies.recepies
    }
}

export default connect(mapStateToProps)(Recepies)