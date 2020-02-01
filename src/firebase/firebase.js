import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
export { firebase,googleAuthProvider, database as default };

// database.ref("expenses").on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// });

// database.ref("expenses").on('child_changed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// });

// database.ref("expenses").on('child_added',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// });
// // database.ref("expenses").push({
// //   description:"PC",
// //   note:"this a note",
// //   amount:2500,
// //   createdAt:2135466534164
// // });

// // database.ref("expenses")
// //   .once('value')
// //   .then((snapshot)=>{
// //     const expenses=[];


// //     snapshot.forEach((childSnapshot)=>{
// //       expenses.push({
// //         id:childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     })

// //     console.log(expenses)
// //   })
// //   .catch((e)=>{
// //     console.log('unable to fetch data due to ',e)
// //   })

// // database.ref('expenses').on('value',(snapshot)=>{
// //   const expenses=[];

// //   snapshot.forEach((childSnapshot)=>{
// //     expenses.push({
// //       id:childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   });

// //   console.log(expenses)
// // },(e)=>{
// //   console.log('Unable to track changes due to',e)
// // })