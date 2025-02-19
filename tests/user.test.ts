/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "supertest";
import { expect } from "expect";

import app from "../src/server";
import db from "../src/config/db";
import jwt from "jsonwebtoken";

let server: any,
  token: any,
  tokenAdmin: any,
  user_id: any,
  admin_id: any,
  flight_id: any,
  hotel_id: any,
  payment_id: any,
  notification_id: any,
  location_from: any;
  //location_to: any;


beforeEach(async () => {
 
  db();
  server = app.listen(6000);
});

afterEach(async () => {
  server.close();
});

//Test User Registration Endpoint"
it("respond with valid Status code for Api home", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.res.statusMessage).toBe("OK");
  expect(response.text).toEqual("Hello World!");
});

it("Test JWT", async () => {
 // user matched!
        const secretKey = process.env.SECRET_JWT || "";
        const token = jwt.sign({ user_id: "243fgfxgchct6" }, secretKey, {
            expiresIn: '24h'
        });  
        const decoded = jwt.verify(token, secretKey);
    console.log(`token: ${token}`);
    console.log(`decoded: ${decoded}`);

});

it("Register user info", async () => {
  const response = await request(app).post("/api/users/signup").send({
    fullname: "Ayomide Aderojuola",
    email: "sauditreasureslmt@gmail.com",
    phonenumber: "+2348147643756",
    password: "ayomide1qaz",
    confirm_password: "ayomide1qaz",
    gender: "male",
    country: "Nigeria",
    state: "Lagos",
    created_at: Date.now(),
  });

  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success!");
}, 10000);

it("Login: respond with user info", async () => {
  const response = await request(app).post("/api/users/login").send({
    email: "sauditreasureslmt@gmail.com",
    password: "ayomide1qaz",
  });
  token = response.body.data.token;
  user_id = response.body.data._id;
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success!");
}, 10000);

it("Update User Information", async () => {
  const response = await request(app)
    .patch("/api/users/settings/update-account")
    .send({
      fullname: "Ayomide Olalekan Aderojuola",
      phonenumber: "+2348022891226",
      gender: "male",
      country: "Nigeria",
      state: "Abuja",
    })
    .set("Authorization", "Bearer " + token);

  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully Updated!");
}, 10000);

