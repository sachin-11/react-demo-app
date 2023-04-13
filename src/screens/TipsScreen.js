import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listTips } from "../actions/tipsActions";

const TipsScreen = () => {
  const dispatch = useDispatch();

  const tipsList = useSelector((state) => state.tipsList);
  const { loading, error, tips } = tipsList;

  console.log(tipsList)

  useEffect(() => {
    dispatch(listTips());
  }, [dispatch]);

  const deleteHandler = (id) => {
    console.log("delete");
  };

  const createTipsHandler = (product) => {
    //   CREATE tips
    console.log('created')
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Tips</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createTipsHandler}>
            <i className='fas fa-plus'></i> Create Tips
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>CREATED AT</th>
              <th>UPDATED AT</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tips?.data?.map((tip) => (
              <tr key={tip._id}>
                <td>{tip._id}</td>
                <td>{tip.title}</td>
                <td>{tip.description}</td>
                <td>{tip.createdAt}</td>
                <td>{tip.updatedAt}</td>
                <td>
                  <LinkContainer to={`/tips/${tip._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(tip._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TipsScreen;
