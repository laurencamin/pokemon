const React = require("react")

const pokemonStyle = {
    color: '#FF0800',
    backgroundColor: '#F5F5F5',
    };
    
class Index extends React.Component {
    render() {
      const { pokemon } = this.props
      return(
        <div style={pokemonStyle}> 
          <h1>See All the Pokemon!</h1>
          </div>
          )};
            }

module.exports = Index