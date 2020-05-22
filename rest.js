 // ####################################################
// 4. rest parameters ES6
// it returns an array which us very handy
// #####################################################

function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log(2020 - cur >= limit))
}
 isFullAge6(18, 1990, 2000, 2006, 2004)
