import React from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VerifiedIcon from '@mui/icons-material/Verified';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, label, detail }) => {
    function switchIcon(logo) {
        switch (logo) {
            case 'delivery':
                return <DeliveryDiningIcon />;
            case 'payment':
                return <CreditScoreIcon />;
            case 'quality':
                return <VerifiedIcon />;
            default:
                return <VerifiedUserIcon />;
        }
    }
    return (
        <Box m={5}>
            {switchIcon(icon)}
            <Typography variant="subtitle1" mt={1} component="h5">
                {label}
            </Typography>
            <Typography variant="subtitle2" component="h5">
                {detail}
            </Typography>
        </Box>
    );
};
FeatureCard.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    detail: PropTypes.string
};

FeatureCard.defaultProps = {
    icon: 'delivery',
    label: 'Quick Delivery',
    detail: 'Quia ducimus quibusdam numquam suscipit dolores eum saepe ullam occaecati. Recusandae qui quia tempora nam at quia sunt sequi blanditiis.'
};

export default FeatureCard;
