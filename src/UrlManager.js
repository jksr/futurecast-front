import { isPdbId, isJobId } from "./IdUtils";
import {RootPath} from "./Settings"

export const INFO_URL = RootPath+'infos/info.json';
//export const INFO_URL = '/infos/info.json';

const pdbBaseUrl = (pdb) =>{
    if(isPdbId){
        return 'http://sts.bioe.uic.edu/castp/data/pdb/'
            +pdb.substring(1,3)+'/'+pdb+'/';
    }
    else if(isJobId){// TODO need test
        return 'http://sts.bioe.uic.edu/castp/data/tmppdb/'+pdb+'/';
    }
    else{
        return 'http://sts.bioe.uic.edu/castp/data/pdb/an_directory_will_never_exist_hahaha/';
    }
}

const pdbProcessedUrl = (pdb) =>{
    return pdbBaseUrl(pdb)+'processed/';
}

export function pdbGeneralInfoUrl(pdb) {
    return pdbProcessedUrl(pdb)+pdb+'.basic.json';
}
export function pdbPdbFileUrl(pdb) {
    return pdbBaseUrl(pdb)+pdb+'.pdb';
}
export function pdbAssemblyUrl(pdb){
    return pdbProcessedUrl(pdb)+pdb+'.assem.json';
}
export function pdbDownloadUrl(pdb){
    return pdbProcessedUrl(pdb)+pdb+'.zip'
}
export function pdbPocMeasureUrl(pdb){
    return pdbProcessedUrl(pdb)+pdb+'.measure.json'
}
export function pdbSeqInfoUrl(pdb){
    return pdbProcessedUrl(pdb)+pdb+'.seq.json'
}
export function pdbFeatInfoUrl(pdb){
    return pdbProcessedUrl(pdb)+pdb+'.feat.json'
}
export function pdbBulbUrl(pdb){
    return pdbProcessedUrl(pdb)+pdb+'.bulb.json' 
}