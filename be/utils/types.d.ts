import { Document } from "mongoose";
import { iRole } from "./enums";

export interface iUser {
  name: string;
  address: string;
  email: string;
  phone: number;
  password: string;
  verify: boolean;
  role: string;
  avatarUrl: string;
}

export interface iUserData extends iUser, Document {}

export interface iDelivery {
  name: string;
  address: string;
  email: string;
  phone: number;
  password: string;
  verify: boolean;
  role: string;
  avatarUrl: string;
}
export interface iDeliveryData extends iDelivery, Document {}
