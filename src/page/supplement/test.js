import React,{
  Component
} from 'react';


export default class Text extends Component{
  state ={
    num: 0,
  }
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    console.log(prevState);
    console.log(this.state);
  }
  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate');
    console.log(nextState);
    console.log(this.state);
  }

  handleclick() {
    this.setState({
      num: this.state.num + 1,
    })
  }
  render(){
    console.log('render');
    const style = {
      width: 200,
      margin: '0 auto'
    }

    return(
     
      <div style={style}>
         <button onClick={this.handleclick.bind(this)}>点击</button>
         <div>当前值num：{this.state.num}</div>
         <div>当前值num2：{this.state.num2}</div>

      </div>
    )
  }
}