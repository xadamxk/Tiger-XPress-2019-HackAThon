const route1401 = {
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
            [-86.9212668, 33.4602372],
            [-86.9202489, 33.4613829],
            [-86.918102, 33.4616704],
            [-86.9166476, 33.4629224],
            [-86.9174697, 33.4650425],
            [-86.916622, 33.465081],
            [-86.9160506, 33.4626561],
            [-86.9169999, 33.4614876],
            [-86.9186049, 33.4602588],
            [-86.9207805, 33.4587375],
            [-86.9220986, 33.4593501],
            [-86.9228749, 33.4606401],
            [-86.9225976, 33.4621511],
            [-86.920449, 33.464128],
            [-86.9199359, 33.4634851],
            [-86.9210319, 33.463031],
            [-86.921372, 33.464627],
            [-86.9229499, 33.4643907],
            [-86.9245547, 33.4635993],
            [-86.9248864, 33.4625942],
            [-86.9257829, 33.4637998],
            [-86.9269031, 33.4654508],
            [-86.9246142, 33.4655687],
            [-86.9232921, 33.4665866],
            [-86.9239676, 33.4701969],
            [-86.919522, 33.4692013],
            [-86.9221529, 33.4680798],
            [-86.924314, 33.4682649],
            [-86.9265736, 33.4675338],
            [-86.9271912, 33.4676884],
            [-86.9282338, 33.4695079],
            [-86.919522, 33.4692013],
            [-86.9260916, 33.4707176],
            [-86.9281947, 33.4741871],
            [-86.9263943, 33.4751923],
            [-86.9243101, 33.4747144],
            [-86.9239149, 33.471516],
            [-86.9260029, 33.4712899],
            [-86.9257479, 33.4723648],
            [-86.9256858, 33.4744454],
            // 3
            [-86.9137218, 33.4749726],
            [-86.909993, 33.4747869],
            [-86.9097361, 33.4732608],
            [-86.9121553, 33.4718108],
            [-86.9159525, 33.4712666],
            [-86.9147473, 33.4735524],
            [-86.9151501, 33.4749836],
            [-86.9151707, 33.4758812],
            [-86.9072995, 33.4769925],
            [-86.9071763, 33.4771589],
            [-86.9070934, 33.4827151],
            [-86.9070929, 33.4823689],
            [-86.9128795, 33.4836404],
            [-86.9117931, 33.4868579],
            [-86.9136822, 33.4776958],
            [-86.9106186, 33.4842922],
            [-86.9053397, 33.4848146]
        ]
    }
}

export function getClosest(lat1, long1) {


    console.log(route1401.geometry.coordinates.coordinates)
    const route1401dist = route1401.geometry.coordinates.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    //console.log(route1401dist)

    return route1401dist.reduce(reducer)
}

const reducer = (smallVal, currentVal) => smallVal < currentVal ? smallVal : currentVal

export function getClosestDetail(lat1, long1) {

    const route1401dist = route1401.geometry.coordinates.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex = route1401dist.indexOf(Math.max(route1401dist))

    return route1401.geometry.coordinates[maxIndex]
}

export function get3ClosestDetail(lat1, long1) {
    //console.log(route1401.geometry.coordinates)

    const route1401dist = route1401.geometry.coordinates.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex = route1401dist.indexOf(Math.max(...route1401dist))
    var copy = [].concat(route1401.geometry.coordinates)
    copy.splice(maxIndex, 1)
    //console.log(route1401.geometry.coordinates)
    //console.log("max index " + maxIndex)
    //console.log(copy)

    const route1401dist_2 = copy.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex_2 = route1401dist_2.indexOf(Math.max(...route1401dist_2))
    //console.log(copy)

    var copy_2 = [].concat(copy)
    copy_2.splice(maxIndex_2, 1)
    const route1401dist_3 = copy_2.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex_3 = route1401dist_3.indexOf(Math.max(...route1401dist_3))
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
