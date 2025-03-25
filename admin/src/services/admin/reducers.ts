import AdminService from "@/services/admin/Admin";
import { IAdmin } from "../../types";
//import { setData } from "@/lib/localStorage";

export type ActionType =
  | { type: "LOGIN"; payload: any }
  | { type: "CREATE_ADMIN"; payload: IAdmin }
  | { type: "GET_ADMIN"; payload: any }
  | { type: "UPDATE_ADMIN"; payload: any }
  | { type: "GET_GAME_BY_USER_ADDRESS"; payload: any };

export const initialState: any = {
  username: "",
  fullname: "",
  email: "",
  role: "",
};

export const admin = new AdminService();

export async function reducer(state: any, action: ActionType) {
  switch (action.type) {
    case "CREATE_ADMIN": {
      await admin.create_admin({
        username: action.payload.username,
        fullname: action.payload.fullname,
        email: action.payload.email,
        role: action.payload.role,
      });
      return { ...state, ...action.payload };
    }
    case "LOGIN": {
      await admin.login(action.payload.email, action.payload.password);
      return { ...state, ...action.payload };
    }
    case "UPDATE_ADMIN": {
      await admin.update_admin(
        action.payload.username,
        action.payload.fullname,
        action.payload.email,
        action.payload.role,
      );
      return { ...state, ...action.payload };
    }
    case "GET_ADMIN": {
      const payload = await admin.getGameInformation(
        action.payload.contract_address,
      );
      return {
        ...state,
        //...payload
      };
    }
    case "GET_GAME_BY_USER_ADDRESS": {
      const payload = await admin.getGameInformationByUserAddress(
        action.payload.player,
      );
      /**  if (payload && payload.length > 0) {
        if (payload[0].game_end === false) {
          //setData("gameRecord", payload[0] )
        } else {
          //setData("gameRecord", null )
        }
          //return { ...payload[0] };
      } else {
          return { ...initialState };
        }**/
    }

    default:
      throw Error("Unknown action: ");
  }
}
