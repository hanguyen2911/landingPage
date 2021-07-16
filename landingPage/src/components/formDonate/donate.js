import axios from 'axios';
import CryptoJS from 'crypto-js';
import config_momo from '../../config';
import React, { useState, useEffect } from 'react';
function Donate(props) {
  let [QRcode, setQRcode] = useState({});

  const creatForm = (data) => {
    let body = new FormData();
    for (const key in data) {
      body.append(key, data[key]);
    }
    return body;
  };
  let createSignature = (data, secretkey) => {
    return CryptoJS.HmacSHA256(data, secretkey);
  };
  let confirmPayment = (
    secretkey,
    partnerCode,
    partnerRefId,
    requestType = 'capture',
    requestId,
    momoTransId,
    customerNumber = null,
    description = null
  ) => {
    const url = 'https://test-payment.momo.vn/pay/confirm';

    const data = `partnerCode=${partnerCode}&partnerRefId=${partnerRefId}&requestType=${requestType}
    &requestId=${requestId}&momoTransId=${momoTransId}`;
    let signature = createSignature(data, secretkey);
    let config = {
      partnerCode: 'MOMOIQA420180417',
      partnerRefId: partnerCode,
      requestType: requestType,
      requestId: requestId,
      momoTransId: momoTransId,
      signature: signature,
      customerNumber: customerNumber,
      description: description,
    };
    let response = axios.post(url, creatForm(config));
    return response;
  };
  const notifyUrl = (
    secretkey,
    partnerCode,
    accessKey,
    amount = 10000,
    momoTransId,
    message,
    status = 0,
    responseTime,
    storeId,
    partnerTransId,
    partnerRefId
  ) => {
    let data = `accessKey=${accessKey}&amount=${amount}&message=${message}&momoTransId=${momoTransId}
    &partnerCode=${partnerCode}&partnerRefId=${partnerRefId}&partnerTransId=${partnerTransId}
    &responseTime=${responseTime}&status=${status}&storeId=${storeId}&transType=momo_wallet`;
    let signature = createSignature(data, secretkey);

    let config = {
      partnerCode: partnerCode,
      accessKey: accessKey,
      amount: amount,
      partnerRefId: partnerRefId,
      partnerTransId: '',
      transType: 'momo_wallet',
      momoTransId: momoTransId,
      status: status,
      message: 'Thành Công',
      responseTime: responseTime,
      signature: signature,
      storeId: 'store001',
    };

    const url = 'https://www.partner.com/confirm';
    axios.post(url, creatForm(config));
  };
  const createQR = (data) => {
    const url =
      'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
      encodeURIComponent(data);
    console.log(data);
    return url;
  };
  useEffect(() => {
    setQRcode(
      createQR(
        `https://test-payment.momo.vn/pay/store/${
          config_momo.storeSlug
        }?a=100000&b=B00321221&s=${createSignature(
          `storeSlug=${config_momo.storeSlug}&amount=100000&billId=B00321221`,
          config_momo.secretkey
        )}`
      )
    );
  }, {});

  return (
    <div className="container-fluid" id="google_pay">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
          <div className="card card0">
            <div className="row">
              <div className="col-md-6 d-block p-0 box">
                <div className="card rounded-0 border-0 card1 pr-xl-4 pr-lg-3">
                  <div className="row justify-content-center">
                    <div className="col-11">
                      <h3 className="text-center mt-4 mb-4" id="heading0">
                        Donate now to Passerelles numériques
                      </h3>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-5 fit-image">
                      <img
                        src="https://i.imgur.com/NnVWuER.png"
                        height="200px"
                        width="200px"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-11">
                      <h1 className="text-center mt-4 mb-0" id="sub-heading1">
                        Give us
                      </h1>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-11">
                      <p className="text-center mt-0 mb-3" id="sub-heading2">
                        Your generous donation will sustain our work!
                      </p>
                    </div>
                  </div>
                  <form className="form-card p-4 pl-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-12">
                            <label className="gift">First Name</label>
                          </div>
                          <div className="col-12">
                            <input
                              className="gift-input"
                              type="text"
                              name="to"
                              placeholder="FirstName"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-12">
                            <label className="gift">Last Name</label>
                          </div>
                          <div className="col-12">
                            <input
                              className="gift-input"
                              type="text"
                              name="from"
                              placeholder="LastName"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <label className="gift">Recipient email</label>
                        <br />
                        <input
                          className="gift-input"
                          type="email"
                          name="email"
                          placeholder="your@email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <label className="gift">Message email</label>
                        <br />
                        <input
                          className="gift-input"
                          type="text"
                          name="msg"
                          placeholder="Contact message !"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 p-0 box">
                <div className="card rounded-0 border-0 card2">
                  <div className="form-card">
                    <h2 id="heading" className="text-center">
                      Payment Information
                    </h2>
                    <div class="tabbable">
                      <ul class="nav nav-tabs">
                        <li class="active">
                          <a href="#tab1" data-toggle="tab">
                            <div className="radio selected" data-value="credit">
                              <img
                                src="/images/google-icon.png"
                                width="200px"
                                height="60px"
                                alt="Google pay icon"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#tab2" data-toggle="tab">
                            <div className="radio" data-value="paypal">
                              <img src={QRcode} width="200px" height="60px" />
                            </div>
                            <br />
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div class="tab-pane active" id="tab1">
                          <p>
                            <br></br>
                            <div class="btn-group ">
                              <button class="btn btn-outline-info px-5">
                                15 $
                              </button>
                              <button class="btn btn-outline-info px-5">
                                45 $
                              </button>
                              <button class="btn btn-outline-info px-5">
                                75 $
                              </button>
                              <button class="btn btn-outline-info px-5">
                                100 $
                              </button>
                            </div>
                            <h3 id="credit" className="mb-3">
                              Credit card
                            </h3>
                            <input
                              type="text"
                              name="holdername"
                              placeholder="John Smith"
                            />
                            <div className="row">
                              <div className="col-12">
                                <input
                                  type="text"
                                  name="cardno"
                                  id="cr_no"
                                  placeholder="0000 0000 0000 0000"
                                  minLength={19}
                                  maxLength={19}
                                />
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-9 col-md-7">
                                <input
                                  type="text"
                                  name="exp"
                                  id="exp"
                                  placeholder="MM/YY"
                                  minLength={5}
                                  maxLength={5}
                                />
                              </div>
                              <div className="col-3 col-md-5">
                                <input
                                  type="password"
                                  name="cvcpwd"
                                  placeholder="●●●"
                                  className="placeicon"
                                  minLength={3}
                                  maxLength={3}
                                />
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-12">
                                <div className="custom-control custom-checkbox custom-control-inline">
                                  <input
                                    id="chk1"
                                    type="checkbox"
                                    name="chk"
                                    className="custom-control-input"
                                  />
                                  <label
                                    htmlFor="chk1"
                                    className="custom-control-label"
                                  >
                                    Business account
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="bottom">
                              <div className="row justify-content-center">
                                <div className="col-12">
                                  <h4 id="total" className="text-center">
                                    Total: $69.94 +{' '}
                                    <span className="text-dark">VAT</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="row justify-content-center">
                                <div className="col-md-8">
                                  <input
                                    type="submit"
                                    defaultValue="PURCHASE CARD"
                                    className="btn btn-success"
                                  />
                                </div>
                              </div>
                            </div>
                          </p>
                        </div>
                        <div class="tab-pane" id="tab2">
                          <p>Howdy, I'm in Section 2.</p>
                        </div>
                      </div>
                    </div>
                    <div className="radio-group">{/* code o day tiep */}</div>
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

export default Donate;
