import { IAdmin} from "@/types";



export default class AdminService {
  async create_admin({
    username,
  fullname,
  email,
  role,
  }: IAdmin) {
    /** try {
            const { data, error } = await supabase.from('game_record')
                .insert({ m1, m2, player1, player2, contract_address, amount });  
            if (error) console.log("fail", error);
            return data;
        } catch (error) {
            console.log("Error", error)
        }*/
  }

  async login(email: number, password: string) {
    try {
           
        } catch (error) {
            console.log("Error", error)
        }
  }

  async update_winner(player: string, contract_address: string) {
    /**try {
            const { error } = await supabase.from('game_record')
                .update({ winner: player })
                .eq('contract_address', contract_address);
            if (error) console.log("fail", error);
            return true;
        } catch (error) {
            console.log("Error", error)
        }*/
  }

  async update_game_end(game_end: boolean, contract_address: string) {
    /**try {
            const { error } = await supabase.from('game_record')
                .update({ game_end: game_end })
                .eq('contract_address', contract_address);
            if (error) console.log("fail", error);
            return true;
        } catch (error) {
            console.log("Error", error)
        }*/
  }

  async getGameInformation(contract_address: string) {
    /**try {
            const { data, error } = await supabase
            .from('game_record')
                .select('m2, player1, player2, contract_address, amount, winner, game_end')
                  .limit(1)
                .eq('contract_address', contract_address);
            if (error) console.log("fail", error);
            return data;
        } catch (error) {
            console.log("Error", error)
        }**/
  }

  async getGameInformationByUserAddress(player: string) {
    /**try {
            const { data, error } = await supabase
            .from('game_record')
                .select('m2, player1, player2, contract_address, amount, winner, game_end')
                                  .limit(1)
                .or(`player1.eq.${player},player2.eq.${player}`);
            if (error) console.log("fail", error);
            return data;
        } catch (error) {
            console.log("Error", error)
        }**/
  }
}