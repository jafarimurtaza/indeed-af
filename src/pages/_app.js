import "@/styles/globals.css";
import Header from "../components/Home/Header";
import MainFooter from "../components/Footer/MainFooter";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <MainFooter />
    </div>
  );
}
