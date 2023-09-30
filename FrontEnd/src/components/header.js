import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SearchBar from 'material-ui-search-bar';
import Avatar from '@material-ui/core/Avatar';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#ffffff', // Thay đổi màu nền của AppBar
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: '#ffffff', // Thay đổi màu chữ cho các Link và Button
        fontFamily: 'cursive', // Thay đổi font chữ sang cursive
    },
    toolbarTitle: {
        display: 'flex',
        alignItems: 'center', // Hiển thị logo ở giữa theo chiều ngang
    },
    logo: {
        marginRight: theme.spacing(1),
        color: '#3f51b5',
        fontSize: '1.75rem',
        fontWeight: 600,
        textDecoration: 'none',
        fontFamily: 'cursive',
    },
    searchInput: {
        backgroundColor: '#f5f5f5',
    },
    avatar: {
        backgroundColor: '#3f51b5',
        fontSize: '1.2rem',
    },
    authButtons: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    authButton: {
        fontFamily: 'cursive',
        fontWeight: 600,
        marginLeft: theme.spacing(2),
        textTransform: 'none',
    },
    registerButton: {
        backgroundColor: '#3f51b5',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#0B3D5E',
        },
    },
    loginButton: {
        backgroundColor: '#3f51b5',
        color: '#ffffff',
        fontFamily: 'cursive',
        '&:hover': {
            backgroundColor: '#26698D',
        },
    },
    logoutButton: {
        backgroundColor: '#3f51b5',
        color: '#ffffff',
        fontFamily: 'cursive',
        '&:hover': {
            backgroundColor: '#8CC3F7',
        },
    },
}));

const MEDIA_URL = process.env.REACT_APP_MEDIA_URL;

function Header() {
    const classes = useStyles();
    const [data, setData] = useState({ search: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('access_token')));
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(Boolean(localStorage.getItem('access_token')));
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const goSearch = () => {
        navigate(`/search/?search=${data.search}`);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar} style={{ justifyContent: 'space-between' }}>
                    <div className={classes.toolbarTitle}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            noWrap
                            className={classes.logo}
                            component={NavLink}
                            to="/"
                        >
                            Lịch học hôm nay
                        </Typography>
                    </div>
                    <div className={classes.toolbarTitle}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            noWrap
                            className={classes.logo}
                        >
                            Thời khóa biểu
                        </Typography>
                    </div>
                    <div className={classes.toolbarTitle}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            noWrap
                            className={classes.logo}
                        >
                            Lịch sử điểm danh
                        </Typography>
                    </div>
                    <div className={classes.toolbarTitle}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            noWrap
                            className={classes.logo}
                            component={NavLink}
                            to="/hall"
                        >
                            Chat
                        </Typography>
                    </div>
                    <SearchBar
                        value={data.search}
                        onChange={(newValue) => setData({ search: newValue })}
                        onRequestSearch={goSearch}
                        inputClassName={classes.searchInput}
                    />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <NavLink to={`/profile/${localStorage.getItem('user_name')}`}>
                            <Avatar alt={localStorage.getItem('user_name')} src={`${MEDIA_URL}${localStorage.getItem('avatar')}`} />
                        </NavLink>
                        <div style={{ marginLeft: '10px' }}>
                            <Typography variant="subtitle1" style={{ fontFamily: 'cursive' }}>
                                {localStorage.getItem('user_name')}
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Button
                            href="#"
                            variant="contained"
                            color="textPrimary"
                            className={classes.loginButton}
                            component={NavLink}
                            to="/login"
                            style={{ fontFamily: 'cursive', marginRight: '5px' }}
                        >
                            Login
                        </Button>
                        <Button
                            href="#"
                            variant="contained"
                            color="textPrimary"
                            className={classes.logoutButton}
                            component={NavLink}
                            to="/logout"
                            style={{ fontFamily: 'cursive' }}
                        >
                            Logout
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
