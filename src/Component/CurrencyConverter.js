import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default class CurrencyConverter extends React.Component {
  constructor() {
    super();
    
    this.state = {
      override: false,
      trueRate: 1.1,
      fxRate: 0,
      baseCurrency:'EUR',
      convertToCurrency:'USD',
      baseAmount: 0,
      result: 0,
      history:[]
    };
    
    this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
    this.changeConvertToCurrency = this.changeConvertToCurrency.bind(this);
    this.changeBaseAmount = this.changeBaseAmount.bind(this);
    this.changeRate = this.changeRate.bind(this);
    this.addHistory = this.addHistory.bind(this);
    this.getConvertedCurrency = this.getConvertedCurrency.bind(this);
    this.switchCurrencies = this.switchCurrencies.bind(this);
  }

  generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  addHistory(amount){
    this.state.history.push(
      <tr key={this.state.history.length}>
        <td>{Number.parseFloat(this.state.trueRate).toFixed(3)}</td>
        <td>{Number.parseFloat((this.state.override ? this.state.fxRate : this.state.trueRate)).toFixed(3)}</td>
        <td>{this.state.baseAmount} {this.state.baseCurrency}</td>
        <td>{amount} {this.state.convertToCurrency}</td>
      </tr>
    )
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ 
        trueRate: this.state.trueRate +  this.generateRandomNumber(-0.05,0.05),
        override: (Math.abs(this.state.fxRate - this.state.trueRate) < this.state.trueRate * 0.02)
      });
    }, 3000);
  }
  
  changeBaseCurrency(e) {
    this.setState({ baseCurrency: e.target.value});
  }    
  
  changeConvertToCurrency(e) {
    this.setState({
      convertToCurrency: e.target.value
    });
  }
  
  changeBaseAmount(e) {
    this.setState({
      baseAmount: e.target.value
    });
  }

  changeRate(e){
    this.setState({
      fxRate : e.target.value,
      override: (Math.abs(this.state.fxRate - this.state.trueRate) < this.state.trueRate * 0.02)
    })
  }
  
  getConvertedCurrency() {
    let rate = (this.state.override ? this.state.fxRate : this.state.trueRate)
    let amount = Number.parseFloat((this.state.baseCurrency === "USD") ? this.state.baseAmount * rate : this.state.baseAmount / rate).toFixed(3)
    this.setState({
      result : amount 
    })
    this.addHistory( amount)
  }

  switchCurrencies(e) {
    this.setState({
      baseAmount : this.state.result,
      result:this.state.baseAmount,
      baseCurrency : this.state.convertToCurrency,
      convertToCurrency : this.state.baseCurrency
    })
  }
  
  render() {
    const {trueRate,fxRate,baseCurrency,convertToCurrency,baseAmount, override, history, result} = this.state;

    return(
      <Container>
        <Row>
          <h1 style={{color:"#2d7962"}}>Currency Converter</h1>
        </Row>
        <br/>
        <Row>
          <Col>
            <Card className="text-center" body>
              <Row>
                <Col>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>fx rate:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      value={Number.parseFloat(trueRate).toFixed(3)}
                      readOnly/>
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Override fx rate:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      value={fxRate}
                      onChange={this.changeRate} required/>
                    <InputGroup.Append>
                      <InputGroup.Text style={(override)? {backgroundColor: "#2d7962", color:"white"} : {}}>{(override ? "Activated" : "Deactivated" )}</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
              <br/>
              <Row className="ml-1">
                <h3>Convert from: {baseCurrency} to {convertToCurrency}</h3>
              </Row>
              <br/>
              <Row>
                <Col>
                  <InputGroup size="sm" className="mb-3">
                    <FormControl
                      value={baseAmount}
                      onChange={this.changeBaseAmount} required/>
                    <InputGroup.Append>
                      <InputGroup.Text>{baseCurrency}</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
                <Col>
                  <Button onClick={this.switchCurrencies} variant="secondary" >Switch</Button>
                </Col>
                <Col>
                  <InputGroup size="sm" className="mb-3">
                    <FormControl
                      value={result}
                      readOnly/>
                    <InputGroup.Append>
                      <InputGroup.Text>{convertToCurrency}</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
              <br/>
              <Row className="ml-1">
                <Button variant="success" onClick={this.getConvertedCurrency}>Convert</Button>
              </Row>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row><h2>History</h2></Row>
        <br/>
        <Row>
          <Table size="sm" responsive striped bordered>
            <thead>
              <tr>
                <td>Real time fx Rate</td>
                <td>Overrided Rate</td>
                <td>Base Amount</td>
                <td>Converted Amount</td>
              </tr>
            </thead>
            <tbody>
              {history}
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}