import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleChange(event) {

    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        name="topText"
                        placeholder="Top Text"
                        value={}
                        onChange={}
                    />
                    <input 
                        type="text" 
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={}
                        onChange={}
                    />
                    <button>Gen..</button>
                </form>

                
            </div>
        )
    }
}

export default MemeGenerator