/*

Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName (arrays) {
    let smallest = arrays[0]
   for(const friend of arrays) {
    if(friend.length < smallest.length) {
        smallest = friend;
    }
   }
   return smallest;
}

const smallest = smallestName(friends);
console.log('The smallest name is:' ,smallest);