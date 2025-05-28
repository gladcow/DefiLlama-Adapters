const iota = require('../helper/chain/iota')

async function tvl() {
    const pool = await iota.getObject('0x8c25ec843c12fbfddc7e25d66869f8639e20021758cac1a3db0f6de3c9fda2ed');
    const iotaAmount = pool.fields.total_supply.fields.value / 10 ** 9;
    return {
        iota: iotaAmount,
    }
}

module.exports = {
    methodology: "Calculates the amount of IOTA staked in stIota liquid staking contracts.",
    iota: {
        tvl,
    }
}