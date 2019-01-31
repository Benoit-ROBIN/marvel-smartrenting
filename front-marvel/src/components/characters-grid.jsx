import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

class CharactersGridComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      characters: {
        results: []
      }
    };
  }

  getGridListCols = () => {
    if (isWidthUp("xl", this.props.width)) {
      return 5;
    }
    if (isWidthUp("lg", this.props.width)) {
      return 5;
    }
    if (isWidthUp("md", this.props.width)) {
      return 2;
    }
    return 1;
  };

  componentWillUpdate(newProps) {
    this.setState(newProps);
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <GridList
          cellHeight={200}
          className={this.props.classes.gridList}
          cols={this.getGridListCols()}>

          {this.state.characters.results.map(character => (
            <GridListTile key={character.id} cols={1}>
              <img src={ character.thumbnail.path + "." + character.thumbnail.extension } alt={character.name} />
              <GridListTileBar
                title={character.name}
                titlePosition="bottom"
                className={this.props.classes.gridListTitleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  characters: state.characters
});

const styles = () => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "black"
  },
  gridList: {
    width: "100%",
    height: "100%"
  },
  gridListTitleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
});

export default withWidth()(withStyles(styles)(connect(mapStateToProps)(CharactersGridComponent)));
