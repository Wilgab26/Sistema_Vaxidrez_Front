// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config : {
      apiKey: "AIzaSyDCJGbvwr2LApzmLf1jrS7xq4hRFmn1pfs",
      authDomain: "ecommerce-18f25.firebaseapp.com",
      projectId: "ecommerce-18f25",
      storageBucket: "ecommerce-18f25.appspot.com",
      messagingSenderId: "942365243255",
      appId: "1:942365243255:web:c22c5c6534357556aa9372"
    }
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
