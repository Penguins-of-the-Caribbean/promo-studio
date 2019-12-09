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
import { CodeBlock } from './components/Components';


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
          id: 'countDown',
          name: 'Count Down',
          selected: false,
          data: {
            cd_parent: '',
            cd_startDate: '',
            cd_startTime: '',
            cd_endDate: '', 
            cd_endTime: '',
            cd_offer: '',
            cd_text: '',
            cd_subText: '',
            cd_timerText: '',
            cd_market: {
              aus: false,
              deu: false,
              esp: false,
              ita: false,
              lac: false,
              mex: false,
              nor: false,
              sgp: false,
              swe: false,
              value: []
            },
            cd_last: '',
            cd_days: '',
            cd_dst: false,
            cd_layout: false
          }
        },
        {
          id: 'pills',
          name: 'Pills',
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
                LG: false,
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
                LG: false,
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
          selected: false,
          data: {}
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
      ]
    };
    //HERO BANNER
    this.updateHeroBannerData = this.updateHeroBannerData.bind(this);
    this.updateHeroBannerDataFields = this.updateHeroBannerDataFields.bind(this);
    this.updateHeroBannerShadowValues = this.updateHeroBannerShadowValues.bind(this);

    //COUNT-DOWN
    this.updateCountDownData = this.updateCountDownData.bind(this);
    this.updateCountDownMarkets = this.updateCountDownMarkets.bind(this);
    this.updateCountDownMarketCheckBoxes = this.updateCountDownMarketCheckBoxes.bind(this);

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
  }

  //HERO BANNER DATA HANDLER
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

  updateCountDownData(e){
    let cloneComponents = this.state.components;
    let comp = cloneComponents[1];

    comp.data[e.target.id] = e.target.value;
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
    //let newPill = {...comp.data};
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
    console.log(this.state.components[2]);
  }

  deleteExistingPill(i){
    let cloneComponents = [...this.state.components];
    cloneComponents[2].pills.splice(i, 1);
    this.setState({components: cloneComponents});
    console.log(this.state.components[2].pills);
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
    //code here
    
  }
  //


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
      );`,
      countDown: `
      countDown( 
          '${this.state.components[1].data.cd_parent}',
          '${this.state.components[1].data.cd_startDate +' '+ this.state.components[1].data.cd_startTime + ':00'}',
          '${this.state.components[1].data.cd_endDate +' '+ this.state.components[1].data.cd_endTime + ':00'}',
          {
              offer:     '${this.state.components[1].data.cd_offer}',
              text:      '${this.state.components[1].data.cd_text}',
              subText:   '${this.state.components[1].data.cd_subText}',
              timerText: '${this.state.components[1].data.cd_timerText}'
          },
          [${this.state.components[1].data.cd_market.value}],
          '${this.state.components[1].data.cd_last}',
          '${this.state.components[1].data.cd_days}',
          '${this.state.components[1].data.cd_dst}',
          '${this.state.components[1].data.cd_layout}'
      );`,
      pills: this.pillsCodeSnippet(), 
      peopleWatching: '',
      exitPopup: '',
      ksf: '',
      promoCode: '',
      iobd: ''
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

                                      cd_setState={this.updateCountDownData}
                                      cd_setMarkets={this.updateCountDownMarkets}
                                      cd_setCheckBoxes={this.updateCountDownMarketCheckBoxes}

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
            </List>
          </Switch>

        </View>
        <Footer/>
      </Router>
      </div>
    )
  }
}

