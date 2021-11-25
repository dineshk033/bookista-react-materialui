// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Button, Collapse, List, Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { CategoriesOptions } from 'mock/data';
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const CustomSelect = ({ label, list, open, selected }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [more, setMore] = useState(false);
    const [checked, setChecked] = useState([1, 5]);

    useEffect(() => {
        setIsOpen(open);
        setChecked(selected);
    }, [open, selected]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <Button
                id="basic-button"
                fullWidth
                sx={{ justifyContent: 'start' }}
                aria-controls="basic-menu"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={() => setIsOpen(!isOpen)}
                endIcon={isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            >
                {label}
            </Button>

            <List>
                <TransitionGroup>
                    {isOpen &&
                        list
                            .filter((_, idx) => idx < 5 || more)
                            .map(({ id, value }) => (
                                <Collapse key={id.toString()}>
                                    <ListItem disablePadding sx={{ px: 2 }}>
                                        <ListItemButton sx={{ py: 0 }} role={undefined} onClick={handleToggle(id)} dense>
                                            <ListItemIcon sx={{ minWidth: '26px' }}>
                                                <Checkbox
                                                    edge="start"
                                                    sx={{ p: '6px' }}
                                                    checked={checked.indexOf(id) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    color="secondary"
                                                    icon={<CircleOutlinedIcon sx={{ fontSize: 20 }} />}
                                                    checkedIcon={<CheckCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />}
                                                    inputProps={{ 'aria-labelledby': id }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                sx={{
                                                    '& > .MuiTypography-root': {
                                                        fontSize: '0.8rem',
                                                        fontWeight: '500'
                                                    }
                                                }}
                                                id={id}
                                                primary={value}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </Collapse>
                            ))}
                </TransitionGroup>
                {list.length > 5 && isOpen && (
                    <Button sx={{ mx: 3 }} color="secondary" onClick={() => setMore(!more)} size="small">
                        + Load More
                    </Button>
                )}
            </List>
        </>
    );
};
CustomSelect.propTypes = {
    open: PropTypes.bool,
    label: PropTypes.string,
    selected: PropTypes.array,
    list: PropTypes.object
};

CustomSelect.defaultProps = {
    open: true,
    label: 'Categories',
    selected: [],
    list: CategoriesOptions
};

export default CustomSelect;
