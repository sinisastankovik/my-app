import React from 'react'
import SingleRecepie from './SingleRecepie'
import { connect } from 'react-redux'

const Favorites = (props) => {
    
    console.log(props)
    return <div> test </div>
}

function mapStateToProps (state) {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)