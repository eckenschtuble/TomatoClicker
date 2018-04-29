import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);

    this.clickManual = this.clickManual.bind(this);
    this.clickAuto = this.clickAuto.bind(this);

    this.upgradeValue = this.upgradeValue.bind(this);
    this.upgradeMultiplier = this.upgradeMultiplier.bind(this);

    this.purchaseAutoHarvest = this.purchaseAutoHarvest.bind(this);

    this.state = {
      score: 0,
      value: 1,
      multiplier: 1,
      valueUpgradeCost: 10,
      multiplierUpgradeCost: 10,
      autoActive: false,
      autoCost: 10
    }
  };

  clickManual(){
    let score = this.state.score;
    let value = this.state.value;
    let multiplier = this.state.multiplier;
    this.setState({ score: score + (value * multiplier) });
  }

  clickAuto(){
    let active = this.state.autoActive;
    let button = document.getElementById("clickAuto");
    let bar = document.getElementById("progressBar");

    if(active === true){
      button.style.display = 'none';

      $(bar).animate({
        width: "200px"
      }, 3000, function(){
        bar.style.width = '0%';
      });

      setInterval(function(){
        let score = this.state.score;
        let value = this.state.value;
        let multiplier = this.state.multiplier;

        $(bar).animate({
          width: "200px"
        }, 3000, function(){
          bar.style.width = '0%';
        });

        this.setState({ score: score + (value * multiplier) });
      }.bind(this), 3000);
    }
    else{
      alert("Auto harvester is not ready yet!");
    }
  }

  upgradeValue(){
    let score = this.state.score;
    let value = this.state.value;
    let upgradeCost = this.state.valueUpgradeCost;

    if(score >= upgradeCost){
      this.setState({ score: score - upgradeCost });
      this.setState({ value: value + 1});
      this.setState({ valueUpgradeCost: upgradeCost + 10 });
    }
    else{
      alert("Not enough points to purchase upgrade!");
    }
  }

  upgradeMultiplier(){
    let score = this.state.score;
    let multiplier = this.state.multiplier;
    let upgradeCost = this.state.multiplierUpgradeCost;

    if(score >= upgradeCost){
      this.setState({ score: score - upgradeCost });
      this.setState({ multiplier: multiplier + 1});
      this.setState({ multiplierUpgradeCost: upgradeCost + 10 });
    }
    else{
      alert("Not enough points to purchase upgrade!");
    }
  }

  purchaseAutoHarvest(){
    let score = this.state.score;
    let upgradeCost = this.state.autoCost;
    let buttonPurchase = document.getElementById("purchaseAutoHarvest"); 
    let buttonStart = document.getElementById("clickAuto");
    let progressBar = document.getElementById("progressBarContainer"); 

    if(score >= upgradeCost){
      this.setState({ score: score - upgradeCost });
      this.setState({ autoActive: true });
      buttonPurchase.style.display = 'none';
      buttonStart.style.display = 'block';
      progressBar.style.display = 'block';
    }
    else{
      alert("Not enough points to purchase upgrade!");
    }
  }

  render() {
    return (
      <div class="app">
        <div class="scoreDisplay">
          { this.state.score }
        </div>

        <div class="clickHere">
          <div>
            <div id="clickManual">
              <button onClick={ this.clickManual }>Harvest</button>
            </div>

            <div id="purchaseAutoHarvest">
              <button onClick={ this.purchaseAutoHarvest }>Purchase Auto Harvester</button>
              <p>Cost: { this.state.autoCost }</p>
            </div>

            <div id="clickAuto">
              <button onClick={ this.clickAuto }>Start Auto Harvest</button>
            </div>

            <div id="progressBarContainer">
              <div id="progressBar"></div>
            </div>

            <p>{ this.state.value } X { this.state.multiplier }</p>
          </div>
        </div>

        <div class="upgradeMenu">
          <div id="upgradeValue">
            <button onClick={ this.upgradeValue }>Upgrade Value</button>
            <p>Cost: { this.state.valueUpgradeCost }</p>
          </div>

          <div id="upgradeMultiplier">
            <button onClick={ this.upgradeMultiplier }>Upgrade Multiplier</button>
            <p>Cost: { this.state.multiplierUpgradeCost }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
