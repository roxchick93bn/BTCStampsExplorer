import { connectDb, Src20Class, CommonClass } from "$lib/database/index.ts";
import { getBtcAddressInfo } from "../utils/btc.ts";
import { paginate } from "../utils/util.ts";

export const api_get_stamp_balance = async (address: string, limit = 1000, page = 1) => {
  try {
    const client = await connectDb();
    const balances = await CommonClass.get_stamp_balances_by_address_with_client(
      client,
      address,
      limit,
      page
    );
    await client.close();
    return balances;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const api_get_src20_valid_tx = async (tx_hash: string) => {
  try {
    const client = await connectDb();
    const tx_data = await Src20Class.get_valid_src20_tx_by_tx_hash_with_client(
      client,
      tx_hash,
    );
    await client.close();
    return tx_data.rows[0];
  } catch (error) { 
    console.error(error);
    throw error;
  }
};

export const api_get_src20_balance = async (address: string) => {
  try {
    const client = await connectDb();
    const balances = await Src20Class.get_src20_balance_by_address_with_client(
      client,
      address,
    );
    await client.close();
    return balances.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const api_get_src20_balance_by_tick = async (
  address: string,
  tick: string,
) => {
  try {
    const client = await connectDb();
    const balances = await Src20Class.get_src20_balance_by_address_and_tick_with_client(
      client,
      address,
      tick,
    );
    await client.close();
    return balances.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const api_get_balance = async (address: string, limit = 1000, page = 1) => {
  
  try {
    const client = await connectDb();
    const total =
      (await CommonClass.get_total_stamp_balance_with_client(client, address))
        .rows[0]["total"] || 0;
    const pagination = paginate(total, page, limit);

    const btcInfo = await getBtcAddressInfo(address);
    const stamps = await CommonClass.get_stamp_balances_by_address_with_client(
      client,
      address,
      limit,
      page
    );
    const src20 = await Src20Class.get_src20_balance_by_address_with_client(
      client,
      address,
    );
    await client.close();
    return {
      ...pagination,
      btc: btcInfo,
      data:{
      stamps: stamps,
      src20: src20.rows,
      }
      
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
