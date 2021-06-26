const { expect } = require('@jest/globals');
const{Node, LinkedList, HashTable}=require('./hashtable');
it ('should Add a ashar/value to your hashtable' , ()=>{
  let hashtable = new HashTable (1021);
  let obj = { 'ashar' : 'tired'};
  hashtable.add ('ashar' , 'tired');
  let hashed = hashtable.hash ('ashar');
  expect(hashtable.table[hashed].head.value).toEqual (obj);
});

it ('should Retrieve based on a ashar returns the value stored ' , ()=>{
  let hashtable = new HashTable (1021);
  hashtable.add ('ashar' , 'tired');
  hashtable.add ('ashar' , 'tired2');
  expect(hashtable.get ('ashar')).toEqual ([ 'tired' , 'tired2']);
  expect(hashtable.get ('sick')).toBeNull;
});

it ('should return null for a ashar that does not exist in the hashtable' , ()=>{
  let hashtable = new HashTable (1021);
  hashtable.add ('ashar' , 'tired');
  hashtable.add ('ashar' , 'tired2');
  expect(hashtable.contains ('ashar2')).toBeNull;
  expect(hashtable.contains ('ashar')).toBeTruthy();

});

it ('should handle a collision within the hashtable' , ()=>{
  let hashtable = new HashTable (1021);
  hashtable.add ('ashar' , 'tired2');
  hashtable.add ('ashra' , 'tired2');
  hashtable.add ('sahra' , 'tired3');


  let hashed = hashtable.hash ('ashar');
  expect(hashtable.table[hashed].head.value).toEqual ({'ashar': 'tired2'});
  expect(hashtable.table[hashed].head.next.value).toEqual ({'ashra': 'tired2'});
  expect(hashtable.table[hashed].head.next.next.value).toEqual ({'sahra': 'tired3'});

});

it ('should retrieve a value from a bucket within the hashtable that has a collision' , ()=>{
  let hashtable = new HashTable (1021);
  hashtable.add ('ashar' , 'tired2');
  hashtable.add ('ashra' , 'tired2');
  let arr = hashtable.get ('ashar');
  expect (arr[0]).toEqual ('tired2');
  expect (arr[1]).toEqual ('tired2');
});
it ('edge case, should raise exception when the kye is not in the bucket ' , ()=>{

  let hashtable = new HashTable (1021);
  hashtable.add ('ashar' , 'tired100000000000000');

  
  expect (hashtable.get ('lana')).toEqual ('sorry the inserted key  is not in the bucket');
});


it ('should hash a key to an in-range value' , ()=>{
  let hashtable = new HashTable (1021);
  let hashed = hashtable.hash ('ashar');
  expect (hashed).toBeLessThanOrEqual (599 % hashtable.size);
});

