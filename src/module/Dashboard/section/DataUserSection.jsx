import { Container } from "reactstrap";
import { connect } from "react-redux";
import { Table } from "reactstrap";

function DataUserSection(props) {
  return (
    <Container>
      <h1>User Data</h1>
      <Table hover responsive striped>
        <thead>
          <tr className="table-primary">
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.user.userData.name}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{props.user.userData.username}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{props.user.userData.email}</td>
          </tr>
          <tr className="table-warning">
            <th colSpan={2}>Address</th>
          </tr>
          <tr>
            <td>Street</td>
            <td>{props.user.userData.address.street}</td>
          </tr>
          <tr>
            <td>Suite</td>
            <td>{props.user.userData.address.suite}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{props.user.userData.address.city}</td>
          </tr>
          <tr>
            <td>Zipcode</td>
            <td>{props.user.userData.address.zipcode}</td>
          </tr>
          <tr>
            <td>Geo</td>
            <td>
              {props.user.userData.address.geo.lat},{" "}
              {props.user.userData.address.geo.lng}
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{props.user.userData.phone}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>{props.user.userData.website}</td>
          </tr>
          <tr className="table-warning">
            <th colSpan={2}>Company</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>{props.user.userData.company.name}</td>
          </tr>
          <tr>
            <td>Catch Phrase</td>
            <td>{props.user.userData.company.catchPhrase}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, mapDispatchToProps)(DataUserSection);
