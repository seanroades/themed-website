import './Home.scss'
import '../../../App.scss'
import Header from '../../Components/Header/Header'
import EmailForm from '../../Components/EmailForm/EmailForm'
import Button from 'react-bootstrap/Button'

function Home() {
  return (
    <div className="Home">
    <Header />
    <div className="HomeBG"></div>
      <div className="EntryBox clearfix">
        <div className="TextContainer">
          <h1 className="LargeTitle CenterTextMod ItalicMod TextCenter">INVEST OFF THE GRID</h1>
          <h2 className="MediumTitle TextSpacer CenterTextMod">
            Republic Realm is the premier digital real estate investor and developer in the metaverse.
          </h2>
          <h2 className="SmallTitle TextSpacer CenterTextMod">
            Stay up to date with our newsletter, Realm Roundup
          </h2>
          <div className="FormCenter clearfix TextSpacer">
            <div className="EmailBoxLeft">
              <EmailForm />
            </div>
            <Button className="InlineMod FloatRightMod custom-btn-light XSmallTitlePrimary">Submit</Button>
          </div>
        </div>
      </div>
      <div className="SecondaryBG">
        <div className="EntryBox2 clearfix">
          <div className="TextContainer2">
            <h1 className="MediumTitleDark">
              The popularity and adoption of decentralized virtual worlds has led to the evolution of an entirely new asset class: <h1 className="MediumTitleDark PrimaryTextMod InlineMod">digital real estate investment</h1>
            </h1>
            <p className="DescriptiveTextDark TextSpacer">
              People are spending increasingly more time in virtual worlds, or metaverses, for both leisure and work.
            </p>
            <p className="DescriptiveTextDark TextSpacer">
            At the intersection of emerging technology like virtual reality and blockchain, developers, investors and hobbyists alike are creating a vibrant digital real estate market.
            </p>
          </div>
          <div className="ImageContainer">
            <p>
              image goes here
            </p>
          </div>
        </div>
      </div>
      <div className="ThirdBG">
      <div className="EntryBox2 clearfix">
          <div className="TextContainer3">
            <h1 className="MediumTitleDark">
              What is a <h1 className="MediumTitleDark PrimaryTextMod InlineMod">Metaverse?</h1>
            </h1>
            <p className="DescriptiveTextDark TextSpacer">
            An alternate digital reality where people socialize, work, play, and transact. Metaverses built on the blockchain are self-contained virtual cities and economies that simulate real-world interactions. 
            </p>
          </div>
          <div className="ImageContainer FloatRightMod">
            <p>
              image goes here
            </p>
          </div>
        </div>
      </div>
      <div className="EntryBox3 clearfix">
      </div>
    </div>
  );
}

export default Home;