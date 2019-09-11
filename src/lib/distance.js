export const route1401 = {
    type: 'Feature',
    geometry: {
        type: 'LineString',
        coordinates: [
            // 1401
            [-86.9280522, 33.4536181,"7:21 am","Parkridge Ave and Westfield Drive","4:07 PM"],
            [-86.9332041, 33.4526138,"7:22 am","929 Westfield Drive","4:07 PM"],
            [-86.9351215, 33.4551111,"7:22 am","817 Westfield Drive","4:08 PM"],
            [-86.9381347, 33.4539601,"7:24 am","619 Westfield Drive","4:09 PM"],
            [-86.9382272, 33.4564343,"7:26 am","1000 Hillandale Dr. (Oakland Dr. side)","4:11 PM"],
            [-86.9382363, 33.4569111,"7:27 am","900 Glen Oaks Drive (Hillandale Dr. Side)","4:11 PM"],
            [-86.9367161, 33.4558145,"7:27 am","1000 Glen Oaks Drive","4:12 PM"],
            [-86.9331943, 33.4542869,"7:28 am","800 Glen Crest Dr. (Park Ave. side)","4:12 PM"],
            [-86.9314039, 33.4562005,"7:29 am","846 Park Ave.","4:13 PM"],
            [-86.9308364, 33.457477,"7:30 am","824 Fairfax Drive","4:14 PM"],
            [-86.929134, 33.4575006,"7:31 am","407 Glen Crest Drive","4:15 PM"],
            [-86.9279233, 33.4596563,"7:31 am","345 Glen Crest Drive","4:16 PM"],
            [-86.9283904, 33.4630379,"7:33 am","1184 Red Oak Circle","4:03 PM"],
            [-86.9333984, 33.4653141,"7:35 am","Millstead Road and Post Oak Circle","4:02 PM"],
            [-86.9325679, 33.4664483,"7:35 am","1491 Cambridge BLVD","4:02 PM"],
            [-86.930819, 33.465963,"7:36 am","1101 Cambridge Circle","4:01 PM"],
            [-86.930993, 33.4685918,"7:40 am","1420 Cambridge Blvd","3:35 PM"],
            // 2
            [-86.9212668, 33.4602372,"7:30 am","Ave. C and 61st Street (Back side of Robinson)","4:05 pm"],
            [-86.9202489, 33.4613829,"7:33 am ","Avenue C and Jerry D. Coleman","4:07 pm"],
            [-86.918102, 33.4616704,"7:35 am ","61st Street and Myron Massey Blvd.","4:12 pm"],
            [-86.9166476, 33.4629224,"7:32 am ","60th Street and Myron Massey Blvd.","4:12 pm"],
            [-86.9174697, 33.4650425,"7:33 am","Myron Massey Blvd. and 55th Place","3:53 pm"],
            [-86.916622, 33.465081,"7:35 A.M","Myron Massey Blvd. and 53rd Place","3:55 pm"],
            [-86.9160506, 33.4626561,"7:37 am","516 54th Street (Middle of the block)","3:57 pm"],
            [-86.9169999, 33.4614876,"7:41 am","54th and Avenue D","3:59 pm"],
            [-86.9186049, 33.4602588,"7:43 am","5174 Hillside Drive","3:46 pm"],
            [-86.9207805, 33.4587375,"7:44 am","721 Court G","3:49 pm"],
            // 3
            [-86.9137218, 33.4749726,"7:27 AM","64th Street and Court F","3:47 PM"],
            [-86.909993, 33.4747869,"7:28 AM","65th Street and Myron Massey Blvd.","3:48 PM"],
            [-86.9097361, 33.4732608,"7:30 AM","6616 Myron Massey Blvd.","3:50 PM"],
            [-86.9121553, 33.4718108,"7:33 AM","Terrace Court and Avenue D","3:52 PM"],
            [-86.9159525, 33.4712666,"7:34 A.M","Terrace Court (by the fire hydrate, just","3:53 PM"],
            [-86.9147473, 33.4735524,"7:36 AM","66th Street and Avenue C","3:55 PM"],
            [-86.9151501, 33.4749836,"7:38 AM","64th Street and Avenue C (High/Middle school  ","3:59 PM"],
            [-86.9151707, 33.4758812,"3:45 PM","Fairfield High Preparatory School","7:45 AM"]
        ]
    }
}

export function getClosest(lat1, long1) {


    //console.log(route1401.geometry.coordinates)
    const route1401dist = route1401.geometry.coordinates.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    //console.log(route1401dist)

    return route1401dist.reduce(reducer)
}

const reducer = (smallVal, currentVal) => smallVal < currentVal ? smallVal : currentVal

export function getClosestDetail(lat1, long1) {

    const route1401dist = route1401.geometry.coordinates.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex = route1401dist.indexOf(Math.min(...route1401dist))

    return route1401.geometry.coordinates[maxIndex]
}

export function get3ClosestDetail(lat1, long1) {
    //console.log(route1401.geometry.coordinates)

    const route1401dist = route1401.geometry.coordinates.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex = route1401dist.indexOf(Math.min(...route1401dist))
    var copy = [].concat(route1401.geometry.coordinates)
    copy.splice(maxIndex, 1)
    //console.log(route1401.geometry.coordinates)
    //console.log("max index " + maxIndex)
    //console.log(copy)

    const route1401dist_2 = copy.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex_2 = route1401dist_2.indexOf(Math.min(...route1401dist_2))
    //console.log(copy)

    var copy_2 = [].concat(copy)
    copy_2.splice(maxIndex_2, 1)
    const route1401dist_3 = copy_2.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex_3 = route1401dist_3.indexOf(Math.min(...route1401dist_3))
    //console.log(copy_2)
    //console.log(route1401.geometry.coordinates[maxIndex] + " blah2" + route1401_2[maxIndex_2] + " blah3" + route1401_3[maxIndex_3] + " " + maxIndex + " " + maxIndex_2 + " -- " + route1401.geometry.coordinates)
    //console.log(route1401.geometry.coordinates + " " + maxIndex)
    return [route1401.geometry.coordinates[maxIndex], copy[maxIndex_2], copy_2[maxIndex_3]]
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::                                                                         :::
//:::  This routine calculates the distance between two points (given the     :::
//:::  latitude/longitude of those points). It is being used to calculate     :::
//:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
//:::                                                                         :::
//:::  Definitions:                                                           :::
//:::    South latitudes are negative, east longitudes are positive           :::
//:::                                                                         :::
//:::  Passed to function:                                                    :::
//:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles                                  :::
//:::                                                                         :::
//:::  Worldwide cities and other features databases with latitude longitude  :::
//:::  are available at https://www.geodatasource.com                         :::
//:::                                                                         :::
//:::  For enquiries, please contact sales@geodatasource.com                  :::
//:::                                                                         :::
//:::  Official Web site: https://www.geodatasource.com                       :::
//:::                                                                         :::
//:::               GeoDataSource.com (C) All Rights Reserved 2018            :::
//:::                                                                         :::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//https://www.geodatasource.com/developers/javascript

export function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    } else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === "K") { dist = dist * 1.609344 }
        if (unit === "N") { dist = dist * 0.8684 }
        return dist;
    }
}
