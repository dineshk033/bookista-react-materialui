import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';

const SlickCarousel = ({ setting, children }) => <Slider {...setting}>{children}</Slider>;

SlickCarousel.propTypes = {
    setting: PropTypes.object,
    children: PropTypes.element
};

export default SlickCarousel;
