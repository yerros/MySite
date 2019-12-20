import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout.component';

class Dashboard extends Component {
    render(){
        return(
            <Layout>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-1">
                                        <i className="pe-7s-cash"></i>
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text">$<span className="count">23569</span></div>
                                            <div className="stat-heading">Revenue</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-2">
                                        <i className="pe-7s-cart"></i>
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text"><span className="count">3435</span></div>
                                            <div className="stat-heading">Sales</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-3">
                                        <i className="pe-7s-browser"></i>
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text"><span className="count">349</span></div>
                                            <div className="stat-heading">Templates</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-4">
                                        <i className="pe-7s-users"></i>
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text"><span className="count">2986</span></div>
                                            <div className="stat-heading">Clients</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Dashboard;