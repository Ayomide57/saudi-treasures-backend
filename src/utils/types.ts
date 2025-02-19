import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    fullname: string; 
    lastname: string; 
    email: string; 
    phonenumber: number; 
    gender: string;
    password: string;
    country: string;
    state: string;
    created_at: Date;
};

export interface IAdmin extends mongoose.Document {
    username: string;
    fullname: string; 
    email: string; 
    password: string;
    created_at: Date;
};

export interface IEmailVerify extends mongoose.Document {
    email: string; 
    verify_code: string;
};


export interface IPayment extends mongoose.Document {
    user_id: string;
    card_number: number; 
    expiry_date: string;
    cvv: number;
    created_at: Date;
};

export interface IEmail {
    EmailVerify: string,
    ResetPassword: string
}

export interface IFlight extends mongoose.Document {
    user_id: string;
    booking_type: string; 
    flight_type: string; 
    date: Date; 
    booking_number: number; 
    location_from: string;
    location_to: string;
    flight_class: string;
    flight_company: string;
    amount: number;
    created_at: Date;
};

export interface IHotel extends mongoose.Document {
  user_id: string;
  room_type: string;
  guests: string;
  check_in: string;
  check_out: number;
  reason: string;
  amount: number;
  created_at: Date;
};

export interface INotification extends mongoose.Document {
    notification_type: string;
    recipient_id: string;
    message: string;
    read: string;
    delete: boolean;
    created_at: Date;
};

export interface IInvoice extends mongoose.Document {
    invoice_type: string;
    order: string;//hotel booking or flight booking
    description: string;
    subtotal: number;
    tax: number;
    total: number;
    created_at: Date;
};