it("Fetch User Information", async () => {
  const response = await request(app)
    .get("/api/users/settings/profile")
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);

it("Fetch User Information By ID", async () => {
  const response = await request(app)
    .get(`/api/users/user/${user_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);

it("add users card payment", async () => {
  const response = await request(app)
    .post("/api/users/settings/add-card")
    .send({
      user_id: user_id,
      card_number: 5988456745671234,
      expiry_date: "01/25",
      cvv: 127,
      created_at: Date.now(),
    })
    .set("Authorization", "Bearer " + token);
    payment_id = response.body.data; 
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success!");
}, 10000);

//Test Admin Registration Endpoint"

it("Create new admin", async () => {
  const response = await request(app).post("/api/admin/create_admin").send({
    username: "Lexy",
    fullname: "Ayomide Aderojuola",
    email: "aderojuolaayomide57@gmail.com",
    password: "ayomide1qaz",
    role: "editor",
    created_at: Date.now(),
  });

  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);

it("Login: respond with admin info", async () => {
  const response = await request(app).post("/api/admin/login").send({
    email: "aderojuolaayomide57@gmail.com",
    password: "ayomide1qaz",
  });
  tokenAdmin = response.body.data.token;
  admin_id = response.body.data._id;
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success!");
}, 10000);

it("Update Admin Information", async () => {
  const response = await request(app)
    .patch("/api/admin/settings/update-account")
    .send({
      username: "Lexxy",
      fullname: "Ayomide Aderojuola",
      role: "super",
    })
    .set("Authorization", "Bearer " + tokenAdmin);

  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully Updated!");
}, 10000);

it("Fetch Admin Information", async () => {
  const response = await request(app)
    .get("/api/admin/settings/profile")
    .set("Authorization", "Bearer " + tokenAdmin);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);

//Flight Booking Endpoint
it("user book a flight", async () => {
  const response = await request(app)
    .post("/api/flight/book-flight")
    .send({
      user_id: user_id,
      booking_type: "Pilgrimage",
      flight_type: "One way",
      date: new Date("2025-02-12"),
      booking_number: 2,
      location_from: "Nigeria",
      location_to: "Los angeles",
      flight_class: "Business",
      flight_company: "British Airways",
      amount: 4000,
      created_at: Date.now(),
    })
    .set("Authorization", "Bearer " + token);
  flight_id = response.body.data; 
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success!");
}, 10000);

it("Update: Flight bookings", async () => {
  const response = await request(app)
    .patch("/api/flight/update-flight-booking")
    .send({
      flight_id: flight_id,
      booking_type: "Pilgrimage",
      flight_type: "One way",
      date: new Date("2025-02-12"),
      booking_number: 2,
      location_from: "Lagos",
      location_to: "New York",
      flight_class: "Business",
      flight_company: "British Airways",
      amount: 4000,
    })
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully Updated!");
}, 10000);

it("Fetch Flight Booking By ID", async () => {
  const response = await request(app)
    .get(`/api/flight/booking/${flight_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);

it("Fetch Flight Booking By User ID", async () => {
  const response = await request(app)
    .get(`/api/flight/user/booking/${user_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);

//Hotel Booking Endpoint
it("user book a hotel", async () => {
  const response = await request(app)
    .post("/api/hotel/book-hotel")
    .send({
      user_id: user_id,
      room_type: "Suite",
      guests: 2,
      check_in: new Date("2025-02-12"),
      check_out: new Date("2025-02-15"),
      reason: "Hajj reservation",
      amount: 4000,
      created_at: Date.now(),
    })
    .set("Authorization", "Bearer " + token);
      hotel_id = response.body.data; 
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success!");
}, 10000);

it("Update: hotel booking", async () => {
  const response = await request(app)
    .patch("/api/hotel/update-hotel-booking")
    .send({
      hotel_id: hotel_id,
      room_type: "Suite",
      guests: 2,
      check_in: new Date("2025-02-12"),
      check_out: new Date("2025-02-15"),
      reason: "Hajj reservations",
      amount: 4000,
    })
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully Updated!");
}, 10000);

it("Fetch Hotel Booking By ID", async () => {
  const response = await request(app)
    .get(`/api/hotel/booking/${hotel_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);

it("Fetch Hotel Booking By User ID", async () => {
  const response = await request(app)
    .get(`/api/hotel/user/booking/${user_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);

//Notification
it("Add new notification", async () => {
  const response = await request(app)
    .post("/api/notification/add-notification")
    .send({
      recipient_id: user_id,
      notification_type: "Suite",
      read: false,
      message: "Hajj Reservation Notiication",
      delete: false,
      created_at: Date.now(),
    })
    .set("Authorization", "Bearer " + token);
  notification_id = response.body.data;
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success!");
}, 10000);

it("Fetch Notification By ID", async () => {
  const response = await request(app)
    .get(`/api/notification/fetch/${notification_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);

it("Fetch Notification By User ID", async () => {
  const response = await request(app)
    .get(`/api/notification/user/notification/${user_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success");
}, 10000);


//Amadeus Test

it("Search City and Country Using Amadeus API", async () => {
  const response = await request(app)
    .get(`/api/flight/search-location/London`)
    .set("Authorization", "Bearer " + token);
  console.log(response.body.data);
  location_from = response.body.data.data[0].iataCode;
  console.log(location_from);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success!");
}, 10000);

it("Search Flight Using Amadeus API", async () => {
  const response = await request(app)
    .post(`/api/flight/search-flight`)
    .send({
      date: "2025-03-12",
      booking_number: "2",
      location_from: "LON",
      location_to: "PAR",
    })
    .set("Authorization", "Bearer " + token);
  console.log(response.body.data);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Success!");
}, 10000);


//Test Email
//clientID: 106967417801541712799

/**it("Test Sending Email", async () => {
          const transport = await nodemailer.createTransport({
            //service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
              type: "OAuth2",
              user: process.env.EMAIL,
            },
          });
      
          const mailOptions = {
            from: process.env.EMAIL,
            to: "lightout254@gmail.com",
            subject: "subject",
            text: "bodybodybody",
          };
      
          transport.sendMail(mailOptions, function(error, info){
              if (error) {
                  console.log(error);
              } else {
                  console.log('Email sent: ' + info.response);
              }
          });
  transport.set("oauth2_provision_cb", (user, renew, callback) => {
    const accessToken = userTokens[user];
    if (!accessToken) {
      return callback(new Error("Unknown user"));
    } else {
      return callback(null, accessToken);
    }
  });
}, 10000);**/


//delete Information, User, Admin, Flight Booking Hotel Booking,

it("Delete: user payment method", async () => {
  const response = await request(app)
    .delete(`/api/users/settings/payment/delete/${payment_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully deleted.");
}, 10000);

it("Delete: user flight booking", async () => {
  const response = await request(app)
    .delete(`/api/flight/delete/${flight_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully deleted.");
}, 10000);

it("Delete: user hotel booking", async () => {
  const response = await request(app)
    .delete(`/api/hotel/delete/${hotel_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully deleted.");
}, 10000);

it("Delete: user notification", async () => {
  const response = await request(app)
    .delete(`/api/notification/delete/${notification_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully deleted.");
}, 10000);

it("Delete: user info", async () => {
  const response = await request(app)
    .delete(`/api/users/delete/${user_id}`)
    .set("Authorization", "Bearer " + token);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully deleted.");
}, 20000);

it("Delete: admin info", async () => {
  const response = await request(app)
    .delete(`/api/admin/delete/${admin_id}`)
    .set("Authorization", "Bearer " + tokenAdmin);
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual("Successfully deleted.");
}, 20000);











