// Copyright (c) 2024 Fetuha All rights reserved
//
// Created by: Fetuha
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myCookies() {
  if (localStorage.clicks) {
    localStorage.clicks = Number(localStorage.clicks)
  } else {
    localStorage.clicks = 1
  }
  document.getElementById("clicks").innerHTML = localStorage.clicks
}

function myButtonClicked() {
  localStorage.clicks = Number(localStorage.clicks) + 1

  document.getElementById("clicks").innerHTML = localStorage.clicks
}
