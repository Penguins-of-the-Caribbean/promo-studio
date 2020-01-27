import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import View from './components/View';
import Footer from './components/Footer';
import Taskbar from './components/Taskbar';
import AddButton from './components/AddButton';
import List from './components/List/';
import ComponentSelector from './components/ComponentSelector';
import ComponentBuilder from './components/ComponentBuilder';
import ExpComp from './components/ExperienceComponent';
import SailingDate from './components/SailingDate';
import DeparturePort from './components/DeparturePort';
import Pill from './components/Pill';
import OtherPill from './components/OtherPill';
import TextField from './components/TextField';
import Button from './components/Button';
import Days from './components/Days';
import Market from './components/Market';
import { CodeBlock, Promos } from './components/Components';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          id: 'heroBanner',
          name: 'Hero Banner',
          selected: false,
          data: {
            hb_parent: '',
            hb_header: '',
            hb_subtext: '',
            hb_disclaimer: '',
            hb_textAlignment: 'center',
            hb_desktopImage: '',
            hb_mobileImage: '',
            hb_hShift: '0',
            hb_vShift: '0',
            hb_blur: '0',
            hb_color: '#1c0c45'
          }
        },
        {
          id: 'countDownBanner',
          name: 'Countdown Banner',
          selected: false,
          data:{
            cd_parent: '.hero-image-container',
            cd_timerText: '',
            cd_timerStartDate: '',
            cd_timerStartTime: '',
            cd_timerEndDate: '',
            cd_timerEndTime: '',
            cd_timerDst: false,
            cd_timerShowDays: false,
            cd_timerShowDaysLast: '',
            cd_timerShowDaysNumber: 2,
            cd_timerShowDaysDays: '',
            cd_timerReverseLayout: false,
            cd_markets: {
              aus: false,
              deu: false,
              gbr: false,
              esp: false,
              irl: false,
              ita: false,
              lac: false,
              mex: false,
              nor: false,
              sgp: false,
              swe: false,
              values: []
            },
            cd_textFields:{
              textField:{
                text:{
                  text: '',
                  textSize: '',
                  textAlign: 'center'
                },
                subText:{
                  text: '',
                  textSize: '',
                  textAlign: 'center'
                }
              },
              values: []
            }
          }
        }, 
        {
          id: 'pills',
          name: 'Pills',
          parent: '.itinerary-card-component',
          selected: false,
          pills:[],
          data: {
            pillDetails: {
              pl_color: '#FF0000',
              pl_text: '',
              pl_class: ''
            },
            pillCriteria: {
              pl_shipCodes:{
                AD: false,
                AL: false,
                AN: false,
                BR: false,
                EN: false,
                EX: false,
                FR: false,
                GR: false,
                HM: false,
                ID: false,
                JW: false, 
                LB: false,
                MA: false,
                MJ: false,
                NE: false,
                NV: false,
                OA: false,
                OV: false,
                OY: false,
                QN: false,
                RD: false,
                RH: false,
                SR: false,
                SC: false,
                SY: false,
                VI: false,
                VY: false,
                value:[]
              },
              pl_promoDates: [],
              pl_sailingDates: [],
              pl_numberOfNights: [0, 0],
              pl_departurePorts: [],
            },
            pillExclusions: {
              pl_shipCodes: {
                AD: false,
                AL: false,
                AN: false,
                BR: false,
                EN: false,
                EX: false,
                FR: false,
                GR: false,
                HM: false,
                ID: false,
                JW: false, 
                LB: false,
                MA: false,
                MJ: false,
                NE: false,
                NV: false,
                OA: false,
                OV: false,
                OY: false,
                QN: false,
                RD: false,
                RH: false,
                SR: false,
                SC: false,
                SY: false,
                VI: false,
                VY: false,
                value:[]
              },
              pl_numberOfNights: [0, 0],
              pl_departurePorts: [],
              pl_destinationPorts: [],
              pl_departureDates: [],
              pl_otherPills: []
            }
          }
        },
        {
          id: 'peopleWatching',
          name: 'People Watching',
          selected: false,
          data: {}
        },
        {
          id: 'exitPopup',
          name: 'Exit Popup',
          parent: '.reveal-overlay',
          selected: false,
          data: {
            bannerDetails:{
              ep_backgroundColor: '#ffffff',
              ep_offerText: '',
              ep_offerSubText: '',
              ep_textColor: '#ce0f69'
            },
            continueBtn:{ 
              ep_text: '',
              ep_textColor: '#15264C',
              ep_backgroundColor: '#febd11',
            },
            cancelBtn:{
              ep_text: '',
              ep_textColor: '#000000',
              ep_backgroundColor: '#ffffff',
              ep_borderColor: '#000000'
            },
            clock:{
              ep_hours: '',
              ep_minutes: '',
              ep_seconds: '',
              ep_hoursLeft: '',
              ep_daysLeft: '',
              ep_textColor: '#ce0f69'
            },
            countDown:{
              ep_dateStart: '',
              ep_timeStart: '',
              ep_dateEnd: '',
              ep_timeEnd: ''
            },
            countries:{
              aus: false,
              deu: false,
              gbr: false,
              esp: false,
              irl: false,
              ita: false,
              lac: false,
              mex: false,
              nor: false,
              sgp: false,
              swe: false,
              value: []
            },
            misc:{
              dst: false,
              showDays: false,
              value: []
            }
          }
        },
        {
          id: 'ksf',
          name: 'Kids Sail Free',
          selected: false,
          data: {}
        },
        {
          id: 'promoCode',
          name: 'Promo Code',
          selected: false,
          data: {}
        },
        {
          id: 'iobd',
          name: 'IOBD',
          selected: false,
          data: {}
        },
        {
          id: 'heroBannerNew',
          name: 'Hero Banner New',
          selected: false,
          data: {
            hb_parent: '',
            hb_header: {
              text: 'Header text here',
              textSize: '38px',
              textAlign: 'center',
              textColor: '#ffffff'
            },
            hb_subtext: {
              text: 'Subtext text here',
              textSize: '38px',
              textAlign: 'center',
              textColor: '#ffffff'
            },
            hb_disclaimer: {
              text: 'Disclaimer text here',
              textSize: '38px',
              textAlign: 'center',
              textColor: '#ffffff'
            },
            hb_textFieldAlign: 'center',
            hb_desktopImage: 'http://sb.monetate.net/img/1/388/2626401.jpg',
            hb_mobileImage: 'http://sb.monetate.net/img/1/388/2626402.jpg',
            hb_hShift: '0',
            hb_vShift: '0',
            hb_blur: '0',
            hb_color: '#1c0c45'
          }
        },
      ],
      activeMarkets: {
        format: {
          name: '',
          domain: '',
        },
        list: [
          {
            name: 'ALL',
          },
          {
            name: 'AUS',
            domain: '',
          },
          {
            name: 'DEU',
            domain: ''
          },
          {
            name: 'GBR',
            domain: ''
          },
          {
            name: 'ESP',
            domain: ''
          },
          {
            name: 'IRL',
            domain: ''
          },
          {
            name: 'ITA',
            domain: ''
          },
          {
            name: 'LAC',
            domain: ''
          },
          {
            name: 'MEX',
            domain: ''
          },
          {
            name: 'NOR',
            domain: ''
          },
          {
            name: 'SGP',
            domain: ''
          },
          {
            name: 'SWE',
            domain: ''
          }
        ]
      },
      promos: {
        promo:{
          type: '',
          content: '',
          criteria: {
            market: '',
            ships: [],
            numberOfNights: [],
            promoDates: [],
            sailingDates: [],
            departurePorts: [],
            destinationPorts: [],
          }
        },
        values: [],
        days: []
      }
    };

    //HERO BANNER
    this.updateHeroBannerData = this.updateHeroBannerData.bind(this);
    this.updateHeroBannerDataFields = this.updateHeroBannerDataFields.bind(this);
    this.updateHeroBannerShadowValues = this.updateHeroBannerShadowValues.bind(this);

    //COUNT-DOWN
    this.updateCountDownData = this.updateCountDownData.bind(this);
    this.updateCountDownMarkets = this.updateCountDownMarkets.bind(this);
    this.updateCountDownMarketCheckBoxes = this.updateCountDownMarketCheckBoxes.bind(this);
    this.setCountDownInputValue = this.setCountDownInputValue.bind(this);
    this.setCountDownTextFieldValue = this.setCountDownTextFieldValue.bind(this);
    this.addCountDownTextField = this.addCountDownTextField.bind(this);
    this.updateCountDownTextFieldValue = this.updateCountDownTextFieldValue.bind(this);
    this.createCountDownTextFiendValues = this.createCountDownTextFiendValues.bind(this);
    this.deleteCountDownTextField = this.deleteCountDownTextField.bind(this);
    this.editCountDownTextField = this.editCountDownTextField.bind(this);
    this.setCountDownCountries = this.setCountDownCountries.bind(this);
    this.updateCountDownCountries = this.updateCountDownCountries.bind(this);

    //PILLS
    this.setPillDetails = this.setPillDetails.bind(this);
    this.updatePillDetailsValue = this.updatePillDetailsValue.bind(this);
    this.setPillCriteria = this.setPillCriteria.bind(this);
    this.updatePillShips = this.updatePillShips.bind(this);
    this.addPillCriteriaDates = this.addPillCriteriaDates.bind(this);
    this.updatePillCriteriaDates = this.updatePillCriteriaDates.bind(this);
    this.deletePillCriteriaDates = this.deletePillCriteriaDates.bind(this);
    this.setPillNumberOfNights = this.setPillNumberOfNights.bind(this);
    this.setPillDeparturePorts = this.setPillDeparturePorts.bind(this);
    this.updatePillCriteriaDeparturePorts = this.updatePillCriteriaDeparturePorts.bind(this);
    this.deletePillDeparturePort = this.deletePillDeparturePort.bind(this);
    this.setPillOtherPillExclusion = this.setPillOtherPillExclusion.bind(this);
    this.updatePillOtherPillExclusion = this.updatePillOtherPillExclusion.bind(this);
    this.deletePillOtherPillExclusion = this.deletePillOtherPillExclusion.bind(this);
    this.createNewPill = this.createNewPill.bind(this);
    this.updateExistingPills = this.updateExistingPills.bind(this);
    this.editExistingPill = this.editExistingPill.bind(this);
    this.deleteExistingPill = this.deleteExistingPill.bind(this);

    //PEOPLE WATCHING

    //EXIT POP-UP
    this.exitPopupUpdateValue = this.exitPopupUpdateValue.bind(this);
    this.exitPopupSetValue = this.exitPopupSetValue.bind(this);
    this.exitPopUpUpdateCountries = this.exitPopUpUpdateCountries.bind(this);
    this.exitPopUpUpdateMisc = this.exitPopUpUpdateMisc.bind(this);

    //KSF
    //IOBD

    //PROMO CALENDAR
    this.renderDaysPerMonth = this.renderDaysPerMonth.bind(this);
    this.renderMarkets = this.renderMarkets.bind(this);
    this.setMarkets = this.setMarkets.bind(this);
  }

  //HERO BANNER
  updateHeroBannerData(e){
    let cloneComponents = [...this.state.components];
    let comp =  cloneComponents[0];

    comp.data[e.target.id] = e.target.value;

    this.setState({components: cloneComponents});
  }
  
  updateHeroBannerDataFields(target){
    return this.state.components[0].data[target];
  }

  updateHeroBannerShadowValues(target){
    return this.state.components[0].data[target];
  }

  //COUNT DOWN 
  updateCountDownData(e){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[1];

    comp.data[e.target.id] = e.target.value;
    this.setState({components: cloneComponents});
  }

  updateCountDownMarkets(e){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[1];
    
    if(e.target.checked  === true){
      comp.data.cd_market[e.target.value] = true;
      if(comp.data.cd_market.value.indexOf(e.target.value) === -1){
        comp.data.cd_market.value.push(`'${e.target.value}'`);
      }
    }else if(e.target.checked === false){
      comp.data.cd_market[e.target.value] = false;
      comp.data.cd_market.value.splice(comp.data.cd_market.value.indexOf(`'${e.target.value}'`), 1);
    }

    this.setState({components: cloneComponents});
  }
  
  updateCountDownMarketCheckBoxes(target){
      return this.state.components[1].data.cd_market[target];
  }

  setCountDownInputValue(target){
    return this.state.components[1].data[target];
  }

  setCountDownCountries(e){
    let cloneComponents = [...this.state.components];

    cloneComponents[1].data.cd_markets[e.target.value] = e.target.checked;

    if(e.target.checked === true){
      cloneComponents[1].data.cd_markets.values.push("'"+e.target.value+"'");
    }else{
      cloneComponents[1].data.cd_markets.values.splice(e.target.value, 1);
    }

    this.setState({components: cloneComponents});
  }

  updateCountDownCountries(market){
    return this.state.components[1].data.cd_markets[market];
  }

  setCountDownTextFieldValue(e, category, dataType){
    let cloneComponents = [...this.state.components];

    cloneComponents[1].data.cd_textFields.textField[category][dataType] = e.target.value;

    this.setState({components: cloneComponents});
  }

  updateCountDownTextFieldValue(category, dataType){
    return this.state.components[1].data.cd_textFields.textField[category][dataType];
  }

  addCountDownTextField(){
    let cloneComponents = [...this.state.components];
    let textFieldValues = JSON.parse(JSON.stringify(this.state.components[1].data.cd_textFields.textField));
    //let textFieldValues = {...this.state.components[1].data.cd_textFields.textField};

    cloneComponents[1].data.cd_textFields.values.push(textFieldValues);
    cloneComponents[1].data.cd_textFields.textField = { text: {text:'', textSize: '', textAlign: 'center'}, subText: {text:'', textSize: '', textAlign: 'center'}};

    this.setState({components: cloneComponents});
  }

  editCountDownTextField(index){
    let cloneComponents = [...this.state.components];
  
    cloneComponents[1].data.cd_textFields.textField = {
      text:{
        text: cloneComponents[1].data.cd_textFields.values[index].text.text,
        textSize: cloneComponents[1].data.cd_textFields.values[index].text.textSize,
        textAlign: cloneComponents[1].data.cd_textFields.values[index].text.textAlign
      },
      subText:{
        text: cloneComponents[1].data.cd_textFields.values[index].subText.text,
        textSize: cloneComponents[1].data.cd_textFields.values[index].subText.textSize,
        textAlign: cloneComponents[1].data.cd_textFields.values[index].subText.textAlign
      }
    };

    cloneComponents[1].data.cd_textFields.values.splice(index, 1);

    this.setState({components: cloneComponents});

  }

  deleteCountDownTextField(index){
    let cloneComponents = [...this.state.components];
    cloneComponents[1].data.cd_textFields.values.splice(index, 1);
    this.setState({components: cloneComponents}); 
  }

  countDownBannerCodeSnippet(){
    let textFields = this.state.components[1].data.cd_textFields.values.map((el, i)=>{
      return `
          {
            text: {
              text: '${el.text.text}',
              textSize: '${el.text.textSize}px',
              textAlign: '${el.text.textAlign}'
            },
            ${el.subText.text.length > 0 ? 
            `subtext: {
              text: '${el.subText.text}',
              textSize: '${el.subText.textSize}px',
              textAlign: '${el.subText.textAlign}'
            }`: '//no subtext'}
          }`;
    });

    return `countDownBanner({ 
          parent: '${this.state.components[1].data.cd_parent}', 
          ${this.state.components[1].data.cd_timerText.length > 0 ?
            `timer: {
              text: '${this.state.components[1].data.cd_timerText}',
              start: '${this.state.components[1].data.cd_timerStartDate} ${this.state.components[1].data.cd_timerStartTime}:00',
              end: '${this.state.components[1].data.cd_timerEndDate} ${this.state.components[1].data.cd_timerEndTime}:00',
              dst: ${this.state.components[1].data.cd_timerDst},
              showDays: ${this.state.components[1].data.cd_timerShowDays !== '' ? `{
                last: '${this.state.components[1].data.cd_timerShowDaysLast}',
                number: ${this.state.components[1].data.cd_timerShowDaysNumber},
                days: '${this.state.components[1].data.cd_timerShowDaysDays}'
              },`: ''}
              reverseLayout: ${this.state.components[1].data.cd_timerReverseLayout}
            },`: '//no timer'}
          countries: [${this.state.components[1].data.cd_markets.values.join(', ')}],
          textFields:[ ${textFields.join(', ')}
          ]
        });`
  }

  createCountDownTextFiendValues(){
    return(
      this.state.components[1].data.cd_textFields.values.map((textField, i)=>{
        return <TextField 
                  key={i}
                  index={i}
                  delete={this.deleteCountDownTextField}
                  edit={this.editCountDownTextField}
                  textField={textField}
              />
      })
    )
  }

  //PILLS
  updatePillAmount(){
    return this.state.components[2].pills.length;
  }

  setPillDetails(e){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];

    comp.data.pillDetails[e.target.id] = e.target.value;

    this.setState({components: cloneComponents});
  }

  updatePillDetailsValue(target){
    return this.state.components[2].data.pillDetails[target];
  }

  setPillCriteria(e){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];
    
    if(e.target.checked  === true){
      comp.data[e.target.dataset.type].pl_shipCodes[e.target.id] = true;
      if(comp.data[e.target.dataset.type].pl_shipCodes.value.indexOf(e.target.id) === -1){
        comp.data[e.target.dataset.type].pl_shipCodes.value.push(`'${e.target.id}'`);
      }
    }else if(e.target.checked === false){
      comp.data[e.target.dataset.type].pl_shipCodes[e.target.id] = false;
      comp.data[e.target.dataset.type].pl_shipCodes.value.splice(comp.data[e.target.dataset.type].pl_shipCodes.value.indexOf(`'${e.target.id}'`), 1);
    }

    this.setState({components: cloneComponents});
  }

  updatePillShips(type, target){
    return this.state.components[2].data[type].pl_shipCodes[target];
  }

  addPillCriteriaDates(dataType, target, date){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];

    comp.data[dataType][target].push(date);

    this.setState({components: cloneComponents});
  }

  updatePillCriteriaDates(dataType, target){
    return(
      this.state.components[2].data[dataType][target].map((comp, i)=>{
        return  <SailingDate 
                  key={i} 
                  startDate={comp.start} 
                  endDate={comp.end} 
                  delete={this.deletePillCriteriaDates} 
                  target={target}
                  dataType={dataType}>
                </SailingDate>
      })
    );
  }

  deletePillCriteriaDates(i, target, dataType){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];

    comp.data[dataType][target].splice(i, 1);
    this.setState({components: cloneComponents});
  }

  setPillNumberOfNights(e){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];

    comp.data[e.target.dataset.type][e.target.className][Number(e.target.id)] = Number(e.target.value);
    this.setState({components: cloneComponents});
  }

  setPillDeparturePorts(dataType, target, value){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];

    comp.data[dataType][target].push(value);
    this.setState({components: cloneComponents});
  }

  updatePillCriteriaDeparturePorts(dataType, portType){
    return(
      this.state.components[2].data[dataType][portType].map((port, i)=>{
        return <DeparturePort 
                  key={i} 
                  delete={this.deletePillDeparturePort}
                  port={port}
                  dataType={dataType}
                  portType={portType}>
                </DeparturePort>
      })
    )
  }

  deletePillDeparturePort(dataType, portType, i){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];

    comp.data[dataType][portType].splice(i, 1);
    this.setState({components: cloneComponents});
  }

  setPillOtherPillExclusion(value){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];

    comp.data.pillExclusions.pl_otherPills.push(value);
    this.setState({components: cloneComponents});
  }

  updatePillOtherPillExclusion(){
    return(
      this.state.components[2].data.pillExclusions.pl_otherPills.map((pill, i)=>{
        return <OtherPill key={i} pill={pill} delete={this.deletePillOtherPillExclusion}></OtherPill>
      })
    );
  }

  deletePillOtherPillExclusion(i){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];

    comp.data.pillExclusions.pl_otherPills.splice(i, 1);
    this.setState({Components: cloneComponents});
  }

  createNewPill(){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];
    let newPill = JSON.parse(JSON.stringify(comp.data));

    comp.pills.push(newPill);

    for(const prop in comp.data.pillDetails){
      comp.data.pillDetails[prop] = '';
    }

    for(const prop in comp.data.pillCriteria.pl_shipCodes){
      comp.data.pillCriteria.pl_shipCodes[prop] = false;
      if(prop === 'value') comp.data.pillCriteria.pl_shipCodes[prop] = []; 
    }

    for(const prop in comp.data.pillExclusions.pl_shipCodes){
      comp.data.pillExclusions.pl_shipCodes[prop] = false;
      if(prop === 'value') comp.data.pillExclusions.pl_shipCodes[prop] = []; 
    }

    comp.data.pillCriteria.pl_promoDates = [];
    comp.data.pillCriteria.pl_sailingDates = [];
    comp.data.pillCriteria.pl_numberOfNights = [0, 0];
    comp.data.pillCriteria.pl_departurePorts = [];

    comp.data.pillExclusions.pl_numberOfNights = [0, 0];
    comp.data.pillExclusions.pl_departurePorts = [];
    comp.data.pillExclusions.pl_destinationPorts = [];
    comp.data.pillExclusions.pl_departureDates = [];
    comp.data.pillExclusions.pl_otherPills = [];

    this.setState({components: cloneComponents});
  }

  editExistingPill(i){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[2];

    comp.data.pillDetails.pl_color = comp.pills[i].pillDetails.pl_color;
    comp.data.pillDetails.pl_text = comp.pills[i].pillDetails.pl_text;
    comp.data.pillDetails.pl_class = comp.pills[i].pillDetails.pl_class;

    for(const prop in comp.data.pillCriteria.pl_shipCodes){
      comp.data.pillCriteria.pl_shipCodes[prop] = comp.pills[i].pillCriteria.pl_shipCodes[prop];
    }

    for(const prop in comp.data.pillExclusions.pl_shipCodes){
      comp.data.pillExclusions.pl_shipCodes[prop] = comp.pills[i].pillExclusions.pl_shipCodes[prop];
    }

    comp.data.pillCriteria.pl_promoDates = comp.pills[i].pillCriteria.pl_promoDates;
    comp.data.pillCriteria.pl_sailingDates = comp.pills[i].pillCriteria.pl_sailingDates;
    comp.data.pillCriteria.pl_numberOfNights = comp.pills[i].pillCriteria.pl_numberOfNights;
    comp.data.pillCriteria.pl_departurePorts = comp.pills[i].pillCriteria.pl_departurePorts;

    comp.data.pillExclusions.pl_numberOfNights = comp.pills[i].pillExclusions.pl_numberOfNights;
    comp.data.pillExclusions.pl_departurePorts = comp.pills[i].pillExclusions.pl_departurePorts;
    comp.data.pillExclusions.pl_destinationPorts = comp.pills[i].pillExclusions.pl_destinationPorts;
    comp.data.pillExclusions.pl_departureDates = comp.pills[i].pillExclusions.pl_departureDates;
    comp.data.pillExclusions.pl_otherPills = comp.pills[i].pillExclusions.pl_otherPills;

    //REMOVE PILL FROM PILLS ARRAY
    comp.pills.splice(i, 1);

    this.setState({components: cloneComponents});
  }

  deleteExistingPill(i){
    let cloneComponents = [...this.state.components];
    cloneComponents[2].pills.splice(i, 1);
    this.setState({components: cloneComponents});
  }

  updateExistingPills(){
    return(
      this.state.components[2].pills.map((pill , i)=>{
        return <Pill 
                  key={i}
                  index={i} 
                  bgColor={pill.pillDetails.pl_color} 
                  text={pill.pillDetails.pl_text}
                  edit={this.editExistingPill}
                  delete={this.deleteExistingPill}
                />
      })
    );
  }

  pillsCodeSnippet(){
    let code = '';

    function processDates(pill, category, target){

      let str = '';

      pill[category][target].forEach((date)=>{
        str += `
                {
                  startDate: '${date.start}',
                  endDate: '${date.end}'
                },
                `
      });
      return str;
    }

    this.state.components[2].pills.forEach((pill, i)=>{
      let codeSnipet = `
        pills({
          pillDetails: {
            color: '${pill.pillDetails.pl_color}',
            text: '${pill.pillDetails.pl_text}',
            class: '${pill.pillDetails.pl_class}'
          },
          pillCriteria: {
            shipCodes: [${pill.pillCriteria.pl_shipCodes.value.join(', ')}],
            promoDates: [${processDates(pill, 'pillCriteria', 'pl_promoDates')}
            ],
            sailingDates: [${processDates(pill, 'pillCriteria', 'pl_sailingDates')}
            ],
            numberOfNights: [${pill.pillCriteria.pl_numberOfNights[0]}, ${pill.pillCriteria.pl_numberOfNights[1]}],
            departurePorts: [${pill.pillCriteria.pl_departurePorts.join(', ')}],
          },
          pillExclusions: {
            shipCodes: [${pill.pillExclusions.pl_shipCodes.value.join(', ')}],
            numberOfNights: [${pill.pillExclusions.pl_numberOfNights[0]}, ${pill.pillExclusions.pl_numberOfNights[1]}],
            departurePorts: [${pill.pillExclusions.pl_departurePorts.join(', ')}],
            destinationPorts: [${pill.pillExclusions.pl_destinationPorts.join(', ')}],
            departureDates: [${processDates(pill, 'pillExclusions', 'pl_departureDates')}
            ],
            otherPills: [${pill.pillExclusions.pl_otherPills.join(', ')}]
          }
        });
      `;
      code += codeSnipet;
    });

    return code;

  }

  //EXIT POPUP
  exitPopupUpdateValue(e, category){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[4];

    comp.data[category][e.target.id] = e.target.value;

    this.setState({components: cloneComponents});
  }

  exitPopupSetValue(target, category){
    return this.state.components[4].data[category][target];
  }

  exitPopUpUpdateCountries(e){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[4];
    
    if(e.target.checked  === true){
      comp.data.countries[e.target.value] = true;
      if(comp.data.countries.value.indexOf(e.target.value) === -1){
        comp.data.countries.value.push(`'${e.target.value}'`);
      }
    }else if(e.target.checked === false){
      comp.data.countries[e.target.value] = false;
      comp.data.countries.value.splice(comp.data.countries.value.indexOf(`'${e.target.value}'`), 1);
    }

    this.setState({components: cloneComponents});
  }

  exitPopUpUpdateMisc(e){
    let cloneComponents = [...this.state.components];
    let comp = cloneComponents[4];

    if(e.target.checked === true){
      comp.data.misc[e.target.value] = true;
    }else if(e.target.checked === false){
      comp.data.misc[e.target.value] = false;
    }

    this.setState({components: cloneComponents});
  }
  //

  //PROMOTIONS
  renderPromos(){
    return(
      <div>
        Promo Calendar
      </div>
    )
  }

  createPromo(){
    //code
  }

  readPromo(){
    //code
  }

  updatePomo(){
    //code
  }

  deletePromo(){
    //code
  }

  renderMarkets(){
    let active = this.state.activeMarkets.list.filter((market, i)=>{
      return market.active === true;
    });

    return(
        active.map((active, i)=>{
          return active.name !== 'ALL' ? 
                <Market key={i} name={active.name}></Market> :
                null
        })
    )
  }

  setMarkets(e){
    let cloneMarkets = {...this.state.activeMarkets};
    let list = [];

    if(e.target.name === 'ALL'){
      list = cloneMarkets.list.map((market)=>{
        return {name: market.name, domain: market.domain, active: e.target.checked}
      });
    }else{
      list = cloneMarkets.list.map((market)=>{
        return  market.name === e.target.name ? 
                {name: market.name, domain: market.domain, active: e.target.checked} :
                market;
      });
    }

    cloneMarkets.list = list;
    this.setState({activeMarkets: cloneMarkets});
  }

  renderDaysPerMonth(year, month){
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    function toDayName(day){
      let dayName = '';
      switch(day){
        case 0:
          dayName = 'Sun';
        break;
        case 1:
          dayName = 'Mon';
        break;
        case 2:
          dayName = 'Tue';
        break;
        case 3:
          dayName = 'Wed';
        break;
        case 4:
          dayName = 'Thr';
        break;
        case 5:
          dayName = 'Fri';
        break;
        case 6:
          dayName = 'Sat';
        break;
        default:
          return 'Day'
      }

      return dayName;
    }

    return(
      days.map((day, i)=>{
      return <Days key={i} dayName={toDayName(day.getDay())} dayNumber={i+1}></Days>
      })
    )
  }

  //NAVIGATION LOGIC
  populateComponentSelector(components){
    return components.map((component, i)=>{
      return (
        <ExpComp 
          key={i} 
          check={(e)=>{this.addSelectedComponents(e, i)}} 
          isChecked={this.checkSelectedComponent(this.state.components[i])}
        >
          {component.name}
        </ExpComp>
      );
    });
  }
  
  addSelectedComponents(e, i){
    
    let cloneComponents = [...this.state.components];
    
    if(e.target.checked === true){
      cloneComponents[i].selected = true;
    }else if(e.target.checked ===  false){
      cloneComponents[i].selected = false;
    }
    
    this.setState({components: cloneComponents});
    
  }
  
  checkSelectedComponent(component){
    if(component.selected === true){
      return true;
    }else{
      return false;
    }
  }
  
  componentSelectorAuth(){
    let values = this.state.components.map((comp)=>{
      return comp.selected;
    });

    if(values.indexOf(true) !== -1){
      return true;
    }else{
      return false;
    }

  }

  componentSelectorData(){

    let components = {};

    this.state.components.forEach((comp)=>{
      if(comp.selected === true){
        Object.assign(components[comp.id] = true);
      }
    });

    return components;

  }

  generateCodeSnippet(){
    let code = '';
    
    let codeSnippets = {
      heroBanner: `
      init('${this.state.components[0].data.hb_parent}', function(){

        heroBanner(
          '${this.state.components[0].data.hb_parent}',
          '${this.state.components[0].data.hb_header}',
          '${this.state.components[0].data.hb_subtext}', 
          '${this.state.components[0].data.hb_textAlignment}',
          [
            '${this.state.components[0].data.hb_desktopImage}',
            '${this.state.components[0].data.hb_mobileImage}'
          ],
          {
  
              hShift: '${this.state.components[0].data.hb_hShift}px',
              vShift: '${this.state.components[0].data.hb_vShift}px',
              blur:   '${this.state.components[0].data.hb_blur}px',
              color:  '${this.state.components[0].data.hb_color}',
          },
          {
              hShift: '${this.state.components[0].data.hb_hShift}px',
              vShift: '${this.state.components[0].data.hb_vShift}px',
              blur:   '${this.state.components[0].data.hb_blur}px',
              color:  '${this.state.components[0].data.hb_color}',
          }
        );

      });`,

      countDownBanner: `
      init('${this.state.components[1].data.cd_parent}', function(){

        ${this.countDownBannerCodeSnippet()}
        
      });`,

      pills: `
      init('${this.state.components[2].parent}', function(){
          ${this.pillsCodeSnippet()}
      });`,

      peopleWatching: '',

      exitPopup:`
      init('${this.state.components[4].parent}', function(){

        exitPopUp({
          bannerDetails:{
            backgroundColor: '${this.state.components[4].data.bannerDetails.ep_backgroundColor}',
            offerText: '${this.state.components[4].data.bannerDetails.ep_offerText}',
            offerSubText: '${this.state.components[4].data.bannerDetails.ep_offerText}',
            textColor: '${this.state.components[4].data.bannerDetails.ep_textColor}',
          },
          continueBtn:{
            text: '${this.state.components[4].data.continueBtn.ep_text}',
            textColor: '${this.state.components[4].data.continueBtn.ep_textColor}',
            backgroundColor: '${this.state.components[4].data.continueBtn.ep_backgroundColor}',
          },
          cancelBtn:{
            text: '${this.state.components[4].data.cancelBtn.ep_text}',
            textColor: '${this.state.components[4].data.cancelBtn.ep_textColor}',
            backgroundColor: '${this.state.components[4].data.cancelBtn.ep_backgroundColor}',
            borderColor: '${this.state.components[4].data.cancelBtn.ep_borderColor}'
          },
          clock:{
            hours:'${this.state.components[4].data.clock.ep_hours}',
            minutes: '${this.state.components[4].data.clock.ep_minutes}',
            seconds: '${this.state.components[4].data.clock.ep_seconds}',
            hoursLeft: '${this.state.components[4].data.clock.ep_hoursLeft}',
            daysLeft: '${this.state.components[4].data.clock.ep_daysLeft}',
            textColor: '${this.state.components[4].data.clock.ep_textColor}'
          },
          countDown:{
            start:'${this.state.components[4].data.countDown.ep_dateStart} ${this.state.components[4].data.countDown.ep_timeStart}:00',
            end: '${this.state.components[4].data.countDown.ep_dateEnd} ${this.state.components[4].data.countDown.ep_timeEnd}:00'
          },
          countries: [${this.state.components[4].data.countries.value.join(', ')}]
        }, ${this.state.components[4].data.misc.dst}, ${this.state.components[4].data.misc.showDays});

      });`,

      ksf: '',
      promoCode: '',
      iobd: '',
    };

    this.state.components.forEach((comp)=>{
      if(comp.selected === true){
        code += codeSnippets[comp.id]
      }
    });

    return code;

  }

  render() {
    return (
      <div className="App">
        <Router>
        <Navbar/>
        <View>

          <Taskbar>
              <NavLink className='ge_promo-studio-link-a' to='/selector'>
                  <AddButton></AddButton>
              </NavLink>
              <NavLink to='/promos'>
                <Button>Promos</Button>
              </NavLink>
          </Taskbar>

          <Switch>
            <List>
              <Route
                path='/selector' 
                component={(props)=>
                  <ComponentSelector {...props} auth={()=>this.componentSelectorAuth()}>
                    {this.populateComponentSelector(this.state.components)}
                  </ComponentSelector>}>
              </Route>
              <Route
                path='/builder'
                render={()=> 
                    Object.values(this.componentSelectorData()).length !== 0 ? 
                    <ComponentBuilder
                                      data={this.componentSelectorData()} 

                                      hb_setState={this.updateHeroBannerData}
                                      hb_setValues={this.updateHeroBannerDataFields}
                                      hb_setShadow={this.updateHeroBannerShadowValues}
                                      hb_data={this.state.components[8].data}

                                      cd_setState={this.updateCountDownData}
                                      cd_setMarkets={this.updateCountDownMarkets}
                                      cd_setCheckBoxes={this.updateCountDownMarketCheckBoxes}
                                      cd_setValues={this.setCountDownInputValue}
                                      cd_setTextFieldValues={this.setCountDownTextFieldValue}
                                      cd_setTextField={this.updateCountDownTextFieldValue}
                                      cd_addTextField={this.addCountDownTextField}
                                      cd_updateTextField={this.createCountDownTextFiendValues}
                                      cd_setCountries={this.setCountDownCountries}
                                      cd_updateCountries={this.updateCountDownCountries}

                                      pl_amount={this.updatePillAmount()}
                                      pl_setPillDetails={this.setPillDetails}
                                      pl_updateDetailValue={this.updatePillDetailsValue}
                                      pl_setShips={this.setPillCriteria}
                                      pl_setShipCheckBoxes={this.updatePillShips}
                                      pl_addDate={this.addPillCriteriaDates}
                                      pl_updateDates={this.updatePillCriteriaDates}
                                      pl_setNights={this.setPillNumberOfNights}
                                      pl_addPort={this.setPillDeparturePorts}
                                      pl_updatePorts={this.updatePillCriteriaDeparturePorts}
                                      pl_setOtherPill={this.setPillOtherPillExclusion}
                                      pl_updateOtherPills={this.updatePillOtherPillExclusion}
                                      pl_createNewPill={this.createNewPill}
                                      pl_updatePillList={this.updateExistingPills}

                                      ep_setValue={this.exitPopupSetValue}
                                      ep_setDetail={this.exitPopupUpdateValue}
                                      ep_setCountries={this.exitPopUpUpdateCountries}
                                      ep_setMisc={this.exitPopUpUpdateMisc}
                    /> : <Redirect to='/' />
                  }
              >
              </Route>
              <Route
                path='/code'
                component={(props)=>
                 <CodeBlock {...props} >{this.generateCodeSnippet()}</CodeBlock>
                }
              >
              </Route>
              <Route 
                path='/promos'
                render={(props)=>
                  <Promos {...props} 
                  
                          pc_markets={this.state.activeMarkets.list}
                          pc_setMarkets={this.setMarkets}
                          pc_renderMarkets={this.renderMarkets}
                          pc_renderMonth={this.renderDaysPerMonth}
                          
                  ></Promos>}>  
              </Route>
            </List>
          </Switch>

        </View>
        <Footer/>
      </Router>
      </div>
    )
  }
}