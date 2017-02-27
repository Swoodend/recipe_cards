function getKey(length){
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
    let key = [];
    for(let i = 0; i < length; i++){
      let randIndex = Math.floor(Math.random() * 62 );
      key.push(chars[randIndex]);
    }
    return key.join('');
}

export default getKey;
