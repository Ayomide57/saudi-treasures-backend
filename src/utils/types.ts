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
    user_image: string,
    passport_image: string,
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

export interface IHotelBooking extends mongoose.Document {
  user_id: string;
  room_type: string;
  guests: string;
  check_in: string;
  check_out: number;
  reason: string;
  amount: number;
  created_at: Date;
};

export interface IHotel extends mongoose.Document {
    hotel_name: string,
    address: string,
    description: string,
    price: number,
    image: string,
    created_at: Date,
  };
  export interface IHotelRoom extends mongoose.Document {
    hotel_id: string,
    room_type: string,
    price: number,
    guests: number,
    image: string,
    created_at: Date,
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
export interface ITour extends mongoose.Document {
    package_name: string,
    package_types: string,
    service_types: string,
    created_at: Date,
}

export interface ITourService extends mongoose.Document {
    service_name: string,
    amount: number,
    options: string,
    created_at: Date,
}

export interface ITour extends mongoose.Document {
    package_name: string,
    package_types: string,
    service_types: string,
    created_at: Date,
}

export interface IVisa extends mongoose.Document {
    user_id: string,
    visa_type: string,
    package_id: string,
    created_at: Date,
}

export interface IVisaPackage extends mongoose.Document {
    name: string,
    country: string,
    duration: number,
    processing_time: string,
    amount: number,
    created_at: Date,
}

export interface IReport extends mongoose.Document {
    user_id: string,
    report: string,
    created_at: Date,
}