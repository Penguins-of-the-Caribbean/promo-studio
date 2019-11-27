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
              color: '',
              text: '',
              class: ''
            },
            pillCriteria: {
              shipCodes:[],
              promoDates: [],
              sailingDates: [],
              numberOfNights: [],
              departurePorts: [],
            },
            pillExclusions: {
              shipCodes: [],
              numberOfNights: [],
              departurePorts: [],
              destinationPorts: [],
              departureDates: [],
              otherPills: []
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
    this.updateHeroBannerData = this.updateHeroBannerData.bind(this);
    this.updateHeroBannerDataFields = this.updateHeroBannerDataFields.bind(this);
    this.updateHeroBannerShadowValues = this.updateHeroBannerShadowValues.bind(this);
    this.updateCountDownData = this.updateCountDownData.bind(this);
    this.updateCountDownMarkets = this.updateCountDownMarkets.bind(this);
    this.updateCountDownMarketCheckBoxes = this.updateCountDownMarketCheckBoxes.bind(this);
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
    console.log(this.state.components[1].data);
    console.log(this.state.components[1].data.cd_market);
  }
  
  updateCountDownMarketCheckBoxes(target){
      return this.state.components[1].data.cd_market[target];
  }

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
      pills: '', 
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
                render={(props)=> 
                    Object.values(this.componentSelectorData()).length !== 0 ? 
                    <ComponentBuilder
                                      data={this.componentSelectorData()} 
                                      hb_setState={this.updateHeroBannerData}
                                      hb_setValues={this.updateHeroBannerDataFields}
                                      hb_setShadow={this.updateHeroBannerShadowValues}
                                      cd_setState={this.updateCountDownData}
                                      cd_setMarkets={this.updateCountDownMarkets}
                                      cd_setCheckBoxes={this.updateCountDownMarketCheckBoxes}
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

