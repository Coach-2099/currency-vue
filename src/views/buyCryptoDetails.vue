<template>
  <div :class="isDarkMode ? 'is_dark' : ''">
    <BaseHeader @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />

    <section class="buy-crypto flat-tabs">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <ul class="menu-tab">
              <li><h6 class="fs-16">Overview</h6></li>
              <li class="active"><h6 class="fs-16">Buy Crypto</h6></li>
              <li><h6 class="fs-16">Sell Crypto</h6></li>
            </ul>
          </div>
          <div class="col-md-9">
            <div class="content-tab">
              <div class="content-inner buy-crypto__main">
                <div class="top">
                  <ul class="top-list">
                    <li class="done">
                      <h6>
                        <span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 3.99967L3.66667 6.66634L9 1.33301"
                              stroke="white"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg> </span
                        >Select currency
                      </h6>
                    </li>
                    <li class="done">
                      <h6>
                        <span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 3.99967L3.66667 6.66634L9 1.33301"
                              stroke="white"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg> </span
                        >Confirm Payment
                      </h6>
                    </li>
                    <li class="active">
                      <h6><span></span>Details</h6>
                    </li>
                  </ul>
                </div>

                <div class="main details center">
                  <div class="heading">
                    <h4>Success</h4>
                    <div class="icon">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.99967L3.66667 6.66634L9 1.33301"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>You successfully bought 1.356 <span>BTC</span> for Rockie!</p>

                  <ul class="status">
                    <li class="top">
                      <p class="desc">Status</p>
                      <p class="text">Completed</p>
                    </li>
                    <li class="s-body">
                      <p class="desc">Transaction ID</p>
                      <p class="text">0msx836930...87r398 ID</p>
                    </li>
                  </ul>
                </div>
                <div class="main payment">
                  <h6 class="title">Payment Details</h6>

                  <p class="top">Bank account</p>
                  <ul class="status">
                    <li>
                      <p class="desc">Account name</p>
                      <p class="text">
                        Veum Cecilia<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">Account number</p>
                      <p class="text">
                        548422222221<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">Address</p>
                      <p class="text">
                        079 Dariana Knoll, CA<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">SWIFT Code</p>
                      <p class="text">
                        UI8<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">Bank Address</p>
                      <p class="text">
                        55416 Powlowski Spring, CA<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                  </ul>

                  <div class="code">
                    <h6>Reference code</h6>
                    <p class="mb-5">
                      You MUST include the Reference Code in your deposit in order to credit your
                      account!
                    </p>
                    <p>Reference Code:</p>
                    <div class="code-text">BLUTUKHY34PB</div>
                  </div>
                  <div class="group-button">
                    <button class="cancel btn-action-3">Tradel</button>
                    <button class="submit btn-action">Wallet</button>
                  </div>
                </div>
              </div>
              <div class="content-inner buy-crypto__main">
                <div class="top">
                  <ul class="top-list">
                    <li class="done">
                      <h6>
                        <span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 3.99967L3.66667 6.66634L9 1.33301"
                              stroke="white"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg> </span
                        >Select currency
                      </h6>
                    </li>
                    <li class="done">
                      <h6>
                        <span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 3.99967L3.66667 6.66634L9 1.33301"
                              stroke="white"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg> </span
                        >Confirm Payment
                      </h6>
                    </li>
                    <li class="active">
                      <h6><span></span>Details</h6>
                    </li>
                  </ul>
                </div>

                <div class="main details center">
                  <div class="heading">
                    <h4>Success</h4>
                    <div class="icon">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.99967L3.66667 6.66634L9 1.33301"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>You successfully bought 1.356 <span>BTC</span> for Rockie!</p>

                  <ul class="status">
                    <li class="top">
                      <p class="desc">Status</p>
                      <p class="text">Completed</p>
                    </li>
                    <li class="s-body">
                      <p class="desc">Transaction ID</p>
                      <p class="text">0msx836930...87r398 ID</p>
                    </li>
                  </ul>
                </div>
                <div class="main payment">
                  <h6 class="title">Payment Details</h6>

                  <p class="top">Bank account</p>
                  <ul class="status">
                    <li>
                      <p class="desc">Account name</p>
                      <p class="text">
                        Veum Cecilia<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">Account number</p>
                      <p class="text">
                        548422222221<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">Address</p>
                      <p class="text">
                        079 Dariana Knoll, CA<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">SWIFT Code</p>
                      <p class="text">
                        UI8<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">Bank Address</p>
                      <p class="text">
                        55416 Powlowski Spring, CA<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                  </ul>

                  <div class="code">
                    <h6>Reference code</h6>
                    <p class="mb-5">
                      You MUST include the Reference Code in your deposit in order to credit your
                      account!
                    </p>
                    <p>Reference Code:</p>
                    <div class="code-text">BLUTUKHY34PB</div>
                  </div>
                  <div class="group-button">
                    <button class="cancel btn-action-3">Tradel</button>
                    <button class="submit btn-action">Wallet</button>
                  </div>
                </div>
              </div>
              <div class="content-inner buy-crypto__main">
                <div class="top">
                  <ul class="top-list">
                    <li class="done">
                      <h6>
                        <span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 3.99967L3.66667 6.66634L9 1.33301"
                              stroke="white"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg> </span
                        >Select currency
                      </h6>
                    </li>
                    <li class="done">
                      <h6>
                        <span>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 3.99967L3.66667 6.66634L9 1.33301"
                              stroke="white"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg> </span
                        >Confirm Payment
                      </h6>
                    </li>
                    <li class="active">
                      <h6><span></span>Details</h6>
                    </li>
                  </ul>
                </div>

                <div class="main details center">
                  <div class="heading">
                    <h4>Success</h4>
                    <div class="icon">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.99967L3.66667 6.66634L9 1.33301"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>You successfully bought 1.356 <span>BTC</span> for Rockie!</p>

                  <ul class="status">
                    <li class="top">
                      <p class="desc">Status</p>
                      <p class="text">Completed</p>
                    </li>
                    <li class="s-body">
                      <p class="desc">Transaction ID</p>
                      <p class="text">0msx836930...87r398 ID</p>
                    </li>
                  </ul>
                </div>
                <div class="main payment">
                  <h6 class="title">Payment Details</h6>

                  <p class="top">Bank account</p>
                  <ul class="status">
                    <li>
                      <p class="desc">Account name</p>
                      <p class="text">
                        Veum Cecilia<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">Account number</p>
                      <p class="text">
                        548422222221<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">Address</p>
                      <p class="text">
                        079 Dariana Knoll, CA<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">SWIFT Code</p>
                      <p class="text">
                        UI8<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                    <li>
                      <p class="desc">Bank Address</p>
                      <p class="text">
                        55416 Powlowski Spring, CA<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"
                            fill="#777E90"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.0001 4C13.5193 4 12.1899 4.6424 11.273 5.66691C10.9047 6.07844 10.2725 6.11346 9.86093 5.74513C9.4494 5.37681 9.41438 4.74461 9.78271 4.33309C11.063 2.9026 12.9268 2 15.0001 2C18.866 2 22.0001 5.13401 22.0001 9C22.0001 11.0733 21.0975 12.937 19.667 14.2173C19.2554 14.5857 18.6232 14.5507 18.2549 14.1391C17.8866 13.7276 17.9216 13.0954 18.3331 12.7271C19.3577 11.8101 20.0001 10.4807 20.0001 9C20.0001 6.23858 17.7615 4 15.0001 4Z"
                            fill="#777E90"
                          />
                        </svg>
                      </p>
                    </li>
                  </ul>

                  <div class="code">
                    <h6>Reference code</h6>
                    <p class="mb-5">
                      You MUST include the Reference Code in your deposit in order to credit your
                      account!
                    </p>
                    <p>Reference Code:</p>
                    <div class="code-text">BLUTUKHY34PB</div>
                  </div>
                  <div class="group-button">
                    <button class="cancel btn-action-3">Tradel</button>
                    <button class="submit btn-action">Wallet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-sale">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="block-text">
              <h4 class="heading">Earn up to $25 worth of crypto</h4>
              <p class="desc">
                Discover how specific cryptocurrencies work — and get a bit of each crypto to try
                out for yourself.
              </p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="button">
              <a href="#">Create Account</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SaleSection />
    <BaseFooter />
  </div>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
import SaleSection from '@/components/SaleSection.vue'
import BaseFooter from '@/components/BaseFooter.vue'
export default {
  name: 'buyCryptoDetails',
  components: {
    BaseHeader,
    SaleSection,
    BaseFooter,
  },
  data() {
    return {}
  },
}
</script>