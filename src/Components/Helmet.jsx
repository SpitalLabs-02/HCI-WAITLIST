import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>HUMMINGBIRDS CARE INITIATIVE</title>
        <meta name="description" content="We connect qualified, compassionate caregivers with care recipients - allowing care recipients and their families enjoy peace of mind and convenience." />
        <meta name="keywords" content="caregivers, care recipients, compassionate, qualified" />
        <meta name="author" content="Spital Labs" />
      </Helmet>

      <h1>Welcome to HUMMINGBIRDS CARE INITIATIVE</h1>
    </div>
  );
}

export default Home;