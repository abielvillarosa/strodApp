import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import RestoHome from './../RestoHome'
import CustomerHome2 from './../CustomerHome2'
import Gallery from './../Gallery'
// import PostDetails from './../PostDetails'


const Router = () => (
  <Switch>
    <Route exact path='/stroDapp' component={Home}/>
    <Route path='/stroDapp/RestoHome' component={RestoHome}/>
    <Route path='/stroDapp/CustomerHome2' component={CustomerHome2}/>
    <Route path='/stroDapp/Gallery' component={Gallery}/>
    {/* <Route path='/swop/swopbooking' component={SwopBooking}/>
    <Route path='/swop/postdetails' render={(props) => <PostDetails {...props} isAuthed={true} />} component={PostDetails}/> */}
  </Switch>
)
export default Router