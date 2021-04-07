const isAnagram = (str1, str2) => {
    const lowerCasedStr1 = str1.toLowerCase();
    const lowerCasedStr2 = str2.toLowerCase();
    const arr1 = lowerCasedStr1.split('');
    const arr2 = lowerCasedStr2.split('');
    return arr1.sort().join() === arr2.sort().join();
}

console.log(isAnagram('Mary', 'Army'));
console.log(isAnagram('Mary2', 'Army'));