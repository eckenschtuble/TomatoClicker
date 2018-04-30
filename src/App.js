import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import tomato1 from './img/tomato1.png';
import tomato2 from './img/tomato2.png';
import tomato3 from './img/tomato3.png';
import locked from './img/locked.png';

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
      valueClassic: 1,
      valueCool: 10,
      valueHoly: 100,
      multiplierClassic: 1,
      multiplierCool: 1,
      multiplierHoly: 1,
      valueUpgradeCostClassic: 10,
      valueUpgradeCostCool: 100,
      valueUpgradeCostHoly: 1000,
      multiplierUpgradeCostClassic: 10,
      multiplierUpgradeCostCool: 100,
      multiplierUpgradeCostHoly: 1000,
      autoActiveClassic: false,
      autoActiveCool: false,
      autoActiveHoly: false,
      autoCostClassic: 100,
      autoCostCool: 1000,
      autoCostHoly: 10000
    }
  };

  clickManual(e){
    let score = this.state.score;

    if(e.target.value === 'classic'){
      let value = this.state.valueClassic;
      let multiplier = this.state.multiplierClassic;
      this.setState({ score: score + (value * multiplier) });
    }
    else if(e.target.value === 'cool'){
      let value = this.state.valueCool;
      let multiplier = this.state.multiplierCool;
      this.setState({ score: score + (value * multiplier) });
    }
    else if(e.target.value === 'holy'){
      let value = this.state.valueHoly;
      let multiplier = this.state.multiplierHoly;
      this.setState({ score: score + (value * multiplier) });
    }
    else{
      alert("Harvest is not ready yet!");
    }
  }

  purchaseAutoHarvest(e){
    let score = this.state.score;

    if(e.target.value === 'classic'){
      let upgradeCost = this.state.autoCostClassic;
      let buttonPurchase = document.getElementById("purchaseAutoHarvestClassic"); 
      let buttonStart = document.getElementById("clickAutoClassic");
      let progressBar = document.getElementById("progressBarContainerClassic"); 

      if(score >= upgradeCost){
        this.setState({ score: score - upgradeCost });
        this.setState({ autoActiveClassic: true });
        buttonPurchase.style.display = 'none';
        buttonStart.style.display = 'block';
        progressBar.style.display = 'block';
      }
      else{
        alert("Not enough points to purchase upgrade!");
      }
    }
    else if(e.target.value === 'cool'){
      let upgradeCost = this.state.autoCostCool;
      let buttonPurchase = document.getElementById("purchaseAutoHarvestCool"); 
      let buttonStart = document.getElementById("clickAutoCool");
      let progressBar = document.getElementById("progressBarContainerCool"); 

      if(score >= upgradeCost){
        this.setState({ score: score - upgradeCost });
        this.setState({ autoActiveCool: true });
        buttonPurchase.style.display = 'none';
        buttonStart.style.display = 'block';
        progressBar.style.display = 'block';
      }
      else{
        alert("Not enough points to purchase upgrade!");
      }
    }
    else if(e.target.value === 'holy'){
      let upgradeCost = this.state.autoCostClassic;
      let buttonPurchase = document.getElementById("purchaseAutoHarvestHoly"); 
      let buttonStart = document.getElementById("clickAutoHoly");
      let progressBar = document.getElementById("progressBarContainerHoly"); 

      if(score >= upgradeCost){
        this.setState({ score: score - upgradeCost });
        this.setState({ autoActiveHoly: true });
        buttonPurchase.style.display = 'none';
        buttonStart.style.display = 'block';
        progressBar.style.display = 'block';
      }
      else{
        alert("Not enough points to purchase upgrade!");
      }
    }
    else{
      alert("Upgrade not available!");
    }
  }

  clickAuto(e){
    if(e.target.value === 'classic'){
      let active = this.state.autoActiveClassic;
      let button = document.getElementById("clickAutoClassic");
      let bar = document.getElementById("progressBarClassic");

      if(active === true){
        button.style.display = 'none';

        $(bar).animate({
          width: "200px"
        }, 3000, function(){
          bar.style.width = '0%';
        });

        setInterval(function(){
          let score = this.state.score;
          let value = this.state.valueClassic;
          let multiplier = this.state.multiplierClassic;

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
    else if(e.target.value === 'cool'){
      let active = this.state.autoActiveCool;
      let button = document.getElementById("clickAutoCool");
      let bar = document.getElementById("progressBarCool");

      if(active === true){
        button.style.display = 'none';

        $(bar).animate({
          width: "200px"
        }, 9000, function(){
          bar.style.width = '0%';
        });

        setInterval(function(){
          let score = this.state.score;
          let value = this.state.valueCool;
          let multiplier = this.state.multiplierCool;

          $(bar).animate({
            width: "200px"
          }, 9000, function(){
            bar.style.width = '0%';
          });

          this.setState({ score: score + (value * multiplier) });
        }.bind(this), 9000);
      }
      else{
        alert("Auto harvester is not ready yet!");
      }
    }
    else if(e.target.value === 'holy'){
      let active = this.state.autoActiveHoly;
      let button = document.getElementById("clickAutoHoly");
      let bar = document.getElementById("progressBarHoly");

      if(active === true){
        button.style.display = 'none';

        $(bar).animate({
          width: "200px"
        }, 27000, function(){
          bar.style.width = '0%';
        });

        setInterval(function(){
          let score = this.state.score;
          let value = this.state.valueHoly;
          let multiplier = this.state.multiplierHoly;

          $(bar).animate({
            width: "200px"
          }, 27000, function(){
            bar.style.width = '0%';
          });

          this.setState({ score: score + (value * multiplier) });
        }.bind(this), 27000);
      }
      else{
        alert("Auto harvester is not ready yet!");
      }
    }
    else{
      alert("Upgrade not available!");
    }
  }

  upgradeValue(e){
    let score = this.state.score;

    if(e.target.value === 'classic'){
      let value = this.state.valueClassic;
      let upgradeCost = this.state.valueUpgradeCostClassic;

      if(score >= upgradeCost){
        this.setState({ score: score - upgradeCost });
        this.setState({ valueClassic: value + 1});
        this.setState({ valueUpgradeCostClassic: upgradeCost + 10 });
      }
      else{
        alert("Not enough points to purchase upgrade!");
      }
    }
    else if(e.target.value === 'cool'){
      let value = this.state.valueCool;
      let upgradeCost = this.state.valueUpgradeCostCool;

      if(score >= upgradeCost){
        this.setState({ score: score - upgradeCost });
        this.setState({ valueCool: value + 10});
        this.setState({ valueUpgradeCostCool: upgradeCost + 100 });
      }
      else{
        alert("Not enough points to purchase upgrade!");
      }
    }
    else if(e.target.value === 'holy'){
      let value = this.state.valueHoly;
      let upgradeCost = this.state.valueUpgradeCostHoly;

      if(score >= upgradeCost){
        this.setState({ score: score - upgradeCost });
        this.setState({ valueHoly: value + 100});
        this.setState({ valueUpgradeCostHoly: upgradeCost + 1000 });
      }
      else{
        alert("Not enough points to purchase upgrade!");
      }
    }
    else{
      alert("Upgrade not available!");
    }
  }

  upgradeMultiplier(e){
    let score = this.state.score;

    if(e.target.value === 'classic'){
      let multiplier = this.state.multiplierClassic;
      let upgradeCost = this.state.multiplierUpgradeCostClassic;

      if(score >= upgradeCost){
        this.setState({ score: score - upgradeCost });
        this.setState({ multiplierClassic: multiplier + 1});
        this.setState({ multiplierUpgradeCostClassic: upgradeCost + 10 });
      }
      else{
        alert("Not enough points to purchase upgrade!");
      }
    }
    else if(e.target.value === 'cool'){
      let multiplier = this.state.multiplierCool;
      let upgradeCost = this.state.multiplierUpgradeCostCool;

      if(score >= upgradeCost){
        this.setState({ score: score - upgradeCost });
        this.setState({ multiplierCool: multiplier + 1});
        this.setState({ multiplierUpgradeCostCool: upgradeCost + 100 });
      }
      else{
        alert("Not enough points to purchase upgrade!");
      }
    }
    else if(e.target.value === 'holy'){
      let multiplier = this.state.multiplierHoly;
      let upgradeCost = this.state.multiplierUpgradeCostHoly;

      if(score >= upgradeCost){
        this.setState({ score: score - upgradeCost });
        this.setState({ multiplierHoly: multiplier + 1});
        this.setState({ multiplierUpgradeCostHoly: upgradeCost + 1000 });
      }
      else{
        alert("Not enough points to purchase upgrade!");
      }
    }
    else{
      alert("Upgrade not available!");
    }
  }

  render() {
    return (
      <div class="app">
        <div class="scoreDisplay">
          { this.state.score }
        </div>

        <div class="clickHere">
          <div class="tomato">
            <img src={tomato1} alt="Classic Tomato"/>
            <div class="clickManual">
              <button value="classic" onClick={ this.clickManual }>Harvest</button>
            </div>
            <div id="purchaseAutoHarvestClassic">
              <button value='classic' onClick={ this.purchaseAutoHarvest }>Purchase Auto Harvester</button>
              <p>Cost: { this.state.autoCostClassic }</p>
            </div>
            <div id="clickAutoClassic">
              <button value='classic' onClick={ this.clickAuto }>Start Auto Harvest</button>
            </div>
            <div id="progressBarContainerClassic">
              <div id="progressBarClassic"></div>
            </div>
            <p>{ this.state.valueClassic } X { this.state.multiplierClassic }</p>
          </div>

          <div class="tomato">
            <img src={tomato2} alt="Cool Tomato"/>
            <div class="clickManual">
              <button value='cool' onClick={ this.clickManual }>Harvest</button>
            </div>
            <div id="purchaseAutoHarvestCool">
              <button value='cool' onClick={ this.purchaseAutoHarvest }>Purchase Auto Harvester</button>
              <p>Cost: { this.state.autoCostCool }</p>
            </div>
            <div id="clickAutoCool">
              <button value='cool' onClick={ this.clickAuto }>Start Auto Harvest</button>
            </div>
            <div id="progressBarContainerCool">
              <div id="progressBarCool"></div>
            </div>
            <p>{ this.state.valueCool } X { this.state.multiplierCool }</p>
          </div>

          <div class="tomato">
            <img src={tomato3} alt="Holy Tomato"/>
            <div class="clickManual">
              <button value='holy' onClick={ this.clickManual }>Harvest</button>
            </div>
            <div id="purchaseAutoHarvestHoly">
              <button value='holy' onClick={ this.purchaseAutoHarvest }>Purchase Auto Harvester</button>
              <p>Cost: { this.state.autoCostHoly }</p>
            </div>
            <div id="clickAutoHoly">
              <button value='holy' onClick={ this.clickAuto }>Start Auto Harvest</button>
            </div>
            <div id="progressBarContainerHoly">
              <div id="progressBarHoly"></div>
            </div>
            <p>{ this.state.valueHoly } X { this.state.multiplierHoly }</p>
          </div>
        </div>

        <div class="upgradeMenu">
          <div class="upgradeSubMenu">
            <div class="upgradeValue">
              <button value="classic" onClick={ this.upgradeValue }>Upgrade Value</button>
              <p>Cost: { this.state.valueUpgradeCostClassic }</p>
            </div>
            <div class="upgradeMultiplier">
              <button value="classic" onClick={ this.upgradeMultiplier }>Upgrade Multiplier</button>
              <p>Cost: { this.state.multiplierUpgradeCostClassic }</p>
            </div>
          </div>

          <div class="upgradeSubMenu">
            <div class="upgradeValue">
              <button value="cool" onClick={ this.upgradeValue }>Upgrade Value</button>
              <p>Cost: { this.state.valueUpgradeCostCool }</p>
            </div>
            <div class="upgradeMultiplier">
              <button value="cool" onClick={ this.upgradeMultiplier }>Upgrade Multiplier</button>
              <p>Cost: { this.state.multiplierUpgradeCostCool }</p>
            </div>
          </div>

          <div class="upgradeSubMenu">
            <div class="upgradeValue">
              <button value="holy" onClick={ this.upgradeValue }>Upgrade Value</button>
              <p>Cost: { this.state.valueUpgradeCostHoly }</p>
            </div>
            <div class="upgradeMultiplier">
              <button value="holy" onClick={ this.upgradeMultiplier }>Upgrade Multiplier</button>
              <p>Cost: { this.state.multiplierUpgradeCostHoly }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
