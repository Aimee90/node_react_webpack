/*
* @Author: zoulin
* @Date:   2018-04-28 10:59:58
* @Last Modified by:   zoulin
* @Last Modified time: 2018-05-02 15:14:56
*/
import React, { Component } from 'react';
import { render } from 'react-dom';
// import App from './App';
import RouteMap from './router/routeMap';

render((
  <RouteMap />
), document.getElementById('app'));