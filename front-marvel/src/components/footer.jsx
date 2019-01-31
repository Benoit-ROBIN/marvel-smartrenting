import React, { PureComponent } from "react";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";

import { withStyles } from "@material-ui/core/styles";

import { fetchAllCharacters } from "../store/character/actions";

class FooterComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 0
    };
  }

  componentWillUpdate(newProps) {
    this.setState(newProps);
    this.computePageCount();
  }

  getAllCharacters(page) {
      window.scrollTo(0, 0);
      this.props.getAllCharacters(page.selected + 1);
  }

  computePageCount() {
    const { total } = this.props.characters.info;
    const pageCount = Math.ceil(total / 20);
    this.setState({ pageCount: pageCount });
  }

  renderPagination() {
    const { pageCount } = this.state;
    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={index => this.getAllCharacters(index)}
        containerClassName={"pagination"}
        subContainerClassName={"pages-pagination"}
        activeClassName={"active"}
      />
    );
  }

  render() {
    return <div>{this.renderPagination()}</div>;
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

const mapDispatchToProps = dispatch => ({
  getAllCharacters: page => dispatch(fetchAllCharacters(page))
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FooterComponent)
);
