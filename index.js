// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
    const result = Object.assign({}, driver)
    result[key] = value
    return result
    
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    const result = Object.assign({}, driver)
    delete result[key]
    return result

}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver

}