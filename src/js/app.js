import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

let rightBanner = document.querySelector('.banner__right');
let leftBanner = document.querySelector('.banner__left');
let circle = document.querySelector('.circle__wrap');
let terminal = document.querySelector('[data-name="terminal"]');
let exchenge = document.querySelector('[data-name="exchange"]');
let leftPic = document.querySelector('.left_pic');
let rightPic = document.querySelector('.right_pic');

rightBanner.onmouseover = () => {
    circle.classList.add('__right');
    circle.classList.remove('__left');
    exchenge.classList.add('__active_nav');
    rightPic.classList.add('__active');
};

rightBanner.onmouseout = () => {
    circle.classList.remove('__right');
    circle.classList.remove('__left');
    exchenge.classList.remove('__active_nav');
    rightPic.classList.remove('__active');
};

leftBanner.onmouseover = () => {
    circle.classList.add('__left');
    circle.classList.remove('__right');
    terminal.classList.add('__active_nav');
    leftPic.classList.add('__active');
};

leftBanner.onmouseout = () => {
    circle.classList.remove('__left');
    circle.classList.remove('__right');
    terminal.classList.remove('__active_nav');
    leftPic.classList.remove('__active');
};