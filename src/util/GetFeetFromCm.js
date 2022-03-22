function GetFeetFromCm(centemeters) {
    let inches = centemeters / 2.54;
  //  let ans = +(Math.round((centemeters / 30.48) + "e+2") + "e-2");
    let feet = Math.floor(inches/12);
    let inchesRemaining = Math.ceil(((inches/12) - feet) * 12);
    console.log(inchesRemaining);
    let response = feet + ' ft, ' + inchesRemaining + ' in'
    return response;
}

export default GetFeetFromCm;