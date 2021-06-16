const someThingsWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hey!');
        }else {
            reject('whoooo!');
        }
    });
 };

 someThingsWillHappen()
 .then(response => console.log(response))
 .catch(err => console.log(err));

 const someThingsWillHappen2 = () => {
     return new Promise((resolve, reject) =>{
         if (true){
             setTimeout(() => {
                 resolve('true');
             }, 2000);
         }else{
             const error = new Error('whoooop!');
             reject(error);
         }
     });
 }

 someThingsWillHappen2()
 .then(response => console.log(response))
 .catch(err => console.error(err));

 Promise.all([someThingsWillHappen(),someThingsWillHappen2()])
 .then(response => {
     console.log('array of results', response);
 })
 .catch(err => { 
    console.error(err);
 })