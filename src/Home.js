import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';

import { withStyles } from '@material-ui/core/styles';
import Layout from './Layout';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  container: {
    maxWidth: "992px",
    margin: "auto",
    marginTop: "32px",
  },
  detail: {
    display: "inherit",
  },
  optionName: {
    top: "50%",
    display: "inline-table",
  },
  option: {
    display: "-webkit-inline-box",
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
      data1: {address: "1FCmDM6qqdfb3ydLgMNp3e9kuhmhFZF3ns", unspent_tx_count: 0, balance: 0},
      data2: {address: "17sZZ2QonnTjQ9MbBACgZpdpjYD2MS7W7c", unspent_tx_count: 0, balance: 0},
    }
  }

  getData = () => {
    var address = ["1FCmDM6qqdfb3ydLgMNp3e9kuhmhFZF3ns","17sZZ2QonnTjQ9MbBACgZpdpjYD2MS7W7c"];

    var url1 = "https://bch-chain.api.btc.com/v3/address/1FCmDM6qqdfb3ydLgMNp3e9kuhmhFZF3ns";
    var url2 = "https://bch-chain.api.btc.com/v3/address/17sZZ2QonnTjQ9MbBACgZpdpjYD2MS7W7c";

    console.log(url1);
    console.log(url2);

    fetch(url1, {
      method: "GET",
    })
    .then(res => {
      console.log("res2", res);
      return res.json();
    })
    .then(res => {
      console.log("data1");
      console.log("res1", res);
      console.log("res.data", res.data);
      if (res.data) {
        this.setState({data1: res.data})
      }

    });

    setTimeout(this.getData2, 500);

  }

  getData2 = () => {
    var url2 = "https://bch-chain.api.btc.com/v3/address/17sZZ2QonnTjQ9MbBACgZpdpjYD2MS7W7c";


    fetch(url2, {
      method: "GET",
    })
    .then(res => {
      console.log("res3", res);
      return res.json();
    })
    .then(res => {
      console.log("data2");

      if (res.data) {
        this.setState({data2: res.data})
      }
      console.log("data2", res.data);
    });
  }

  componentDidMount() {
    this.getData();
  }

  handleChange = panel => (event, expanded) => {
    console.log(panel);
    console.log(event);
    console.log(expanded);
    console.log(expanded ? panel : false);

    this.setState({
      expanded: expanded ? panel : false,
    });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    console.log(this.state.data);
    return (
      <Layout>
        <div className={classes.container}>

          <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Presidential Campaign 2016</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detail}>
              <Typography>
                Let's choose between the two
              </Typography>
              <List subheader={<ListSubheader>Options</ListSubheader>}>
                <ListItem className={classes.option}>

                  <ListItemText className={classes.optionName} primary="Trump" />
                  <Button variant="fab" color="secondary" aria-label="Add">
                    {this.state.data1.unspent_tx_count}
                  </Button>
                  <Button color="secondary" aria-label="Add">
                    Received: {this.state.data1.balance} satoshi
                  </Button>
                  <ListItemSecondaryAction>
                    {this.state.data1.address}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />

                <ListItem className={classes.option}>
                  <ListItemText className={classes.optionName} primary="Hillary Clinton" />
                  <Button variant="fab" color="secondary" aria-label="Add">
                    {this.state.data2.unspent_tx_count}
                  </Button>
                  <Button color="secondary" aria-label="Add">
                    Received: {this.state.data2.balance} satoshi
                  </Button>
                  <ListItemSecondaryAction>
                    {this.state.data2.address}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Is Bitcoin Cash better than Bitcoin?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                diam eros in elit. Pellentesque convallis laoreet laoreet.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Is Bitcoin going to the moon?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Who is Satoshi Nakamoto?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Home);
