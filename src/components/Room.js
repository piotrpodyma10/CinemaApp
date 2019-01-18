import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from "../actions/index"

class Room extends React.Component {

    createRoom(){
        return this.props.room.map((row, index) => {
            return(
                <div key={index} className="w-100">
                    {
                        row.map(place => {
                            let squareStatus = place.booked ? 'square--booked' : 'square--free';
                            squareStatus += ' square'

                            if(place.type == 'STANDARD')
                                return(
                                    <div className={squareStatus}
                                    key={place.id}>
                                       
                                    </div>
                                )

                            else if(typeof place.type == 'string')
                                return(
                                    <div className="square block-center" key={place.id}>
                                        {place.type}
                                    </div>
                                )

                            else if (place.type == null)
                                return(
                                    <div className="square" key={place.id}>
                                       
                                    </div>
                                )
                        })
                    }
                    <div style={{clear:'both'}}></div>
                </div>
            )
        
        });
    }

    render(){
        return(
            <div>
                <div className="screen">
                    <h5 className="text-center">Ekran</h5>
                </div>
                {this.createRoom()}
            </div>    
        )
    }
}

function goStateToProps(state){
    return{
        room: state.room
    }
}

function goDispatchToProps(dispatch){
    return bindActionCreators({bookSelect: selectBook}, dispatch)
}

export default connect(goStateToProps, goDispatchToProps)(Room);