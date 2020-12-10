import _ from 'lodash';

export default function getData(siteData, dataPath) {

    console.log("GET DATA")

    dataPath = _.trim(dataPath, '/');
    if (_.startsWith(dataPath, 'src/data/')) {
        dataPath = dataPath.replace('src/data/', '');
    }

    console.log(dataPath)
    // remove extension
    dataPath = dataPath.replace(/\.\w+$/, '');
    const path = dataPath.split('/');
    const key = path.slice(-1)[0]
    console.log(siteData.categories[key])
    return siteData.categories[key];
}
