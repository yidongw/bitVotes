import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { TextField, Paper, Input } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';

import Layout from './Layout';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
  container: {
    maxWidth: "992px",
    margin: "auto",
    backgroundColor: '#A9A9A9',
    marginTop: "32px",
  },
  paper: {
    padding: '32px',
  },
  options: {
    marginTop: '32px',
  },
  input: {
    margin: '8px',
    display: 'block',
  },
  add: {
    marginLeft: "16px",
  }
});

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      des: "",
      options: {0: ""},
      count: 1,
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOptionChange = (e) => {
    var copy = Object.assign({}, this.state.options);
    copy[e.target.name] = e.target.value;
    this.setState({options: copy})
  }

  addOption = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  handleSubmit = () => {
    console.log(this.state);
    fetch('http://localhost:8080/api/poll/create', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.state)
    })
    .then(res => {
      if (res.status === 200) {
        console.log("ok");
      } else {
        console.log("bad");
      }
    })
  }

  render() {
    const { classes } = this.props;
    var options = [];
    for (let i = 0; i < this.state.count; i ++) {
      options.push(<Input className={classes.input} name={i} onChange={this.handleOptionChange} value={this.state.options[i]}/>)
    }

    return (
      <Layout>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <form noValidate autoComplete="off">
              <TextField
                name="title"
                label="title"
                className={classes.textField}
                value={this.state.title}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                name="des"
                label="description"
                multiline
                rowsMax="12"
                className={classes.textField}
                value={this.state.des}
                onChange={this.handleChange}
                margin="normal"
              />
              <div className={classes.options}>
                <span>Options</span>
                <Button variant="fab" color="secondary" aria-label="Add" className={classes.add} onClick={this.addOption}>
                  <AddIcon />
                </Button>
                {options}
              </div>
              <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                Submit
              </Button>

            </form>
          </Paper>
        </div>
      </Layout>

    );
  }
}

export default withStyles(styles)(Create);
