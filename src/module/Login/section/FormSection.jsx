import React from "react";
import {
  Container,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { setDataUser } from "src/common/redux/actions/user";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormSection(props) {
  const [username, setUsername] = React.useState("");
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    props.getUserData(username, navigate);
  };
  return (
    <Container fluid className="login-page">
      <Card className="login-form">
        <CardTitle className="login-title">Login</CardTitle>
        <Form onSubmit={(e) => login(e)}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="input your username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="input your password"
              type="password"
            />
          </FormGroup>
          <Button className="login-button" type="submit" color="primary">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (params, navigate) => dispatch(setDataUser(params, navigate)),
  };
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSection);
