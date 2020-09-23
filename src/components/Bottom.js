import React from 'react'
import home from "../assets/images/Home Icon Menu Button - Pressed.svg";
import jobs from "../assets/images/MyJobs Icon Menu Button.svg";
import support from "../assets/images/MK Support Icon Stroke.svg";
import news from "../assets/images/Inbox Icon Menu Button.svg";
import account from "../assets/images/Account Icon Menu Button.svg";

export default function Bottom() {
    return (
         <nav class="navbar navbar-light shadow fixed-bottom">
        <div class="container-fluid p-0">
            <div class="d-flex w-100 justify-content-around">
                <ul class="nav">
                    <li class="active"><a href="#/">
                            <img src={home} class="nav-icon" alt=""/>
                            <p>Home</p>
                        </a></li>
                    <li><a href="#/">
                            <img src={jobs} class="nav-icon" alt=""/>
                            <p>MyJobs</p>
                        </a></li>
                    <li><a href="#/">
                            <img src={support} class="nav-icon" alt=""/>
                            <p>Support</p>
                        </a></li>
                    <li><a href="#/">
                            <img src={news} class="nav-icon" alt=""/>
                            <p>News</p>
                        </a></li>
                    <li><a href="#/">
                            <img src={account} class="nav-icon" alt=""/>
                            <p>Account</p>
                        </a></li>
                </ul>
            </div>
            
        </div>
    </nav>
    )
}
