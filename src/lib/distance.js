export function getClosest(lat1, long1) {

    const route1401 = {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: [
                [-86.9137218, 33.4749726],
                [-86.909993, 33.4747869],
                [-86.9097361, 33.4732608],
                [-86.9121553, 33.4718108],
                [-86.9159525, 33.4712666],
                [-86.9147473, 33.4735524],
                [-86.9151501, 33.4749836],
                // Below this is: route1405stops
                [-86.9151707, 33.4758812],
                [-86.9072995, 33.4769925],
                [-86.9071763, 33.4771589],
                [-86.9070934, 33.4827151],
                [-86.9070929, 33.4823689],
                [-86.9128795, 33.4836404],
                [-86.9117931, 33.4868579],
                [-86.9136822, 33.4776958],
                [-86.9106186, 33.4842922],
                [-86.9053397, 33.4848146],
                [-86.9280522, 33.4536181],
                [-86.9332041, 33.4526138],
                [-86.9351215, 33.4551111],
                [-86.935826, 33.4577531],
                [-86.9381347, 33.4539601],
                [-86.9382272, 33.4564343],
                [-86.9382363, 33.4569111],
                [-86.9367161, 33.4558145],
                [-86.9331943, 33.4542869],
                [-86.9314039, 33.4562005],
                [-86.9308364, 33.457477],
                [-86.929134, 33.4575006],
                [-86.9279233, 33.4596563],
                [-86.9283904, 33.4630379],
                [-86.9333984, 33.4653141],
                [-86.9325679, 33.4664483],
                [-86.930819, 33.465963],
                [-86.930993, 33.4685918],
            ]
        }
    }

    const route1401dist = route1401.geometry.coordinates.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    //console.log(route1401dist)

    return route1401dist.reduce(reducer)
}

const reducer = (smallVal, currentVal) => smallVal < currentVal ? smallVal : currentVal

export function getClosestDetail(lat1, long1) {
    const route1401 = {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: [
                [-86.9137218, 33.4749726],
                [-86.909993, 33.4747869],
                [-86.9097361, 33.4732608],
                [-86.9121553, 33.4718108],
                [-86.9159525, 33.4712666],
                [-86.9147473, 33.4735524],
                [-86.9151501, 33.4749836],
                // Below this is: route1405stops
                [-86.9151707, 33.4758812],
                [-86.9072995, 33.4769925],
                [-86.9071763, 33.4771589],
                [-86.9070934, 33.4827151],
                [-86.9070929, 33.4823689],
                [-86.9128795, 33.4836404],
                [-86.9117931, 33.4868579],
                [-86.9136822, 33.4776958],
                [-86.9106186, 33.4842922],
                [-86.9053397, 33.4848146],
                [-86.9280522, 33.4536181],
                [-86.9332041, 33.4526138],
                [-86.9351215, 33.4551111],
                [-86.935826, 33.4577531],
                [-86.9381347, 33.4539601],
                [-86.9382272, 33.4564343],
                [-86.9382363, 33.4569111],
                [-86.9367161, 33.4558145],
                [-86.9331943, 33.4542869],
                [-86.9314039, 33.4562005],
                [-86.9308364, 33.457477],
                [-86.929134, 33.4575006],
                [-86.9279233, 33.4596563],
                [-86.9283904, 33.4630379],
                [-86.9333984, 33.4653141],
                [-86.9325679, 33.4664483],
                [-86.930819, 33.465963],
                [-86.930993, 33.4685918],
            ]
        }
    }

    const route1401dist = route1401.geometry.coordinates.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex = route1401dist.indexOf(Math.max(route1401dist))

    return route1401.geometry.coordinates[maxIndex]
}

export function get3ClosestDetail(lat1, long1) {
    const route1401 = {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: [
                [-86.9137218, 33.4749726],
                [-86.909993, 33.4747869],
                [-86.9097361, 33.4732608],
                [-86.9121553, 33.4718108],
                [-86.9159525, 33.4712666],
                [-86.9147473, 33.4735524],
                [-86.9151501, 33.4749836],
                // Below this is: route1405stops
                [-86.9151707, 33.4758812],
                [-86.9072995, 33.4769925],
                [-86.9071763, 33.4771589],
                [-86.9070934, 33.4827151],
                [-86.9070929, 33.4823689],
                [-86.9128795, 33.4836404],
                [-86.9117931, 33.4868579],
                [-86.9136822, 33.4776958],
                [-86.9106186, 33.4842922],
                [-86.9053397, 33.4848146],
                [-86.9280522, 33.4536181],
                [-86.9332041, 33.4526138],
                [-86.9351215, 33.4551111],
                [-86.935826, 33.4577531],
                [-86.9381347, 33.4539601],
                [-86.9382272, 33.4564343],
                [-86.9382363, 33.4569111],
                [-86.9367161, 33.4558145],
                [-86.9331943, 33.4542869],
                [-86.9314039, 33.4562005],
                [-86.9308364, 33.457477],
                [-86.929134, 33.4575006],
                [-86.9279233, 33.4596563],
                [-86.9283904, 33.4630379],
                [-86.9333984, 33.4653141],
                [-86.9325679, 33.4664483],
                [-86.930819, 33.465963],
                [-86.930993, 33.4685918],
            ]
        }
    }
    //console.log(route1401.geometry.coordinates)

    const route1401dist = route1401.geometry.coordinates.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex = route1401dist.indexOf(Math.max(...route1401dist))
    var copy = [].concat(route1401.geometry.coordinates)
    copy.splice(maxIndex, 1)
    console.log(route1401.geometry.coordinates)
    console.log("max index " + maxIndex)
    console.log(copy)

    const route1401dist_2 = copy.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex_2 = route1401dist_2.indexOf(Math.max(...route1401dist_2))
    //console.log(copy)

    var copy_2 = [].concat(copy)
    copy_2.splice(maxIndex_2, 1)
    const route1401dist_3 = copy_2.map(x => distance(lat1, long1, x[1], x[0], 'M'))
    const maxIndex_3 = route1401dist_3.indexOf(Math.max(...route1401dist_3))
    console.log(copy_2)
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
