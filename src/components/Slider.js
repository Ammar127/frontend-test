import React from 'react';
import image29 from "../assets/images/29.png"
import image27 from "../assets/images/27.png"

import SliderLight from "react-slider-light";
import "react-slider-light/lib/index.css";

export default function Slider() {
    return (
      <div class="row border-top mt-1">
        <div class="col-md-12 mt-2">
          <h6 class="font-weight-bold mb-0">What's New</h6>
        </div>
     
          <SliderLight>
            <div class="box-1">
              <div class="card card-1">
                <div class="card_image">
                  <img src={image29} />{" "}
                </div>
                <div class="card_title">
                  <h5>How to use the app</h5>
                  <p>Getting access to on dema..</p>
                  <div class="border-bottom"></div>
                  <div class="text-center py-2">
                    <a href="javascript:void(0)">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-1">
              <div class="card card-1">
                <div class="card_image">
                  <img src={image27} />
                </div>
                <div class="card_title">
                  <h5>List your service on Mykuya</h5>
                  <p>Do you offer Manpowe</p>
                  <div class="border-bottom"></div>
                  <div class="text-center py-2">
                    <a href="javascript:void(0)">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </SliderLight>
 
      </div>
    );
}
