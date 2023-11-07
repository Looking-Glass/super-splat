import { main } from './main';
import { version as supersplatVersion } from '../package.json';
import { version as pcuiVersion, revision as pcuiRevision } from 'pcui';
import { version as engineVersion, revision as engineRevision } from 'playcanvas';
//@ts-ignore
import {LookingGlassWebXRPolyfill} from 'https://unpkg.com/@lookingglass/webxr@0.4.0/dist/bundle/webxr.js'
import './style.scss';

// print out versions of dependent packages
console.log(`Supersplat v${supersplatVersion} | PCUI v${pcuiVersion} (${pcuiRevision}) | PlayCanvas Engine v${engineVersion} (${engineRevision})`);

LookingGlassWebXRPolyfill.init({
    targetY: 1,
    targetZ: 0,
    targetDiam: 3,
    fovy: (14 * Math.PI) / 180,
})

console.log(navigator.xr)

main();

