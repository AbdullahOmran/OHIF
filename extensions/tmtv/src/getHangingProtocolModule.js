import { ptCT } from './hps/ptCT';
import { mprPt } from './hps/mprPt';
import { mprCt } from './hps/mprCt';
import { mprFusion } from './hps/mprFusion';
import { mip } from './hps/mip';

function getHangingProtocolModule() {
  return [
    {
      name: mprPt.id,
      protocol: mprPt,
    },
    {
      name: mprCt.id,
      protocol: mprCt,
    },
    {
      name: mprFusion.id,
      protocol: mprFusion,
    },
    {
      name: mip.id,
      protocol: mip,
    },
  ];
}

export default getHangingProtocolModule;
