export const nextServerAPI = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export const contractAddresses: Record<string, Record<string, string>> = {
  quizApp: {
    // Ploygon
    '137': '0xe69DdAeb729E011669060cF80bdA130FEC511bc7', // replace with mainnet addr
    '80001': '0xF2ead98fE64c78aCe842B8E5BE8691444910f151',
    // Meter
    '83': '0x4DE2B5064625b28A3a1de1f525A8DD91BB1c433e',
  },
};

export const CHAIN_ID = 8001; // 80001,83
export const QUIZ_LENGTH = 4;
