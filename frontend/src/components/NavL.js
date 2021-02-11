import React from 'react';

const NavL = () => {
    return (
        <div>
            <div id="nav">
                <div className="d-flex justify-content-between">
                    <h1>Logo </h1>
                    <div className="d-flex">
                        <button className="btn btn-primary m-2" type="submit">
                            LogIn
                        </button>
                        <button className="btn btn-success m-2" type="submit">
                            SignUp
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};
export default NavL;
