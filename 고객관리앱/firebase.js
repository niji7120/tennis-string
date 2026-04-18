// 파이어베이스 설정
const firebaseConfig = {
    apiKey: "AIzaSyBAMGaF-5vqELG_vaSHUgBhKi0Fe6tMflI",
    authDomain: "rucci-string260414.firebaseapp.com",
    databaseURL: "https://rucci-string260414-default-rtdb.firebaseio.com",
    projectId: "rucci-string260414",
    storageBucket: "rucci-string260414.firebasestorage.app",
    messagingSenderId: "445012947600",
    appId: "1:445012947600:web:9b408e72ad336a67041e15"
};

// 앱 초기화
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();