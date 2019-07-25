import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import EditCourtForm from "./EditCourtForm";
import SinglePlayerPage from "../Player/SinglePlayerPage";
import { Card, Button } from "react-bootstrap";
export default class SingleCourtPage extends Component {
  state = {
    court: {},
    reDirectToHome: false,
    players: []
  };

  componentDidMount() {
    axios.get(`/api/courts/${this.props.match.params.courtId}`).then(res => {
      this.setState({ court: res.data });
    });
    axios
      .get(`/api/players/byCourtId/${this.props.match.params.courtId}`)
      .then(res => {
        this.setState({ players: res.data });
      });
  }

  handleDeleteCourt = () => {
    axios.delete(`/api/courts/${this.state.court._id}`).then(() => {
      this.setState({ reDirectToHome: true });
    });
  };

  //Players Component

  getAllPlayers() {
    axios.get(`/api/courts/${this.state.court._id}`).then(res => {
      this.setState({ players: res.data });
    });
  }

  render() {
    if (this.state.reDirectToHome) {
      return <Redirect to="/courts" />;
    }
    let playerArray = this.state.players.map(singlePlayer => {
      return (
        <div>
          
            <Card
              style={{ width: "17rem"}}
            >
              <Card.Img variant="top" src="../dribble.gif" />
              <Card.Body>
                <Card.Title>{singlePlayer.name}</Card.Title>
                <Card.Text>{singlePlayer.bio}</Card.Text>
                <Link to={`/players/${singlePlayer._id}`}>View Player</Link>
              </Card.Body>
            </Card>

            {/* {singlePlayer.name} */}

            {/* </Link> */}
        </div>
      );
    });
    return (
      <div>
        <div id='background'>
        <h1>Single Court:</h1>
        <Link id="text" to="/courts">
          <h2>Return To All Courts</h2>
        </Link>

        <div className="court-details">
          <h2>Court Name:{this.state.court.gymName} </h2>
          <h3> Address: {this.state.court.address}</h3>
          <p>Number of Players Needed: {this.state.court.numberOfPlayers}</p>
          <p>Entry Price: ${this.state.court.entryPrice}</p>
        </div>
      </div>
        <div className="buttons">
          <Link id="text" to={`/courts/${this.state.court._id}/edit`}>
            <Button variant="success">Edit Court Details </Button>
          </Link>
          <Button variant="danger" onClick={this.handleDeleteCourt}>
            Delete Court
          </Button>
        </div>
        <br />
        <br />
        <br />
        <hr />

        <h2>View Players Signed Up To Play:</h2>
        <Link to={`/player/${this.state.court._id}/create`}>
          <h2>Add A Player</h2>
        </Link>

        <div className="player-list-conatiner">{playerArray}</div>
      </div>
    );
  }
}
