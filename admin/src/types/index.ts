export interface IAdmin {
  username: string;
  fullname: string;
  email: string;
  role: string;
}

export type Asset = {
  id: any;
  p_owner: string;
  nftAddress: string;
  property_RegId: number;
  value: number;
  verified: boolean;
};
