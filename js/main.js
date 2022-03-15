import React from 'react'

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            floor: 1,
            images:["imgs/second-floor.png","imgs/second-floor.png"],
            row : 0,
            column : 0,
            radius : 5,
        }
        this.changefirst = this.changefirst.bind(this);
        this.changesecond = this.changesecond.bind(this);
    }

    componentDidMount(){
    fetch('/api/v1/position/', { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          row:data.row,
          column :data.column,

        });
      })
      .catch((error) => console.log(error));
    }

    changefirst(){
        const {floor} = this.state;
        this.setState({
            floor : 2
        })
    }

    changesecond(){
        const {floor} = this.state;
        this.setState({
            floor : 1
        })
    }
    render(){
        const {floor,images,row,column,radius} = this.state;
        return(
            <div className='map'>
                <img src = {images[floor - 1]} alt = "casino map" usemap = "#add_circle"/>
                <map name = "add_circle">
                    <area shape = "circle" coords = {row,column,radius} alt = "user position"/>
                </map>
                {(floor == 1) && <button onclick = {this.changefirst}> Change to secondfloor</button>}
                {(floor == 2) && <button onclick = {this.changesecond}> Change to firstfloor</button>}
            </div>
        )
    }
}