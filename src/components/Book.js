import React from "react";
import { connect } from "react-redux";
import { buyBook } from "../store/bookSlice";

function Book(props) {
  return (
    <div>
      <h1>
        Number books available to buy it from the store - {props.numOfBooks}
      </h1>
      <button onClick={props.buyBook}>buy more book</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfBooks: state.book.numOfBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBook: () => dispatch(buyBook()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
