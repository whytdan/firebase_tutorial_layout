import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

class FirebaseService {

    init(success){
        if (firebase.apps.length) {
			return;
		}
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
        this.auth = firebase.auth();
		success(true);
    }

    getUserData = userId => {
        if(!firebase.apps.length){
            return false;
        }
        return new Promise((resolve, reject) => {
            this.db
            .collection('users')
            .doc(userId)
            .get()
            .then(doc => {
                if(doc.exists){
                    console.log('USER DATA: ', doc.data());
                    const user = doc.data();
                    resolve(user)
                } else {
                    console.log('NO such document!')
                }
            })
        })
    }

    updateUserData = user => {
        if(!firebase.apps.length){
            return false;
        }
        return this.db.doc(`users/${user.uid}`).set(user);
    }

    onAuthStateChanged = callback => {
		if (!this.auth) {
			return;
		}
		this.auth.onAuthStateChanged(callback);
	};

    signOut = () => {
        if(!this.auth){
            return
        }
        this.auth.signOut();
    }
}

const instance = new FirebaseService();

export default instance;