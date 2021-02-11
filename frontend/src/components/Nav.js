import React from 'react';
import { Link } from 'react-router-dom';
import name from './name';
const Nav = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                <div style={{ display: 'flex', flex: 0.6 }}>
                    <h1>Logo</h1>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flex: 0.4,
                        position: 'relative',
                        paddingLeft: 20,
                        justifyContent: 'space-around',
                    }}
                >
                    <div className="secondhalf-nav" />
                    <h3 className="my-2 text-bold navtext">
                        Welcome {name.username}
                    </h3>
                    <Link
                        to="/login"
                        className="btn btn-primary m-2"
                        type="submit"
                    >
                        Logout
                    </Link>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};
export default Nav;
