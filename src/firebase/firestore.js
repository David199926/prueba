import { fb as firebase } from './firebase-config'
import 'firebase/firestore';

const db = firebase.firestore();
export default db;