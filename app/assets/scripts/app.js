import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
<<<<<<< HEAD
import Modal from './modules/modal';

=======
import StickyHeader from './modules/StickyHeader';
>>>>>>> sticky-header

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
<<<<<<< HEAD
var modal = new Modal();
=======
var stickyHeader = new StickyHeader();
>>>>>>> sticky-header
