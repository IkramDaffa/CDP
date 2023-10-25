import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setDataTodos } from "../../../common/redux/actions/todos";
import { Container, Row, Col, Card, CardText } from "reactstrap";

function ToDoSection(props) {
  useEffect(() => {
    // props.getToDos(1);
    console.log(props.user.toDosData);
  }, []);

  return (
    <Container className="pb-5">
      <h1 className="mt-5">To Do List</h1>
      <Row>
        {props.user.toDosData.map((todo) => {
          return (
            <Fragment key={todo.id}>
              <Col md={4} className="mt-3">
                <Card
                  style={{
                    width: "100%",
                    padding: "20px",
                  }}
                >
                  <CardText style={{ textAlign: "center", fontWeight: "bold" }}>
                    {todo.title}
                  </CardText>
                  <CardText>ID: {todo.id}</CardText>
                  <CardText>
                    Status: {todo.completed ? "Completed" : "Not Completed"}
                  </CardText>
                </Card>
              </Col>
            </Fragment>
          );
        })}
      </Row>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getToDos: (params) => dispatch(setDataTodos(params)),
  };
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoSection);
