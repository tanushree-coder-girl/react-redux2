import { COUNTING , MINUS} from './../constants';

export const counting = (data) => {
    //console.log(data);
    return {
        type : COUNTING,
        payload : data
    }
}
export const minuscounting = (data) => {
    return {
        type : MINUS,
        payload : data
    }
}