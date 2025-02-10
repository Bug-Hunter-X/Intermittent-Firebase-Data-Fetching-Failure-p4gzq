```javascript
// Firebase Realtime Database
firebase.database().ref('/users/' + userId).once('value', function(snapshot) {
  if (snapshot.exists()) {
    // User exists
    console.log('User exists:', snapshot.val());
  } else {
    // User does not exist
    console.log('User does not exist.');
  }
}).catch(function(error) {
  console.error('Error fetching user:', error);
});

// Firebase Authentication
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('User is signed in:', user);
  } else {
    // User is signed out.
    console.log('User is signed out.');
  }
});
```