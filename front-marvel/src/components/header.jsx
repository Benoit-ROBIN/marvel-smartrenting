import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

class HeaderBarComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      characters: {
        loading: false
      }
    };
  }

  componentWillUpdate(newProps) {
    this.setState(newProps);
  }

  render() {
    const { loading } = this.state.characters;
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6">Marvel characters</Typography>
          </Toolbar>
          {loading && <LinearProgress />}
        </AppBar>
      </div>
    );
  }
}

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

const mapStateToProps = (state, ownProps) => ({
  characters: state.characters
});

export default withStyles(styles)(connect(mapStateToProps)(HeaderBarComponent));
