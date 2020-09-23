import React from "react";
import locationPin from "../assets/images/Location Pin with Hole and Shadow.svg";
import icon2 from "../assets/images/2-icon.png";
import icon8 from "../assets/images/8-icon.png";
import icon25 from "../assets/images/25-icon.png";
export default function Featured() {
  return (
    <div class="header-bg">
      <div class="row m-0 pt-3">
        <div class="col-sm-12">
          <div class="mx-auto text-center">
            <h6 class="mb-0">
              Good Afternoon, <span class="font-weight-bold"> Peyman!</span>
            </h6>
            <div class="badge badge-light">
              <img
                src={locationPin}
                height="13px"
                class="mr-1"
                alt=""
              />{" "}
              Iran University of Medical Scrience
            </div>
          </div>
          <div class="mt-1">
            <div class="card shadow">
              <div class="card-body py-2">
                <div class="card-header border-bottom bg-white p-0">
                  <h6 class="font-weight-bold">Featured</h6>
                </div>
                <div class="row mt-3 text-center">
                  <div class="col-4">
                    <img src={icon2} class="icon-img" alt="" />
                    <p>Cleaning</p>
                  </div>
                  <div class="col-4">
                    <img src={icon8} class="icon-img" alt="" />
                    <p>Cleaning</p>
                  </div>
                  <div class="col-4">
                    <img src={icon25} class="icon-img" alt="" />
                    <p>Cleaning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
