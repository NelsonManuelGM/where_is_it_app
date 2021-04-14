
// Converts numeric degrees to radians
function toRad(value:number)
{
    return value * Math.PI / 180;
}


//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function distanceBetweenPoint(lat1:number, lon1:number, lat2:number, lon2:number)
{
    let R = 6371; // km
    let dLat = toRad(lat2-lat1);
    let dLon = toRad(lon2-lon1);
    let radLat1 = toRad(lat1);
    let radLat2 = toRad(lat2);

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(radLat1) * Math.cos(radLat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return  R * c * 1000; //to meter
}



export default distanceBetweenPoint
