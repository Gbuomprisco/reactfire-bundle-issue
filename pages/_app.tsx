import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

function MyApp({ Component, pageProps }: AppProps) {
  return <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Component {...pageProps} />
  </FirebaseAppProvider>
}

export default MyApp
