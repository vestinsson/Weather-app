import { Container, Spinner } from "react-bootstrap";

export const LoadingSpinner = () => (
  <Container
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "200px" }}
  >
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </Container>
);
