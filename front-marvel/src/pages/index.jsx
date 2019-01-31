import React, { PureComponent } from "react";
import { connect } from 'react-redux'

import CharactersGridComponent from '../components/characters-grid';
import FooterComponent from '../components/footer';
import { fetchAllCharacters } from '../store/character/actions';

class IndexPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      characters: {
        loading: false,
        results: []
      }
    }
  }

  componentDidMount() {
    this.props.getAllCharacters()
  }

  componentWillUpdate(newProps) {
    this.setState(newProps)
  }

  render() {
    return (
      <div>
        <CharactersGridComponent />
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  characters: state.characters
});

const mapDispatchToProps = dispatch => ({
  getAllCharacters: () => dispatch(fetchAllCharacters())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
